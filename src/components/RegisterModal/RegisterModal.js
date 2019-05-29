import React, { Component } from 'react';
import { compose } from 'redux';
import 'antd/dist/antd.css';
import './RegisterModal.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Alert, Switch, Icon, Button } from 'antd';
import {
  register,
  openLoginModal,
  closeRegisterModal
} from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";
import Recaptcha from "react-recaptcha";

class RegisterModal extends Component {
  state = {
    visible: this.props.openregisterModal,
    isVendor: false,
    msg: null,
    captchaVerified: false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    openregisterModal: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    openLoginModal: PropTypes.func.isRequired,
    closeRegisterModal: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({
          msg: error.msg
        });
      } else {
        this.setState({
          msg: null
        });
      }
    }

    if (this.state.visible) {
      if (isAuthenticated) {
        this.toggleModal();
      }
    }
  }

  toggleModal = () => {
    this.props.clearErrors();
    this.setState({
      isVendor: false,
      captchaVerified: false
    });
    this.props.closeRegisterModal();
  };

  handleCancel = () => {
    this.toggleModal();
  };

  handleCreate = ({ name, email, password }) => {
    const { isVendor, captchaVerified } = this.state;
    const newUser = {
      name,
      email,
      password,
      isVendor
    };
    if (captchaVerified)
      this.props.register(newUser);
    else
      alert("Please verify that you are a human !!!");
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.handleCreate(values);
      }
    });
  };


  onChangeSwitch = (checked, e) => {
    this.setState({ isVendor: checked });
  };

  openLoginModal = () => {
    this.props.clearErrors();
    this.setState({
      isVendor: false,
      captchaVerified: false
    });
    this.props.openLoginModal();
  };
  captchaLoad = () => {
    console.log("Captcha loaded");
  }
  onEnterKeyPress = (e)=>{
    if(e.key === 'Enter'){
      this.handleSubmit(e)
    }
  }
  verifyCaptcha = (response) => {
    if (response) {
      this.setState({
        captchaVerified: true
      })
    }
  }


  render() {
    const { visible, msg } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="vertical" className="register-form" onSubmit={this.handleSubmit} onKeyPress ={this.onEnterKeyPress}>
          <Modal
            visible={visible}
            title="Register"
            okText="Register"
            onCancel={this.handleCancel}
            onOk={this.handleSubmit}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" loading={this.props.isLoading} onClick={this.handleSubmit}>
                Register
              </Button>,
            ]}
          >
            {msg ? <Alert message={msg} type="error" /> : null}
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your name!' }],
              })(
                <Input
                  type="text"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Name"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please enter email!' }, { type: 'email', message: 'Please enter valid email!' },],
              })(
                <Input
                  type="email"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <Input
                  type="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item label="Are you a vendor also?">
              <Switch checked={this.state.isVendor} onChange={this.onChangeSwitch} />
            </Form.Item>
            <Recaptcha
              sitekey="6LdBLaUUAAAAAIB8O9rgu9pAw9Tplg8lda7YM50W"
              render="explicit"
              onloadCallback={this.captchaLoad}
              verifyCallback={this.verifyCaptcha}
            />
            <br></br>
            Already have an account?
            <button className="newbutton2" onClick={this.openLoginModal}>Login</button>
          </Modal>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  error: state.error,
  openregisterModal: state.auth.openregisterModal
});

export default compose(
  connect(mapStateToProps, { register, clearErrors, openLoginModal, closeRegisterModal }),
  Form.create({ name: 'normal_register' })
)(RegisterModal);
import React, { Component } from 'react';
import { compose } from 'redux';
import 'antd/dist/antd.css';
import './LoginModal.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  login,
  closeLoginModal,
  openRegisterModal
} from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";
import { Modal, Form, Input, Icon, Alert, Button } from "antd";

class LoginModal extends Component {
  state = {
    visible: this.props.openloginModal,
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    openloginModal: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    closeLoginModal: PropTypes.func.isRequired,
    openRegisterModal: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
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
        console.log("hello");
        this.toggleModal();
      }
    }
  }

  toggleModal = () => {
    this.props.clearErrors();
    this.props.closeLoginModal();
  };

  handleCancel = () => {
    this.toggleModal();
  };

  handleCreate = ({email,password}) => {
    const user = {
      email,
      password,
    };

    this.props.login(user);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.handleCreate(values);
      }
    });
  };

  openRegisterModal = () => {
    this.props.clearErrors();
    this.props.openRegisterModal();
  };

  render() {
    const { visible, msg } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="vertical" className="login-form" onSubmit={this.handleSubmit}>
        <Modal
          visible={visible}
          title="Login"
          okText="Login"
          onCancel={this.handleCancel}
          onOk={this.handleSubmit}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={this.props.isLoading} onClick={this.handleSubmit}>
              Login
            </Button>,
          ]}
        >
          {msg ? <Alert message={msg} type="error" /> : null}
          
            <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'Please enter valid email!' },],
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
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Password"
                  type="password"
                />,
              )}
            </Form.Item>

            Don't have an account?
            <button className="newbutton" onClick={this.openRegisterModal}>Register</button>
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
  openloginModal: state.auth.openloginModal
});

export default compose(
  connect(mapStateToProps,{ login, clearErrors, closeLoginModal, openRegisterModal }),
  Form.create({ name: 'normal_login' })
)(LoginModal);
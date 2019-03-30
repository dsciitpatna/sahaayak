import React, { Component } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Form, Input, Alert, Radio } from "antd";
import {
  register,
  openLoginModal,
  closeRegisterModal
} from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

class RegisterModal extends Component {
  state = {
    visible: this.props.openregisterModal,
    name: "",
    email: "",
    password: "",
    role: 'user',
    msg: null
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
      name: "",
      email: "",
      password: "",
      role: null
    });
    this.props.closeRegisterModal();
  };

  handleCancel = () => {
    this.toggleModal();
  };

  handleCreate = () => {
    const { name, email, password, role } = this.state;
    const newUser = {
      name,
      email,
      password,
      role
    };
    this.props.register(newUser);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  openLoginModal = () => {
    this.props.clearErrors();
    this.setState({
      name: "",
      email: "",
      password: "",
      role: null
    });
    this.props.openLoginModal();
  };

  render() {
    const { visible, name, email, password, role, msg } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title="Register"
          okText="Register"
          onCancel={this.handleCancel}
          onOk={this.handleCreate}
        >
          {msg ? <Alert message={msg} type="error" /> : null}
          <Form layout="vertical">
            <Form.Item label="Role">
              <Radio.Group name="role" buttonStyle="solid" value={role} onChange={this.onChange}>
                <Radio.Button value="user">User</Radio.Button>
                <Radio.Button value="vendor">Vendor</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Name">
              <Input name="name" value={name} onChange={this.onChange} />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                type="password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </Form.Item>
            Already have an account? <a href="#" onClick={this.openLoginModal}>Login</a>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  openregisterModal: state.auth.openregisterModal
});

export default connect(
  mapStateToProps,
  { register, clearErrors, openLoginModal, closeRegisterModal }
)(RegisterModal);

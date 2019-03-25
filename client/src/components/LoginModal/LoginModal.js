import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/authActions';
import { clearErrors } from '../../redux/actions/errorActions';
import { Modal, Button, Form, Input, Alert } from 'antd';

class LoginModal extends Component {
  state = {
    visible: false,
    email: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id = 'LOGIN_FAIL') {
        this.setState({
          msg: error.msg
        })
      } else {
        this.setState({
          msg: null
        })
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
      visible: !this.state.visible,
      email: '',
      password: ''
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  handleCreate = () => {
    const { email, password } = this.state;
    const user = {
      email,
      password
    }

    this.props.login(user);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { visible, email, password, msg } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.toggleModal}>Login</Button>
        <Modal
          visible={visible}
          title="Login"
          okText="Login"
          onCancel={this.handleCancel}
          onOk={this.handleCreate}
        >
          {msg ? <Alert message={msg} type="error" /> : null}
          <Form layout="vertical">
            <Form.Item label="Email">
              <Input type="email" name="email" value={email} onChange={this.onChange} />
            </Form.Item>
            <Form.Item label="Password">
              <Input type="password" name="password" value={password} onChange={this.onChange} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
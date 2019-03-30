import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, closeLoginModal, openRegisterModal } from '../../redux/actions/authActions';
import { clearErrors } from '../../redux/actions/errorActions';
import { Modal, Form, Input, Alert } from 'antd';

class LoginModal extends Component {
  state = {
    visible: this.props.openloginModal,
    email: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    openloginModal: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    closeLoginModal: PropTypes.func.isRequired,
    openRegisterModal: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'LOGIN_FAIL') {
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
        console.log('hello');
        this.toggleModal();
      }
    }
  }

  toggleModal = () => {
    this.props.clearErrors();
    this.setState({
      email: '',
      password: ''
    })
    this.props.closeLoginModal();
  }

  handleCancel = () => {
    this.toggleModal();
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

  toggleRegisterModal = () => {
    this.props.clearErrors();
    this.setState({
      email: '',
      password: ''
    })
    this.props.openRegisterModal();
  }

  render() {
    const { visible, email, password, msg } = this.state;
    return (
      <div>
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
            {/* Don't have an account? <Link title="Register" /> */}
            Don't have an account? <a href="#" onClick={this.toggleRegisterModal}>Register</a>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  openloginModal: state.auth.openloginModal
})

export default connect(mapStateToProps, { login, clearErrors, closeLoginModal, openRegisterModal })(LoginModal);
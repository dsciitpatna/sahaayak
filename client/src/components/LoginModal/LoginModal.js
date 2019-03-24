import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input } from 'antd';

const LoginForm = Form.create({ name: 'loginForm' })(
  class extends Component {
    render() {
      const {
        visible, onCancel, onCreate
      } = this.props;
      return (
        <Modal
          visible={visible}
          title="Login"
          okText="Login"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password">
              <Input type="password" />
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class LoginModal extends Component {
  state = {
    visible: false
  }
  toggleModal = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  handleCreate = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.toggleModal}>Login</Button>
        <LoginForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default LoginModal;
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input } from 'antd';

const RegisterForm = Form.create({ name: 'registerForm' })(
  class extends Component {
    render() {
      const {
        visible, onCancel, onCreate
      } = this.props;
      return (
        <Modal
          visible={visible}
          title="Register"
          okText="Register"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input />
            </Form.Item>
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

class RegisterModal extends Component {
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
        <Button type="primary" onClick={this.toggleModal}>Register</Button>
        <RegisterForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default RegisterModal;
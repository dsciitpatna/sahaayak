import React, { Component, Fragment } from 'react';
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

class Location extends Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <Fragment>
        <h3>Location Information</h3>
        <hr />
        <Form {...formItemLayout}>
          <Form.Item label="Business Name">
            <Input />
          </Form.Item>
          <Form.Item label="Building">
            <Input />
          </Form.Item>
          <Form.Item label="Street">
            <Input />
          </Form.Item>
          <Form.Item label="Landmark">
            <Input />
          </Form.Item>
          <Form.Item label="Area">
            <Input />
          </Form.Item>
          <Form.Item label="City">
            <Input />
          </Form.Item>
          <Form.Item label="Pin Code">
            <Input />
          </Form.Item>
          <Form.Item label="State">
            <Input />
          </Form.Item>
          <Form.Item label="Country">
            <Input />
          </Form.Item>
        </Form>
      </Fragment>
    )
  }
}

export default connect(
  null,
  null
)(Location);

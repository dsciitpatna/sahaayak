import React, { Component, Fragment } from 'react';
import { Form, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

class Contact extends Component {
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
        <h3>Contact Information</h3>
        <hr />
        <Form {...formItemLayout}>
          <Form.Item label="Contact Person">
            <Row gutter={8}>
              <Col span={12}>
                <Input placeholder="Name" />
              </Col>
              <Col span={12}>
                <Input placeholder="Designation" />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="Landline No.">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile No.">
            <Input />
          </Form.Item>
          <Form.Item label="Fax No.">
            <Input />
          </Form.Item>
          <Form.Item label="Toll Free No.">
            <Input />
          </Form.Item>
          <Form.Item label="Email Id">
            <Input />
          </Form.Item>
          <Form.Item label="Website">
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
)(Contact);
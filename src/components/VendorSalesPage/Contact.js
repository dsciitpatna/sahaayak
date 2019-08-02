import React, { Component, Fragment } from 'react';
import { Form, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillUnmount = ()=>{
    this.props.addDatafunction("contact", this.state);
  }
  onChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }
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
                <Input onChange={this.onChange} placeholder="Name" name="name"/>
              </Col>
              <Col span={12}>
                <Input onChange={this.onChange} placeholder="Designation" name="designation"/>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="Landline No.">
            <Input onChange={this.onChange} name="landline"/>
          </Form.Item>
          <Form.Item label="Mobile No.">
            <Input onChange={this.onChange} name="mobile" />
          </Form.Item>
          <Form.Item label="Fax No.">
            <Input onChange={this.onChange}  name="fax"/>
          </Form.Item>
          <Form.Item label="Toll Free No.">
            <Input onChange={this.onChange} name="tollFree"/>
          </Form.Item>
          <Form.Item label="Email Id">
            <Input onChange={this.onChange} name="email" />
          </Form.Item>
          <Form.Item label="Website">
            <Input onChange={this.onChange} name="website"/>
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
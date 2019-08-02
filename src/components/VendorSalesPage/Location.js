import React, { Component, Fragment } from 'react';
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillUnmount =()=>{
    this.props.addDatafunction("location",this.state);
  }
  onChange =e=>{
    this.setState({[e.target.name]: e.target.value});
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
        <h3>Location Information</h3>
        <hr />
        <Form {...formItemLayout} onSubmit={this.onSubmit}>
          <Form.Item label="Business Name">
            <Input name="businessName" onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="Building">
            <Input name="building" onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="Street">
            <Input name="street" onChange = {this.onChange}/>
          </Form.Item>
          <Form.Item label="Landmark">
            <Input name="landmark" onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="Area">
            <Input name="area" onChange={this.onChange}/>
          </Form.Item>
          <Form.Item label="City">
            <Input name="city" onChange={this.onChange}/>
          </Form.Item>
          <Form.Item label="Pin Code">
            <Input name="pinCode" onChange={this.onChange}/>
          </Form.Item>
          <Form.Item label="State">
            <Input name="state" onChange = {this.onChange}/>
          </Form.Item>
          <Form.Item label="Country">
            <Input name="country" onChange={this.onChange}/>
          </Form.Item>
        </Form>
      </Fragment>
    )
  }
}
const locationRegForm = Form.create({name: 'location'})(Location);
export default connect(
  null,
  null
)(locationRegForm);

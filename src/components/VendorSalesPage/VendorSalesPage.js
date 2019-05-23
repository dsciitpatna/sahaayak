import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import {
  Form, Input, Select, Button, Typography,Alert
} from 'antd';
import {registerBusiness} from '../../redux/actions/vendorActions';
const { Option } = Select;
const { Text } = Typography;
const { TextArea } = Input;

class VendorSalesPage extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    values: {

    },
    msg:  ''
  };
  componentDidUpdate(prevProps,prevState){
    const values = this.state.values;
    if(values !== prevState.values){
      this.props.registerBusiness(values);
      const {error} = this.props;
      if(error.id === "REGISTER_BUSINESS_FAIL"){
        this.setState({
          msg : error.msg
        });
      } else{
        this.setState({
          msg : null
        });
      }
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ values: values })
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  onChange = (value) => {
    console.log(value);
  }


  render() {
    const { isAuthenticated, user } = this.props;
    const { msg} = this.state;
    if (isAuthenticated && user.isVendor === true) {
      const { getFieldDecorator } = this.props.form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      );

      return (
        <Fragment>
               {msg ? <Alert message={msg} type="error" /> : null}
              
          <Text strong style={{ fontSize: 40 }}>Register Your Business With Us</Text>
          <Form {...formItemLayout} style={{ paddingTop: 40 }} onSubmit={this.handleSubmit}>
            <Form.Item
              label={(
                <span>
                  Business Name&nbsp;
              </span>
              )}
            >
              {getFieldDecorator('businessname', {
                rules: [{ required: true, message: 'Please input your Business namer!', whitespace: true }],
              })(
                <Input placeholder="Create Your Brand" />
              )}
            </Form.Item>
            <Form.Item
              label=" Enter a brief description"
            >
              {getFieldDecorator('description', {
                rules: [{  required: true, message: 'Enter a brief description of services offered' }],
              })(
                <TextArea rows={4} placeholder="Explain what you do or offer" />
              )}
            
            </Form.Item>

            <Form.Item
              label="Habitual Residence"
            >
              {getFieldDecorator('residence', {
                
                rules: [{ required: false, message: 'Please select your habitual residence!' }],
              })(
                <TextArea rows={4} placeholder="Enter house address if applicable" />
              )}
            
            </Form.Item>

            <Form.Item
              label="Phone Number"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Enter valid phone number" />
              )}
            </Form.Item>
         


            <Form.Item {...tailFormItemLayout}>
              <Button type="danger" block htmlType="submit">Enter The Details</Button>
            </Form.Item>
          </Form>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <p>Please login to view user Sales page</p>
        </Fragment>
      )
    }
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(VendorSalesPage);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.error
});

export default connect(
  mapStateToProps,
  {registerBusiness}
)(WrappedRegistrationForm);

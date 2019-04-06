import React, { Component } from 'react'
import {
  Form, Input, Cascader, Select, Checkbox, Button, AutoComplete, Typography, DatePicker
} from 'antd';

const { Option } = Select;
const { Text } = Typography;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;

class VendorSalesPage extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    values: {

    }
  };

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
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  onChange = (value) => {
    console.log(value);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const options = [{
      value: 'Payment Mode 1',
      label: 'Payment Mode 1',
      children: [{
        value: 'Bank 1',
        label: 'Bank 1',
        value: 'Bank 2',
        label: 'Bank 2',
        value: 'Bank 3',
        label: 'Bank 3',

      }],

    }, {
      value: 'Payment Mode 2',
      label: 'Payment Mode 2',
      children: [{
        value: 'Bank 1',
        label: 'Bank 1',
        value: 'Bank 2',
        label: 'Bank 2',
        value: 'Bank 3',
        label: 'Bank 3',

      }],

    },
    {
      value: 'Payment Mode 3',
      label: 'Payment Mode 3',
      children: [{
        value: 'Bank 1',
        label: 'Bank 1',
        value: 'Bank 2',
        label: 'Bank 2',
        value: 'Bank 3',
        label: 'Bank 3',

      }],


    }];

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

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <React.Fragment>
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
              rules: [{ type: 'array', required: true, message: 'Enter a brief description of services offered' }],
            })}
            <TextArea rows={4} placeholder="Explain what you do or offer" />
          </Form.Item>
          <Form.Item
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input placeholder="Enter a vlid email address" />
            )}
          </Form.Item>

          <Form.Item
            label="Habitual Residence"
          >
            {getFieldDecorator('residence', {
              initialValue: ['Bhopal', 'Jharkhand', 'Heydrabad'],
              rules: [{ type: 'array', required: false, message: 'Please select your habitual residence!' }],
            })}
            <TextArea rows={4} placeholder="Enter house address if applicable" />
          </Form.Item>
          <Form.Item
            label="Shop Residence"
          >
            {getFieldDecorator('residence', {
              initialValue: ['Bhopal', 'Jharkhand', 'Heydrabad'],
              rules: [{ type: 'array', required: false, message: 'Select your shop address if applicable' }],
            })}
            <TextArea rows={4} placeholder="Enter Shop address if applicable" />
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
          <Form.Item label="Payment Method">
            {getFieldDecorator('payment', {
              rules: [{ required: true, message: "Enter the way you accept payment" }]
            })}
            <Cascader options={options} onChange={this.onChange} placeholder="Please select" />
          </Form.Item>
          <Form.Item
            label="Website"
          >
            {getFieldDecorator('website', {
              rules: [{ required: true, message: 'Please input website!' }],
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            )}
          </Form.Item>
          <Form.Item label="Established Date">
            {getFieldDecorator('Established', { rules: [{ required: true, message: 'Please Input establishment date' }], })}
            <DatePicker onChange={this.onChange} /></Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>I have read the <a href="">agreement</a></Checkbox>
            )}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="danger" block>Enter The Details</Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(VendorSalesPage);

export default WrappedRegistrationForm

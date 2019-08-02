import React, { Component, Fragment } from 'react';
import { Form, Input, Radio, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Cash', 'Debit Card', 'Credit Card', 'BHIM UPI'];
//const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
class Business extends Component {
  constructor(props){
    super(props)
      this.state = {
        checkedList: [],
        checkAll: false,
        displayOperationHours: null
    }
  }
  componentWillUnmount = ()=>{
    this.props.addDatafunction("business",this.state);
  }
  onChangePaymentOptions = checkedList => {
    this.setState({
      checkedList,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      checkAll: e.target.checked,
    });
  };
  onChangeDisplayHours = e =>{
     this.setState({displayOperationalHours: e.target.value === 1 ? true: false});
  }
  onChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };
    return (
      <Fragment>
        <h3>Business Information</h3>
        <hr />
        <div>
          <h5>Hours of Operation</h5>
          <div style={{ marginBottom: '20px' }}>
            <Radio.Group onChange={this.onChangeDisplayHours}>
              <Radio value={1}>Display hours of operation</Radio>
              <Radio value={2}>Do not display hours of operation</Radio>
            </Radio.Group>
          </div>
          {/* {Days.map(day => {
            return (<div style={{ marginBottom: '10px' }}>
              <Row gutter={8}>
                <Col span={2}>{day}:</Col>
                <Col span={7}><TimePicker use12Hours format="h:mm A" size="small" onChange={this.timeChange}/> to <TimePicker use12Hours format="h:mm A" size="small" /></Col>
                <Col span={3}><Checkbox>Closed</Checkbox></Col>
              </Row>
            </div>)
          })} */}
        </div>
        <hr />
        <div>
          <h5>Payment Modes Accepted by You</h5>
          <Checkbox onChange={this.onCheckAllChange} checked={this.state.checkAll}>
            Select all
          </Checkbox>
          <CheckboxGroup
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChangePaymentOptions}
          />
        </div>
        <hr />
        <div>
          <h5>Company Information</h5>
          <Form {...formItemLayout}>
            <Form.Item label="Year of Establishment">
              <Input  name="yearOfEstablishment" onChange={this.onChange}/>
            </Form.Item>
            <Form.Item label="category name">
              <Input  name="categoryName" onChange={this.onChange}/>
            </Form.Item>
            <Form.Item label="Certification">
              <Input name="certification" onChange={this.onChange}/>
            </Form.Item>
          </Form>
        </div>
      </Fragment >
    )
  }
}

export default connect(
  null,
  null
)(Business);
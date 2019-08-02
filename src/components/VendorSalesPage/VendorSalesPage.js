import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Form, Button, Typography, Steps, notification } from 'antd';
import {compose } from 'redux';
import Location from './Location';
import Contact from './Contact'
import Business from './Business';
import ListBusiness from './ListBusiness';
import {registerBusiness} from '../../redux/actions/vendorActions';
const { Text } = Typography;
const { Step } = Steps;
const registerData = {};
const addData =(dataName,data) =>{
     registerData[dataName] = data
}

const steps = [
  {
    title: 'Step 1',
    content: <Location addDatafunction={addData}/>,
  },
  {
    title: 'Step 2',
    content: <Contact addDatafunction={addData}/>,
  },
  {
    title: 'Step 3',
    content: <Business  addDatafunction={addData}/>,
  },
  {
    title: 'Step 4',
    content: <ListBusiness />,
  },
];

class VendorSalesPage extends Component {
  state = {
    current: 0,
  };
  openNotificationWithIcon = (type,message) => {
    notification[type]({
      message: message,
    });
  };
  onChange = current => {
    this.setState({ current });
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    let registerStatus = null;
    const {submitStatus} = this.props;
    if(submitStatus!==null){
      registerStatus = submitStatus === "Loading"? this.openNotificationWithIcon('info',"Uploading your service") :submitStatus === 200 ? this.openNotificationWithIcon('success',"Registered your service"):this.openNotificationWithIcon('error',"Some error occured");
    }
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === true) {
      const { current } = this.state;
      return (
        <Fragment>
          {registerStatus}
          <div style={{ width: '80%', margin: '10px auto' }}>
            <Text strong style={{ fontSize: 40 }}>Register Your Business With Us</Text>
            <hr style={{ marginBottom: '30px' }} />
            <Steps current={current} onChange={this.onChange}>
              <Step title="Step 1" />
              <Step title="Step 2" />
              <Step title="Step 3" />
              <Step title="Finish" />
            </Steps>
            <div style={{ margin: '20px 0px' }}>{steps[current].content}</div>
            <div style={{ float: 'right' }}>
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                  Next
            </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={()=>{this.props.registerBusiness(registerData);}}>
                  Done
            </Button>
              )}
              {current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
            </Button>
              )}
            </div>
          </div>
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
  submitStatus:state.vendor.status
});

export default compose(
  connect(mapStateToProps,{registerBusiness})
)(WrappedRegistrationForm);
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Form, Button, Typography, Steps, message } from 'antd';
import Location from './Location';
import Contact from './Contact'
import Business from './Business';
import ListBusiness from './ListBusiness';

const { Text } = Typography;

const { Step } = Steps;

const steps = [
  {
    title: 'Step 1',
    content: <Location />,
  },
  {
    title: 'Step 2',
    content: <Contact />,
  },
  {
    title: 'Step 3',
    content: <Business />,
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

  onChange = current => {
    console.log(current);
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
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === true) {
      const { current } = this.state;
      return (
        <Fragment>
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
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
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
});

export default connect(
  mapStateToProps,
  null,
)(WrappedRegistrationForm);

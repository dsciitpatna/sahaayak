import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

class VendorDashboard extends Component {
  render() {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === true) {
      return (
        <Fragment>
          <p>Vendor Logged in</p>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <p>Please login to view vendor Dashboard.</p>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(VendorDashboard);

import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

class UserDashboard extends Component {
  render() {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === false) {
      return (
        <Fragment>
          <p>User Logged in</p>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <p>Please login to view user Dashboard.</p>
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
)(UserDashboard);
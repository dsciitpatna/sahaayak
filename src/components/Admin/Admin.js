import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";

class Admin extends Component {

  render() {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
      return (
        <Fragment>
          <p>Admin Logged in</p>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <p>Unauthorized Access</p>
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
)(Admin);
import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";

class Categories extends Component {
  render() {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
      return (
        <Fragment>
          Categories
        </Fragment>
      )
    }
    else {
      return (
        <p>Unauthorized Access</p>
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
)(Categories);
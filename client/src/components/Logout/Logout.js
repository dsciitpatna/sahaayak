import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import { Icon } from "antd";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  render() {
    return (
      <Link to="/" onClick={this.props.logout}>
        <Icon type="export" />
        Logout
      </Link>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);

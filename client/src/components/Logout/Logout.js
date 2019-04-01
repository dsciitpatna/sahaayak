import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { logout } from '../../redux/actions/authActions';

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }
  render() {
    return (
      <Link to="/" onClick={this.props.logout}>Logout</Link>
    );
  }
}

export default connect(null, { logout })(Logout);
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { logout } from '../../redux/actions/authActions';

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }
  render() {
    return (
      <Fragment>
        <Link to="/">
          <Button type="primary" onClick={this.props.logout}>Logout</Button>
        </Link>
      </Fragment>);
  }
}

export default connect(null, { logout })(Logout);
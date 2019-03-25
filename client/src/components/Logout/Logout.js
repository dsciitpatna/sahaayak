import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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
        <Button type="primary" onClick={this.props.logout}>Logout</Button>
      </Fragment>);
  }
}

export default connect(null, { logout })(Logout);
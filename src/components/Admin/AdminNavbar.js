import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './navbar.css'

const { Sider } = Layout;

class AdminNavbar extends Component {

  render() {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
      return (
        <Fragment>
          <br/>
          <header className="header">
            <ul className="main-nav">
                <li><Link to="/admin/">Dashboard</Link></li>
                <li><Link to="/admin/categories">Categories</Link></li>
                <li><Link to="/admin/users">Users</Link></li>
            </ul>
	        </header> 

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
)(AdminNavbar);
import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

class AdminNavbar extends Component {

  render() {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
      return (
        <Fragment>
          <Sider
            style={{ left: 0, overflow: 'auto', minHeight: '100vh', marginTop: '63px' }}
          >
            <h2 style={{ color: 'white', textAlign: 'center', paddingTop: '10px' }}>Admin Panel</h2>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="form" />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/admin/categories">
                  <Icon type="form" />
                  <span>Categories</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/admin/users">
                  <Icon type="form" />
                  <span>Users</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
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
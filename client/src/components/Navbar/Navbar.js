import React, { Component } from 'react';
import './Navbar.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Navbar extends Component {

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          {/* <div className="navbar" /> */}
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" className="left">Sahaayak</Menu.Item>
            <Menu.Item key="2" className="right">Register</Menu.Item>
            <Menu.Item key="3" className="right">Login</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default Navbar;
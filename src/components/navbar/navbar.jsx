import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Layout, Menu 
} from 'antd';

const {Header} = Layout;

class Navbar extends Component {
  state = {}
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
    );
  }
}

export default Navbar;
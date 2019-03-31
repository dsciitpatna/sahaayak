import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";

import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;

class SideBar extends Component {
  render() {
    return (
      <Fragment>
        <Sider
          style={{  overflow: 'auto', height: '100vh', position: 'fixed', left: 0, }}
          trigger={null}
          collapsible
          collapsedWidth={95}
          collapsed={this.props.collapseProp}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="form" />
              <span>Plumber</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="form" />
              <span>Washerman</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="form" />
              <span>Electrician</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="form" />
              <span>Maid</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="form" />
              <span>Mason</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="form" />
              <span>Carpenter</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="form" />
              <span>Painter</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="form" />
              <span>Regular Repair Man</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="form" />
              <span>Beautician</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="form" />
              <span>Mason</span>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon type="form" />
              <span>Carpenter</span>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon type="form" />
              <span>Painter</span>
            </Menu.Item>
            <Menu.Item key="13">
              <Icon type="form" />
              <span>Regular Repair Man</span>
            </Menu.Item>
            <Menu.Item key="14">
              <Icon type="form" />
              <span>Beautician</span>
            </Menu.Item>
            <Menu.Item key="15">
              <Icon type="form" />
              <span>Beautician</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Fragment>
    );
  }
}

export default SideBar;

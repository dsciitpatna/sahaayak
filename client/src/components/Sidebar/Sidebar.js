import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

class SideBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Sider
          style={{ minHeight: 1000 }}
          trigger={null}
          collapsible
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
          </Menu>
        </Sider>
      </React.Fragment>
    );
  }
}

export default SideBar;

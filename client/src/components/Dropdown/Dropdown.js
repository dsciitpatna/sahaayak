import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Menu, Dropdown, Button, Icon } from "antd";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export default class DropdownMenu extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          Dashboard
          <Link to="/dashboard" />
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>
          <Icon type="edit" />
        </Button>
      </Dropdown>
    );
  }
}

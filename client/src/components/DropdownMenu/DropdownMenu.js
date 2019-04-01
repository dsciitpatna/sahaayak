import React, { Component } from "react";
import "antd/dist/antd.css";
import "./DropdownMenu.css";
import { connect } from "react-redux";
import Logout from "../Logout/Logout";
import { Menu, Dropdown, Button, Icon } from "antd";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class DropdownMenu extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    const { user } = this.props;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
      >
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
            </span>
          }
        >
          <MenuItemGroup>
            {user.isVendor ? (
              <Menu.Item>
                <Link to="/vendorDashboard">
                  <Icon type="idcard" />
                  Dashboard
                </Link>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <Link to="/userDashboard">
                  <Icon type="idcard" />
                  Dashboard
                </Link>
              </Menu.Item>
            )}
            <Menu.Item>
              <Logout />
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(DropdownMenu);

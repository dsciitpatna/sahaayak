import React, { Component } from "react";
import "antd/dist/antd.css";
import "./DropdownMenu.css";
import { connect } from 'react-redux';
import Logout from '../Logout/Logout';
import { Menu, Dropdown, Button, Icon } from "antd";
import { Link } from "react-router-dom";

class DropdownMenu extends Component {
  render() {
    const { user } = this.props;
    const menu = (
      <Menu>
        {user.isVendor ?
          (
            <Menu.Item>
              <Link to="/vendorDashboard">Dashboard</Link>
            </Menu.Item>
          ) : (
            <Menu.Item>
              <Link to="/userDashboard">Dashboard</Link>
            </Menu.Item>
          )
        }
        <Menu.Item>
          <Logout />
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

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(DropdownMenu);
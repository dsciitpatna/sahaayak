import React from "react";
import "antd/dist/antd.css";
import "./DropdownMenu.css";
import { connect } from "react-redux";
import Logout from "../Logout/Logout";
import { Menu, Icon, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";

const DropdownMenu=(props)=> {
    const { username } = props;
    const { isVendor, isAdmin } = props.user;
    const menu = (
      <Menu className="dropdown-margin">
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="home" style={{ paddingRight: 10 }} />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/Profile">
            <Icon type="edit" style={{ paddingRight: 10 }} />
            Profile
          </Link>
        </Menu.Item>
        {isVendor ? (
          <Menu.Item key="3">
            <Link to="/vendorDashboard">
              <Icon type="idcard" style={{ paddingRight: 10 }} />
              Dashboard
            </Link>
          </Menu.Item>
        ) : null}
        {isVendor ? (
          <Menu.Item key="4">
            <Link to="/vendorSalesPage">
              <Icon type="idcard" style={{ paddingRight: 10 }} />
              List Your Bussiness
            </Link>
          </Menu.Item>
        ) : null}
        {!isVendor ? (
          <Menu.Item key="5">
            <Link to="/userDashboard">
              <Icon type="idcard" style={{ paddingRight: 10 }} />
              Dashboard
            </Link>
          </Menu.Item>
        ) : null}
        {isAdmin && !isVendor ? (
          <Menu.Item key="6">
            <Link to="/admin">
              <Icon type="idcard" style={{ paddingRight: 10 }} />
              Admin
            </Link>
          </Menu.Item>
        ) : null}
        <Menu.Item key="7">
          <Logout />
        </Menu.Item>
      </Menu>
    );
    return (
      <React.Fragment>
        <Avatar
        >
          {username[0]}
        </Avatar>
        <Dropdown
          placement="bottomRight"
          overlay={menu}
          style={{ marginLeft: -20 }}
        >
          <Icon type="more" style={{ marginLeft: 15 }} />
        </Dropdown>
      </React.Fragment>
    );
  }

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(DropdownMenu);

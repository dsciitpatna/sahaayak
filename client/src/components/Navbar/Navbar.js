import React, { Component } from "react";
import "./Navbar.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Logout from "../Logout/Logout";
import { Layout, Menu, Icon } from "antd";
import SiderDemo from "../Sidebar/Sidebar";
import SideBar from "../Sidebar/Sidebar";
const { Header } = Layout;

class Navbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item key="1" className="left">
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
              Sahaayak
            </Menu.Item>
            {isAuthenticated ? (
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="4" className="right">
                  <Logout />
                </Menu.Item>
                <Menu.Item key="5" className="right">
                  <strong>{user ? `Welcome ${user.name}` : null}</strong>
                </Menu.Item>
              </Menu>
            ) : (
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="2" className="right">
                  <RegisterModal />
                </Menu.Item>
                <Menu.Item key="3" className="right">
                  <LoginModal />
                </Menu.Item>
              </Menu>
            )}
          </Menu>
        </Header>
        <SideBar collapseProp={this.state.collapsed} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Navbar);

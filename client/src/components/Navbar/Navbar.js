import React, { Component } from "react";
import "./Navbar.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from '../RegisterModal/RegisterModal';
import Logout from "../Logout/Logout";
import { Layout, Menu, Icon, Button } from "antd";
import SideBar from "../Sidebar/Sidebar";
import { openLoginModal } from '../../redux/actions/authActions';
const { Header } = Layout;

class Navbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    openLoginModal: PropTypes.func.isRequired
  };
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  openLoginModal = () => {
    this.props.openLoginModal();
  }
  render() {
    const { isAuthenticated, user, openloginModal, openregisterModal } = this.props.auth;

    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }} className="header">
          {isAuthenticated ? (
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              <Menu.Item key="1" className="left">
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
                Sahaayak
        </Menu.Item>
              <Menu.Item key="2" className="right">
                <Logout />
              </Menu.Item>
              <Menu.Item key="3" className="right">
                <strong class="username">{user ? `Welcome ${user.name}` : null}</strong>
              </Menu.Item>
            </Menu>
          ) : (
              <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
                <Menu.Item key="1" className="left">
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.toggle}
                  />
                  Sahaayak
            </Menu.Item>
                <Menu.Item key="3" className="right">
                  <Button type="primary" onClick={this.openLoginModal}>Login</Button>
                  {openloginModal ? <LoginModal /> : null}
                  {openregisterModal ? <RegisterModal /> : null}
                </Menu.Item>
              </Menu>
            )}

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
  { openLoginModal }
)(Navbar);

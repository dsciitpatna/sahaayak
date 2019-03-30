import React, { Component } from "react";
import "./Navbar.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from '../RegisterModal/RegisterModal';
import Logout from "../Logout/Logout";
import { Layout, Menu, Icon, Button } from "antd";
import SideBar from "../Sidebar/Sidebar";
import { openLoginModal } from '../../redux/actions/authActions';
import UserProfile from '../UserProfile/UserProfile';

const { Header, Content } = Layout;

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
      <Router>
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
          <Layout>
            <Content style={{ marginTop: '50px', padding: 24, background: '#fff', minHeight: 280 }}>
              <Switch>
                <Route exact path="/userProfile" component={UserProfile} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
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


import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Row, Col, Card, Menu, Avatar } from "antd";
import "antd/dist/antd.css";
import "./Settings.css";
import Account from "./Account";
import Password from "./Password";
import Share from "./Share";

const { Meta } = Card;

class Settings extends Component {
  state = {
    loading: false,
    currentTab: "account",
  }

  static propTypes = {
    auth: PropTypes.object,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    this.setState({
      currentTab: e.key,
    })
  }

  loadSettings = () => {
    const { currentTab } = this.state;
    switch (currentTab) {
      case 'account': { return <Account /> }
      case 'password': { return <Password /> }
      case 'share': { return <Share /> }
      default: { return null; }
    }
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { name, email } = user;
    if (isAuthenticated) {
      return (
        <Fragment>
          <Row gutter={16} style={{ width: '80%', margin: '10px auto' }}>
            <Col span={6}>
              <Card style={{ width: '100%', textAlign: 'center' }}>
                <Avatar size={100} icon="user" style={{ marginBottom: '10px' }} />
                <Meta title={name ? name : email} />
              </Card>
              <Card style={{ width: '100%' }} className="side-menu">
                <Menu onClick={this.handleClick} style={{ width: 230 }}>
                  <Menu.Item key="account">Account</Menu.Item>
                  <Menu.Item key="password">Password</Menu.Item>
                  <Menu.Item key="share">Share on Social Media</Menu.Item>
                </Menu>
              </Card>
            </Col>
            <Col span={18}>
              <Card style={{ width: '100%' }}>
                {this.loadSettings()}
              </Card>
            </Col>
          </Row>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <p>Please login to view user Profile.</p>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null
)(Settings);

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './DropdownMenu.css';
import { connect } from 'react-redux';
import Logout from '../Logout/Logout';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';


class DropdownMenu extends Component {
  state = {
    current: "mail"
  };

  render() {
    const { username } = this.props;
    const { isVendor } = this.props.user;
    const menu = (
      <Menu style={{ marginTop: 20 }}>
        <Menu.Item key="1">
          <Link to="/Profile">
            Profile
          </Link>
        </Menu.Item>
        {isVendor ?
          (
            <Menu.Item key="2">
              <Link to="/vendorDashboard">
                <Icon type="idcard" style={{ paddingRight: 10 }} />
                Dashboard
            </Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="2">
              <Link to="/userDashboard">
                <Icon type="idcard" style={{ paddingRight: 10 }} />
                Dashboard
              </Link>
            </Menu.Item>
          )
        }
        <Menu.Item key="3">
          <Logout />
        </Menu.Item>
      </Menu>
    );
    return (
      <React.Fragment>
        <Avatar style={{ backgroundColor: "#2f5ec4", verticalAlign: 'middle' }} size="large">
          {username[0]}
        </Avatar>
        <Dropdown placement="bottomRight" overlay={menu} style={{ marginLeft: -20 }}>
          <Icon type="more" style={{ marginLeft: 15 }} />
        </Dropdown>
      </React.Fragment>


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

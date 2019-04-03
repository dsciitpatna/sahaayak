import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './DropdownMenu.css';
import { connect } from 'react-redux';
import Logout from '../Logout/Logout';
import { Menu, Icon, Dropdown, message, Avatar } from 'antd';
import { Link } from 'react-router-dom';


class DropdownMenu extends Component {
  state = {
    current: "mail"
  };


  onClick = ({ key }) => {
    message.info(`Clicked on ${key}`);
  }

  render() {
    const { username } = this.props;
    const menu = (
      <Menu onClick={this.onClick} style={{ marginTop: 20 }}>
        <Menu.Item key="1">
          <Link to="/vendorDashboard">
            <Icon type="idcard" style={{ paddingRight: 10 }} />
            Dashboard
                </Link>
        </Menu.Item>
        <Menu.Item key="2">
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

import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Sidebar.css'
import { Layout, Menu, Icon, Spin, notification } from "antd";

import { getAllCategories } from "../../redux/actions/categoryServiceActions";

const { Sider } = Layout;

class SideBar extends Component {

  state = {
    pending: true,
  }

  componentDidMount() {
    this.props.getAllCategories();
    this.setState({
      pending: false,
    })
  }
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      notification['error']({
        message: 'Error Processing your request',
        description: error.msg,
      });
    }
  }
  render() {
    const { pending } = this.state;
    const categoryList = this.props.categoryService.categories.map(category => {
      return (
        <Menu.Item key={category._id}>
          <Icon type="form" />
          <span><Link to={`/categoryWiseServices/${category.name}`} style={{ color: 'white', fontFamily: 'sans-serif' }} >{category.name}</Link></span>
        </Menu.Item>
      )
    });

    return (
      <div className="wrapper">
        <div style={{ position: 'relative' }}>
          <Sider
            style={{ overflow: 'auto', height: '100vh', left: 0 }}
            trigger={null}
            collapsible
            collapsedWidth={0}
            width={250}
            collapsed={this.props.collapseProp}
          >
            <Menu theme="dark" mode="inline">
              {categoryList}
              {pending &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Spin tip="Loading..." size="large" ></Spin>
                </div>
              }
            </Menu>
          </Sider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  categoryService: state.categoryService
});

export default connect(
  mapStateToProps,
  { getAllCategories }
)(SideBar);
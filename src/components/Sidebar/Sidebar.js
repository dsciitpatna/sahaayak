import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Sidebar.css'
import { Layout, Menu, Icon, Spin } from "antd";

import { getAllCategories } from "../../redux/actions/categoryActions";

const { Sider } = Layout;

class SideBar extends Component {

  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {

      const categoryList=!this.props.category.pending ? ( this.props.category.categories.map((category)=>{
        return(
          <Menu.Item key={category._id}>
            <Icon type="form" />
            <span><Link to={`/categoryWiseServices/${category.name}`} style={{ color: 'white' }} >{category.name}</Link></span>
          </Menu.Item>
        )
      })
      ) : (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Spin tip="Loading..." size="small" ></Spin>
        </div>
      )

    return (
      <div className="wrapper">
      <Fragment style={{position: 'relative'}}>
        <Sider
          style={{ overflow: 'auto', height: '100vh', left: 0 }}
          trigger={null}
          collapsible
          collapsedWidth={0}
          collapsed={this.props.collapseProp}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            { categoryList }
          </Menu>
        </Sider>
      </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  category: state.category
});

export default connect(
  mapStateToProps,
  { getAllCategories }
)(SideBar);
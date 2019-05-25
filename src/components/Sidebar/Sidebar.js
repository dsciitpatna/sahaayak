import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Sidebar.css'
import { Layout, Menu, Icon, Spin, Alert } from "antd";

import { getAllCategories } from "../../redux/actions/categoryServiceActions";

const { Sider } = Layout;

class SideBar extends Component {

  state={
    msg: null
  }

  componentDidMount() {
    this.props.getAllCategories();
  }
  componentDidUpdate(prevProps){
    const {error} = this.props;
    if(error !== prevProps.error){
        if(error.id === "CATEGORIES_FETCH_FAIL"){
            this.setState({
                msg : error.msg
            });
        }
        else{
            this.setState({
                msg : null
            });
        }			
    }
  } 
  render() {
    const {msg}=this.state;
    const categoryList=!this.props.categoryService.pending ? ( this.props.categoryService.categories.map((category)=>{
        return(
          <Menu.Item key={category._id}>
            <Icon type="form" />
            <span><Link to={`/categoryWiseServices/${category.name}`} style={{ color: 'white' }} >{category.name}</Link></span>
          </Menu.Item>
        )
      })
      ) : (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Spin tip="Loading..." size="large" ></Spin>
        </div>
      )

    return (
      <div className="wrapper">
        <div style={{position: 'relative'}}>
          {msg ? <Alert message={msg} type='error' /> : null}
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
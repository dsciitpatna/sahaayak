import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Sidebar.css'
import { Layout, Menu, Dropdown, Row,Icon, notification,Col } from "antd";

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
    const menu = <Menu>
     {this.props.categoryService.categories.map(category=>{
      return(
        <Menu.Item style={{padding:"10px"}}>
          <span><Link to={`/categoryWiseServices/${category.name}`} style={{color: "black",  fontFamily: 'monospace' }} >{category.name}</Link></span>
        </Menu.Item>
      )
     }
      )}
</Menu>
    return (
      <React.Fragment>
      <Dropdown overlay={menu} style={{padding:"10px"}}>
    <a  href="#">
      <span style={{background:"white",color:"black",textTransform:"capitalize",letterSpacing:"2px",fontSize:"15px",padding:"5px"}}>See all Categories <Icon type="down" />
      </span>
    </a>
    </Dropdown>
      </React.Fragment>
    )
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
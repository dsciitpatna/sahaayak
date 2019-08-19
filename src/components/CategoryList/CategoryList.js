import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './CategoryList.css'
import {Col,Row,Icon, notification,Menu,Dropdown } from "antd";

import { getAllCategories } from "../../redux/actions/categoryServiceActions";

class CategoryList extends Component {
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
    const menu =
     this.props.categoryService.categories.slice(0,5).map(category=>{
      return(
        <Col xs={8} md={8} lg={4}>
          <Icon type="file-sync" />
          <span><Link to={`/categoryWiseServices/${category.name}`}>{category.name}</Link></span>
        </Col>
      )
     }
      )
      const categoryList=
      <Menu>
     { this.props.categoryService.categories.map(category=>{
        return(
          <Menu.Item>
            <Icon type="file-sync" />
            <span><Link to={`/categoryWiseServices/${category.name}`} style={{color:"gray",padding:"2px 5px 2px 5px"}}>{category.name}</Link></span>
            </Menu.Item>
        )
       }
        )}
        </Menu>
    return (
      <Row id="categories">
            {menu}
        <Col xs={8} md={8} lg={4}>
      <Dropdown overlay={categoryList} style={{padding:"10px"}} trigger={['click']}>

    <a  href="#d">
      <span>Categories<Icon type="down" />
      </span>
    </a>
    </Dropdown>
    </Col>

      </Row>
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
)(CategoryList);
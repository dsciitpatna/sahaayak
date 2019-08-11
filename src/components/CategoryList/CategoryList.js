import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './CategoryList.css'
import { Layout,Col,Row, Menu, Dropdown,Icon, notification } from "antd";

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
    const { pending } = this.state;
    const menu =
     this.props.categoryService.categories.slice(0,6).map(category=>{
      return(
        <Col xs={8} md={8} lg={4}>
          <Icon type="file-sync" />
          <span><Link to={`/categoryWiseServices/${category.name}`}>{category.name}</Link></span>
        </Col>
      )
     }
      )
    return (
      <Row id="categories">
      {/* <Dropdown overlay={menu} style={{padding:"10px"}}>
    <a  href="#">
      <span style={{background:"white",color:"black",textTransform:"capitalize",letterSpacing:"2px",fontSize:"15px",padding:"5px"}}>See all Categories <Icon type="down" />
      </span>
    </a>
    </Dropdown> */}
    {menu}
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
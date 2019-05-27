import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Button,Modal,Input,Table, Divider } from 'antd';
import {fetchCategory,deleteCategory,addCategory} from "../../redux/actions/adminActions";

class Categories extends Component {

  state = { 
    visible: false,
    newCategoryName:''
   }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleChange=(e)=>{
    this.setState({
      newCategoryName:e.target.value
    })
  }
  
  handleOk = (e) => {
    const newCategory= {
      userId:12,
      id: this.props.cat.length+1,
      title:this.state.newCategoryName
    }
    this.props.addCategory(newCategory);
    this.setState({
      visible: false,
      newCategoryName:''    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
      newCategoryName:'' 
    });
  }

  handleDelete=(e)=>{
    this.props.deleteCategory(e);
  }

  componentDidMount(){
    this.props.fetchCategory();
  }

  render() {
    const { isAuthenticated, user } = this.props;
    const { Column } = Table;
    if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
      return (
        <Fragment>
          Categories
          <br />
          <Button type="primary" onClick={this.showModal}>
          Add Category
          </Button>
          <Modal
            title="Add a new category"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
               <Input onChange={(value)=>{this.handleChange(value)}} placeholder="Enter the name of the category" />
           </Modal>
           <Table dataSource={this.props.cat}>
            <Column title="Category Name" dataIndex="title" key="title" />
            <Column
              title="Action"
              key="id"
              render={(text, record) => (
                <span>
                  <span>Update</span>
                  <Divider type="vertical" />
                  <span onClick={()=>{this.handleDelete(record.id)}}>Delete</span>
                </span>
              )}
            />
          </Table>
        </Fragment>
      )
    }
    else {
      return (
        <p>Unauthorized Access</p>
      )
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  cat:state.categorylist.category,
});

export default connect(
  mapStateToProps,
  {fetchCategory,deleteCategory,addCategory}
)(Categories);
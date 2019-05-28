import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Button,Modal,Input,Table, Divider } from 'antd';
import {fetchCategory,deleteCategory,addCategory,updateCategory} from "../../redux/actions/adminActions";

class Categories extends Component {

  state = { 
    visibleForm: false,
    newCategoryName:'',
    visibleUpdate:false,
    updatedCategoryName:'',
    updatedCatId:'',
   }
  
  showModalForm = () => {
    this.setState({
      visibleForm: true,
    });
  }

  showModalUpdate = (e) => {
    this.setState({
      visibleUpdate: true,
      updatedCatId:e
    });
  }

  handleChangeForm=(e)=>{
    this.setState({
      newCategoryName:e.target.value
    })
  }

  handleChangeUpdate=(e)=>{
    this.setState({
      updatedCategoryName:e.target.value
    })
  }
  
  handleOkForm = () => {
    this.props.addCategory(this.state.newCategoryName);
    this.setState({
      visibleForm: false,
      newCategoryName:''    });
  }

  handleOkUpdate = () => {
    this.props.updateCategory(this.state.updatedCategoryName,this.state.updatedCatId);
    this.setState({
      visibleUpdate: false,
      updatedCategoryName:'', 
      updatedCatId:''
    });
  }

  handleCancel = (e) => {
    this.setState({
      visibleForm: false,
      newCategoryName:'',
      visibleUpdate:false,
      updatedCategoryName:'',
      updatedCatId:'' 
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
          <Button type="primary" onClick={this.showModalForm}>
          Add Category
          </Button>
          <Modal
            title="Add a new category"
            visible={this.state.visibleForm}
            onOk={this.handleOkForm}
            onCancel={this.handleCancel}
          >
               <Input onChange={(value)=>{this.handleChangeForm(value)}} placeholder="Enter the name of the category" />
           </Modal>
           <Table dataSource={this.props.cat} rowKey='_id'>
            <Column title="Category Name" dataIndex="name" key="name" />
            <Column
              title="Action"
              key="_id"
              render={(record) => (
                <span>
                  <span onClick={() => this.showModalUpdate(record._id)}>Update</span>
                  <Modal
                    title="Add a new category"
                    visible={this.state.visibleUpdate}
                    onOk={this.handleOkUpdate}
                    onCancel={this.handleCancel}
                  >
                      <Input onChange={(value)=>{this.handleChangeUpdate(value)}} placeholder="Enter the name of the category" />
                  </Modal>
                  <Divider type="vertical" />
                  <span onClick={()=>{this.handleDelete(record._id)}}>Delete</span>
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
  cat:state.admin.category,
});

export default connect(
  mapStateToProps,
  {fetchCategory,deleteCategory,addCategory,updateCategory}
)(Categories);
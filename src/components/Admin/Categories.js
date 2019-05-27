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
    updatedCatObj:'',
   }
  
  showModalForm = () => {
    this.setState({
      visibleForm: true,
    });
  }

  showModalUpdate = (e) => {
    this.setState({
      visibleUpdate: true,
      updatedCatObj:e
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
    const newCategory= {
      userId:12,
      id: this.props.cat.length+1,
      title:this.state.newCategoryName
    }
    this.props.addCategory(newCategory);
    this.setState({
      visibleForm: false,
      newCategoryName:''    });
  }

  handleOkUpdate = () => {
    this.props.updateCategory(this.state.updatedCategoryName,this.state.updatedCatObj);
    this.setState({
      visibleUpdate: false,
      updatedCategoryName:'', 
      updatedCatObj:''
    });
  }

  handleCancel = (e) => {
    this.setState({
      visibleForm: false,
      newCategoryName:'',
      visibleUpdate:false,
      updatedCategoryName:'',
      updatedCatObj:'' 
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
           <Table dataSource={this.props.cat} rowKey='id'>
            <Column title="Category Name" dataIndex="title" key="title" />
            <Column
              title="Action"
              key="id"
              render={(text, record) => (
                <span>
                  <span onClick={() => this.showModalUpdate(record)}>Update</span>
                  <Modal
                    title="Add a new category"
                    visible={this.state.visibleUpdate}
                    onOk={this.handleOkUpdate}
                    onCancel={this.handleCancel}
                  >
                      <Input onChange={(value)=>{this.handleChangeUpdate(value)}} placeholder="Enter the name of the category" />
                  </Modal>
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
  {fetchCategory,deleteCategory,addCategory,updateCategory}
)(Categories);
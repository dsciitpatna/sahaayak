import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Button,Modal,Input,Table, Divider } from 'antd';
import {fetchCategory,addCategory,deleteCategory,updateCategory} from '../../redux/actions/categoryActions'

class Categories extends Component {

  state = { 
    visible: false ,
    visibleUpdateModal: false,
    newCategoryName : '',
    updateCategoryName : '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.props.addCategory(this.state.newCategoryName);
    this.setState({
      visible: false,
      newCategoryName: ''
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
      newCategoryName: ''
    });
  }

  updateShowModal = () => {
    this.setState({
      visibleUpdateModal: true,
    });
  }

  handleOkUpdate = (id) => {
    this.props.updateCategory(this.state.updateCategoryName,id);
    this.setState({
      visibleUpdateModal: false,
      newCategoryName: ''
    });
  }

  handleCancelUpdate = (e) => {
    this.setState({
      visibleUpdateModal: false,
      newCategoryName: ''
    });
  }

  handleDelete = (id) => {
    this.props.deleteCategory(id);
  }

  componentWillMount(){
    this.props.fetchCategory();
  }
  componentDidUpdate(){
    this.props.fetchCategory();
  };

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
               <Input placeholder="Enter the name of the category" name="newCategoryName" onChange={this.onChange} />
           </Modal>
           <Table dataSource={this.props.cat.categories} rowKey="_id">
            <Column title="Category Name" dataIndex="name" key="name" />
            <Column
              title="Action"
              key="_id"
              render={(text, record) => (
                <span>
                  <span onClick={this.updateShowModal}>Update</span>
                  <Modal
                    title="Update Modal"
                    visible={this.state.visibleUpdateModal}
                    onOk={() => this.handleOkUpdate(record._id)}
                    onCancel={this.handleCancelUpdate}
                  >
                      <Input placeholder="Enter the new name of the category" name="updateCategoryName" onChange={this.onChange} />
                  </Modal>
                  <Divider type="vertical" />
                  <span onClick={()=>{this.handleDelete(record._id)} }>Delete</span>
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
  cat: state.category.categories
});

export default connect(
  mapStateToProps,
  {fetchCategory,addCategory,deleteCategory,updateCategory}
)(Categories);
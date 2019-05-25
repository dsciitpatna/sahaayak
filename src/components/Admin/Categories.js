import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Button,Modal,Input,Table, Divider } from 'antd';
import {fetchCategory} from "../../redux/actions/adminActions";

class Categories extends Component {

  state = { visible: false }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  componentWillMount(){
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
               <Input placeholder="Enter the name of the category" />
           </Modal>
           <Table dataSource={this.props.cat}>
            <Column title="Category Name" dataIndex="title" key="title" />
            <Column title="Number" dataIndex="id" key="id" />

            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a href="/">Update</a>
                  <Divider type="vertical" />
                  <a href="/">Delete</a>
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
  {fetchCategory}
)(Categories);
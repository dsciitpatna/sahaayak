import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Layout,Button,Modal,Input } from 'antd';


const {
  Header, Content, Footer, Sider,
} = Layout;

class Categories extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
      return (
        <Fragment>
          Categories
          <br/>
          <br/>
           <Button type="primary" onClick={this.showModal}>
          Add Category
          </Button>
          <Modal
            title="Add a new category"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
          <Input placeholder="Enter the name" />
           </Modal>
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
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(Categories);
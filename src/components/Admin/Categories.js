import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Button,Modal,Input,Table, Divider } from 'antd';

const data = [
  {
    key: '1',
    Name: 'Mechanic',
    number: 32,
  },
  {
    key: '2',
    Name: 'Plumber',
    number: 42,
  },
  {
    key: '3',
    Name: 'Electrician',
    number: 32,
  },
];

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
           <Table dataSource={data}>
      <Column title="Category Name" dataIndex="Name" key="Name" />
      <Column title="Number" dataIndex="number" key="number" />

    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a >Update</a>
          <Divider type="vertical" />
          <a >Delete</a>
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
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(Categories);
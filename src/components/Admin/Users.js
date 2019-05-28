import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Button, Table, Tag } from 'antd';

import { getAllUsers, deleteUser } from "../../redux/actions/adminActions";

class User extends Component {

    deleteUser=(userId)=> {
        this.props.deleteUser(userId);
    }

    componentDidMount(){
        this.props.getAllUsers();
    }
    componentDidUpdate(){
        this.props.getAllUsers();
    }

    render() {
        const { isAuthenticated, user } = this.props;

        const users=[];
        if(this.props.status===200){
            this.props.users.forEach(user => {
                const data={
                    key: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isVendor: user.isVendor
                }
                users.push(data);
            });
        }
        
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                render: text => <a href={`mailto:${text}`} target="_top">{text}</a>,
            },
            {
                title: 'isAdmin',
                dataIndex: 'isAdmin',
                key: 'isAdmin',
                render: tag => (
                    <span>
                      { tag ? <Tag color="green">true</Tag> : <Tag color="volcano">false</Tag> }
                    </span>
                  ),
            },
            {
              title: 'isVendor',
              key: 'isVendor',
              dataIndex: 'isVendor',
              render: tag => (
                <span>
                  { tag ? <Tag color="green">true</Tag> : <Tag color="volcano">false</Tag> }
                </span>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <Button onClick={()=>{this.deleteUser(record.key)}}>Delete</Button>
                </span>
              ),
            },
          ];

        if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
          return (
            <Fragment>
                <div style={{maxWidth:'900px', margin: 'auto'}}>
                <Table columns={columns} dataSource={users} />
                </div>
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
  users: state.admin.users,
  status: state.admin.status,
  deletedUser: state.admin.deleteUser
});

export default connect(
  mapStateToProps,
  {getAllUsers, deleteUser}
)(User);
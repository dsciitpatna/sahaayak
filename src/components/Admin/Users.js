import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Button, Table, Tag, notification, Input, Icon, Alert } from 'antd';
import Highlighter from 'react-highlight-words';

import { getAllUsers, deleteUser, deleteAllServices } from "../../redux/actions/adminActions";
import './users.css';

class User extends Component {

    state={
        msg: null,
        searchText: ''
    }

    deleteUser=(userId, isVendor)=> {
        this.props.deleteUser(userId);
        if(isVendor) {
          this.props.deleteAllServices(userId);
        }
    }

    componentDidMount(){
        this.props.getAllUsers();
    }

    componentDidUpdate(prevProps) {
        this.props.getAllUsers();
        const { error } = this.props;

        if (error !== prevProps.error) {
            if (error.id === "ADMIN_ACTIONS_ERRORS") {
                this.setState({
                    msg: error.msg
                });
            }
            else {
                this.setState({
                    msg: null
                });
            }
        }
    }

    deleteUserNotification = (stat) => {
        if(stat===1) {
            notification.open({
                message: 'Delete Successful',
                description:
                  'User Deleted',
                icon: <Icon type="check-circle" style={{ color: '#108ee9' }} />,
            });
        }
        if(stat===-1) {
            notification.open({
                message: 'Delete Failed',
                description:
                  'User not deleted',
                icon: <Icon type="closed" style={{ color: '#108ee9' }} />,
            });
        }
      };

      deleteAllServicesNotification = (stat) => {
        if(stat===1) {
            notification.open({
                message: 'Delete Successful',
                description:
                  'All Services of vendor deleted',
                icon: <Icon type="check-circle" style={{ color: '#108ee9' }} />,
            });
        }
      };

      getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text => (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
      });
    
      handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };

    render() {
        const { msg } = this.state;
        const { isAuthenticated, user, status, statusType } = this.props;

        if(statusType==="deleteUser" && status===200) {
            this.deleteUserNotification(1);
        }
        if(statusType==="deleteUser" && status==null) {
            this.deleteUserNotification(-1);  
        }

        if(statusType==="deleteAllServices" && status===200) {
          this.deleteAllServicesNotification(1);
        }

        const users=[];
        if(status===200 && statusType==='getAllUsers'){
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
              ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                render: text => <a href={`mailto:${text}`} target="_top">{text}</a>,
                ...this.getColumnSearchProps('email'),
            },
            {
                title: 'Admin',
                dataIndex: 'isAdmin',
                key: 'isAdmin',
                render: tag => (
                    <span>
                      { tag ? <Tag color="green">true</Tag> : <Tag color="volcano">false</Tag> }
                    </span>
                  ),
            },
            {
              title: 'Vendor',
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
                  <Button onClick={()=>{this.deleteUser(record.key, record.isVendor)}}>Delete</Button>
                </span>
              ),
            },
          ];

        if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
          return (
            <Fragment>
                {msg && status!==200 ? <Alert message={msg} type="error" /> : null}
                <div>
                  <h1 className="mainHeader">Users</h1>
                <Table columns={columns} dataSource={users} bordered />
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
  error: state.error,
  users: state.admin.users,
  status: state.admin.status,
  statusType: state.admin.statusType
});

export default connect(
  mapStateToProps,
  {getAllUsers, deleteUser, deleteAllServices}
)(User);
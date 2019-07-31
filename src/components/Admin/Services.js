import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Button, Table, notification, Input, Icon, Alert } from 'antd';
import Highlighter from 'react-highlight-words';

import { getAllServices, deleteService } from "../../redux/actions/adminActions";
import './Services.css';

class Services extends Component {

    state={
      msg: null,
      searchText: ''
    }

    deleteService = (serviceId)=> {
        this.props.deleteService(serviceId);
    }

    componentDidMount(){
        this.props.getAllServices();
    }

    componentDidUpdate(prevProps) {
        this.props.getAllServices();
        console.log('comp did update');
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

    deleteServiceNotification = (stat) => {
        if(stat===1) {
            notification.open({
                message: 'Delete Successful',
                description:
                  'Service Deleted',
                icon: <Icon type="check-circle" style={{ color: '#108ee9' }} />,
            });
        }
        if(stat===-1) {
            notification.open({
                message: 'Delete Failed',
                description:
                  'Service deletion failed!',
                icon: <Icon type="closed" style={{ color: '#108ee9' }} />,
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

        if(statusType==="deleteService" && status===200) {
            this.deleteServiceNotification(1);
        }
        if(statusType==="deleteService" && status==null) {
            this.deleteServiceNotification(-1);
        }

        let services=[];
        if(status===200 && statusType==='getAllServices'){
          this.props.services.forEach(service => {
              const data={
                  key: service._id,
                  name: service.name,
              }
              services.push(data);
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
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <Button onClick={()=>{this.deleteService(record.key)}}>Delete</Button>
                </span>
              ),
            },
          ];

        if (isAuthenticated && user.isVendor === false && user.isAdmin === true) {
          return (
            <Fragment>
                {msg && status!==200 ? <Alert message={msg} type="error" /> : null}
                <div>
                  <h1 className="mainHeader">Services</h1>
                <Table columns={columns} dataSource={services} bordered />
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
  services: state.admin.services,
  status: state.admin.status,
  statusType: state.admin.statusType
});

export default connect(
  mapStateToProps,
  {getAllServices, deleteService}
)(Services);
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import './Vendordashboard.css';
import { connect } from 'react-redux';
import { Typography, Icon, Row, Col, Button, PageHeader, Table,Divider,Tag } from 'antd';
const { Title } = Typography;

class VendorDashboard extends Component {
  
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const columns = [
      {
        title: 'Service name',
        dataIndex: 'servicename',
        key: 'servicename',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">Edit</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        ),
      },
    ];
    
    const data = [
      {
        key: '1',
        servicename: 'John Brown',
        phone: 32456789,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        servicename: 'Jim Green',
        phone: 421234512,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        servicename: 'Joe Black',
        phone: 3221324354,
        address: 'Sidney No. 1 Lake Park',
      },
    ];
    
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && user.isVendor === true) {
      return (
        <Fragment>
          <div className="container">
            <Row gutter={300} type="flex" justify="space-around" align="middle">
              <Col className="gutter-row" span={6}>
                <img
                  src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"

                  alt=""
                />
                 <Button
                  type="primary"
                  icon="camera"
                  size="large"
                  loading={this.state.iconLoading}
                  onClick={this.enterIconLoading}
                >
                  Change Profile Pic
               </Button>

              </Col>

              <Col className="gutter-row" span={18}>
                <div className="gutter-box">
                  <Title style={{ textAlign: "center" }}>Vendor:      Rajeev Ahuja</Title>
                  <hr />
                </div>
              </Col>

            </Row>
            <div className="content">
              <PageHeader onBack={()=>null} title="Your Listings" subTitle="Your Listings upto now" />
            </div>
            <Table columns={columns} dataSource={data} pagination={false} />
            <Button type="primary" size="large" >
            <Icon type="folder-add" /><span>Add new service</span></Button>
          </div>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <p>Please login to view vendor Dashboard.</p>
        </Fragment>
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
)(VendorDashboard);

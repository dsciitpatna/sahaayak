import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Vendordashboard.css';
import { connect } from 'react-redux';
import { Icon, Row, Col, Button, PageHeader, Table, Divider, Card, Tabs } from 'antd';
import { getServices } from '../../redux/actions/vendorActions';
const { TabPane } = Tabs;

class VendorDashboard extends Component {
  getVendorServices = (id) => {
    this.props.getServices(id);
  }
  componentDidMount() {
    const { id } = this.props.user;
    this.getVendorServices(id);
  }

  render() {
    const columns = [
      {
        title: 'Service name',
        dataIndex: 'servicename',
        width: 100,
        key: 'servicename',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        width: 100,
        key: 'phone',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        width: 100,
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
        width: 100,
        render: (text, record) => (
          <span>
            <Link to="/VendorSalesPage">Edit</Link>
            <Divider type="vertical" />
            <Link to="/VendorSalesPage">Delete</Link>
          </span>
        ),
      },
    ];

    const { isAuthenticated, user, services } = this.props;
    if (isAuthenticated && user.isVendor === true) {
      let data = [];
      let avgrating = 0;
      for (const [, value] of services.entries()) {
        avgrating += value.rating;
      }
      avgrating /= services.length;
      avgrating = avgrating.toString();
      data = services.map((data, index) => {
        const { location, contact } = data
        const { businessName, building, city, state, street } = location;
        const { mobile } = contact;

        return {
          key: index.toString(),
          servicename: businessName,
          phone: mobile,
          address: building + ", " + street + ", " + city + ", " + state
        };
      });
      return (
        <Fragment>
          <div className="v-dashboard-container gutter-example">
            <Row gutter={16} type="flex" justify="space-around" align="middle">
              <Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8}>
                <Card title={user.name} style={{ width: '100%' }} >
                  <img
                    src="https://images.unsplash.com/photo-1554652297-6e7a24cf8fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1025&q=80"
                    alt=""
                    className="image1"
                  />
                  <Button
                    className="v-dashboard-btn"
                    type="primary"
                    icon="camera"
                    size="large"
                  >
                    Change Profile Pic
               </Button>
                  <Row gutter={16} type="flex" justify="space-around">
                    <Col span={12}>
                      <p><strong>Location</strong></p>
                    </Col>
                    <Col span={12}>
                      <p>Patna, Bihar</p>
                    </Col>
                  </Row>
                  <Row gutter={16} type="flex" justify="space-around">
                    <Col span={12}>
                      <p><strong>Email Address</strong></p>
                    </Col>
                    <Col span={12}>
                      <p>{user.email}</p>
                    </Col>
                  </Row>
                  <Row gutter={16} type="flex" justify="space-around">
                    <Col span={12}>
                      <p><strong>Average Rating</strong></p>
                    </Col>
                    <Col span={12}>
                      <p>{avgrating}</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                <Card title="Details" style={{ width: '100%' }}>
                  <Tabs type="card">
                    <TabPane tab="Services" key="1">
                      <PageHeader onBack={() => null} title="Your Listings" subTitle="Your Listings upto now" />
                      <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: '100%' }} />
                      <Link to='/VendorSalespage'>
                        <Button type="primary" size="large"
                          className="v-dashboard-btn"
                        >
                          <Icon type="folder-add" /><span>Add new service</span></Button>
                      </Link>
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
            </Row>
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
  user: state.auth.user,
  services: state.vendor.services
});

export default connect(
  mapStateToProps,
  { getServices }
)(VendorDashboard);



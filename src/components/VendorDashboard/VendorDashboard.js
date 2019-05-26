import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Vendordashboard.css';
import { connect } from 'react-redux';
import { Typography, Icon, Row, Col, Button, PageHeader, Table, Divider } from 'antd';
import { getServices } from '../../redux/actions/vendorActions';
const { Title } = Typography;

class VendorDashboard extends Component {
  state = {
    loading: false,
    iconLoading: false,
  };
  getVendorServices = (id) => {
    this.props.getServices(id);
  }
  componentDidMount() {
    const { id } = this.props.user;
    this.getVendorServices(id);
  }

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
            <Link to="/VendorSalesPage">Edit</Link>
            <Divider type="vertical" />
            <Link to="/VendorSalesPage">Delete</Link>
          </span>
        ),
      },
    ];

    const { isAuthenticated, user, services } = this.props;

    if (isAuthenticated && user.isVendor === true) {
      const length = services.length;
      let data = [];
      // Adding elements to the data array
      if (length) {
        data = services.map((obj,index) => {
          const {name,detail} = obj
          const {contact,location} =detail;

          return {
            key: index.toString(),
            servicename: name,
            phone: contact,
            address: location
          };
        })
      }

      return (
        <Fragment>
          <div className="v-dashboard-container">
            <Row gutter={300} type="flex" justify="space-around" align="middle">
              <Col className="gutter-row" span={6}>
                <img
                  src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
                  alt=""
                  className="image1"
                />
                <Button
                  className="v-dashboard-btn"
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
                  <Title style={{ textAlign: "center" }}>Welcome: Rajeev Ahuja</Title>
                  <hr />
                </div>
              </Col>

            </Row>
            <div className="content">
              <PageHeader onBack={() => null} title="Your Listings" subTitle="Your Listings upto now" />
              <Table columns={columns} dataSource={data} pagination={false} />
              <Link to='/VendorSalespage'>
                <Button type="primary" size="large"
                  className="v-dashboard-btn"
                >
                  <Icon type="folder-add" /><span>Add new service</span></Button>
              </Link>
            </div>
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

import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import './Vendordashboard.css';
import { connect } from 'react-redux';
import { Typography, Icon, Row, Col, Button } from 'antd';
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
                  loading={this.state.iconLoading}
                  onClick={this.enterIconLoading}
                >
                  Change Profile Pic
               </Button>

              </Col>

              <Col className="gutter-row" span={18}>
                <div className="gutter-box">
                  <Title style={{ textAlign: "center" }}>Rajeev Ahuja</Title>
                  <hr />
                </div>
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
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(VendorDashboard);

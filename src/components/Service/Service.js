import React, { Component } from 'react';
import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
import { Card, Spin, Row, Col, Icon, Alert, PageHeader, Progress } from 'antd';
import 'antd/dist/antd.css';

import { getService } from "../../redux/actions/categoryServiceActions";
import "./Service.css";

const { Meta } = Card;

const tabList = [
    {
      key: 'tab1',
      tab: 'Service',
    },
    {
      key: 'tab2',
      tab: 'Vendor',
    },
];

class Service extends Component {

    state = {
        key: 'tab1',
        msg: null
    };

    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    };

    componentDidMount() {
        const serviceId=this.props.match.params.serviceId;
        this.props.getService(serviceId);
    }

    componentDidUpdate(prevProps) {

        const { error } = this.props;

        if (error !== prevProps.error) {
            if (error.id === "SERVICE_FETCH_FAIL") {
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

    render() {

        const { service, pending } = this.props;
        const { msg } = this.state;

        const serviceData = !pending && service ? (
            <div className="card-container">
                <PageHeader onBack={() => window.history.back()} title="Service" subTitle={`Category: ${service.categoryName}`} />
                <Card
                style={{ width: '100%' }}
                title={service.name}
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={key => {
                    this.onTabChange(key, 'key');
                }}
                >
                {{
                    tab1: (
                        <div>
                            <Row>
                                <Col xs={24}>
                                    <Card
                                        hoverable
                                        bordered={false}
                                        style={{ width: 'auto' }}
                                    >
                                        <img alt="example" src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
                                        <Meta title={service.categoryName} description="www.instagram.com" />
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} sm={12}>
                                    <Card
                                        title="Service Details"
                                        bordered={true}
                                        style={{ width: '100%' }}
                                    >
                                        <p><Icon type="setting" theme="twoTone" /> Service : {service.name}</p>
                                        <p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Description: {service.detail.description}</p>
                                        <p><Icon type="heat-map" /> Location: {service.detail.location}</p>
                                        <p><Icon type="phone" theme="twoTone" /> Contact: {service.detail.contact}</p>
                                        <p><Icon type="star" theme="twoTone" /> Rating: {service.rating}</p>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Card
                                        title="More Details"
                                        bordered={true}
                                        style={{ width: '100%' }}
                                    >
                                        <p><Icon type="setting" theme="twoTone" /> Data</p>
                                        <p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Data</p>
                                        <p><Icon type="heat-map" /> Data</p>
                                        <p><Icon type="phone" theme="twoTone" /> Data</p>
                                        <p><Icon type="star" theme="twoTone" /> Data</p>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{marginTop: '50px'}}>
                                <Col xs={24} lg={12}>
                                    <h3 style={{textAlign: 'center'}}>Additional details:</h3>
                                    <div style={{width: '90%' }}>
                                        <span>Reach</span>
                                        <Progress percent={30} />
                                        <span>Likes</span>
                                        <Progress percent={50} status="active" />
                                        <span>Reviews</span>
                                        <Progress percent={70} status="exception" />
                                        <span>Customer Care</span>
                                        <Progress percent={100} />
                                        <span>Contact</span>
                                        <Progress percent={50} showInfo={false} />
                                    </div>
                                </Col>
                                <Col xs={24} lg={12}>
                                    <h3 style={{textAlign: 'center'}}>Rating details:</h3>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <Icon type="star" theme="twoTone" twoToneColor="#FFD700" />
                                        <Icon type="star" theme="twoTone" twoToneColor="#FFD700" />
                                        <Icon type="star" theme="twoTone" twoToneColor="#FFD700" />
                                        <Icon type="star" />
                                        <Icon type="star" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ),
                    tab2: (
                        <div>
                            <Row>
                                <Col xs={24}>
                                    <Card
                                        hoverable
                                        bordered={false}
                                        style={{ width: 'auto' }}
                                    >
                                        <img alt="example" src="https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
                                        <Meta title={service.categoryName} description="www.instagram.com" />
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} sm={12}>
                                    <Card
                                        title="Vendor Details"
                                        bordered={true}
                                        style={{ width: '100%' }}
                                    >
                                        <p><Icon type="smile" theme="twoTone" /> Name: {service.vendor.name}</p>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Card
                                        title="More Details"
                                        bordered={true}
                                        style={{ width: '100%' }}
                                    >
                                        <p><Icon type="setting" theme="twoTone" /> Data</p>
                                        <p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Data</p>
                                        <p><Icon type="heat-map" /> Data</p>
                                        <p><Icon type="phone" theme="twoTone" /> Data</p>
                                        <p><Icon type="star" theme="twoTone" /> Data</p>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    ),
                    }[this.state.key]}
                </Card>
            </div>
        ) : (
            <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spin tip="Loading..." size="large" ></Spin>
            </div>
        )

        return (
            <div>
                {msg ? <Alert message={msg} type='error' /> : null}
                {serviceData}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    service: state.categoryService.service,
    pending: state.categoryService.pending
});

export default connect(
    mapStateToProps,
    { getService }
)(Service);
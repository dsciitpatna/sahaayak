import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Card, Spin, Row, Col, Icon, Alert } from 'antd';
import 'antd/dist/antd.css';

import { getCategoryWiseServices } from "../../redux/actions/categoryServiceActions";
import "./CategoryWiseServices.css";

const { Meta } = Card;

class CategoryWiseServices extends Component {

    state = {
        msg: null
    }

    componentDidMount() {
        const category = this.props.match.params.categoryName;
        this.props.getCategoryWiseServices(category);
    }

    componentDidUpdate(prevProps) {

        const category = this.props.match.params.categoryName;
        if (category !== prevProps.match.params.categoryName) {
            this.props.getCategoryWiseServices(category);
        }

        const { error } = this.props;

        if (error !== prevProps.error) {
            if (error.id === "CATEGORYWISESERVICES_FETCH_FAIL") {
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

        const { msg } = this.state;
        const serviceList = !this.props.categoryService.pending ? (this.props.categoryService.services.map((service) => {
            return (
                <Card className="containerCard" title={service.name} extra={<Link to={`/service/${service._id}`}><Icon type="step-forward" /> More Details</Link>} key={service._id} >
                    <Row>
                        <Col xs={24} sm={24} md={8}>
                            <Card
                                hoverable
                                style={{ width: 'auto' }}
                            >
                                <img alt="example" src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
                                <Meta title={service.categoryName} description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={16}>
                            <Row>
                                <Col xs={24} sm={12}>
                                    <Card
                                        title="Service Details"
                                        bordered={false}
                                        style={{ height: '100%' }}
                                    >
                                        <p><Icon type="setting" theme="twoTone" /> Service : {service.name}</p>
                                        <p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Description: {service.detail.descriptiom}</p>
                                        <p><Icon type="heat-map" /> Location: {service.detail.location}</p>
                                        <p><Icon type="phone" theme="twoTone" /> Contact: {service.detail.contact}</p>
                                        <p><Icon type="star" theme="twoTone" /> Rating: {service.rating}</p>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Card
                                        title="Vendor Details"
                                        bordered={false}
                                        style={{ height: '100%' }}
                                    >
                                        <p><Icon type="smile" theme="twoTone" /> Name: {service.vendor.name}</p>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            )
        })
        ) : (
                [<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spin tip="Loading..." size="large" ></Spin>
                </div>]
            )

        return (
            <div>
                {msg ? <Alert message={msg} type='error' /> : null}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {serviceList.length ? serviceList : <Alert message="No services found!" type='warning' />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categoryService: state.categoryService
});

export default connect(
    mapStateToProps,
    { getCategoryWiseServices }
)(CategoryWiseServices);


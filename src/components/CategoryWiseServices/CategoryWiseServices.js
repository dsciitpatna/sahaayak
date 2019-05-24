import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Card, Spin, Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';

import { getCategoryWiseServices } from "../../redux/actions/serviceActions";

const { Meta } = Card;

class CategoryWiseServices extends Component {
    
    componentDidMount() {
        const category=this.props.match.params.categoryName;
        this.props.getCategoryWiseServices(category);
    }

    render() {

        const serviceList=!this.props.service.pending ? ( this.props.service.services.map((service)=>{
            console.log(service);
            return(
                <Card title={service.name} extra={<Link to={`/service/${service._id}`}><Icon type="step-forward" /> More Details</Link>} style={{ width: '80%', margin: '10px' }} key={service._id} >
                     <Row>
                        <Col xs={24} sm={24} md={8}>
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                                cover={<img alt="example" src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                            >
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
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Spin tip="Loading..." size="large" ></Spin>
            </div>
          )

        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    { serviceList }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    service: state.service
  });
  
  export default connect(
    mapStateToProps,
    { getCategoryWiseServices }
  )(CategoryWiseServices);
  

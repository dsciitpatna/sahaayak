import React, { Component } from "react";
import "./topServices.css";
import "antd/dist/antd.css";
import { Card, Rate, Row, Col } from "antd";
import {getAllServices} from '../../redux/actions/servicesActions';
import {connect} from 'react-redux';
const { Meta } = Card;

class TopVendors extends Component {
  state = {
    values: [4.5, 5, 4, 3.5]
  };
componentDidMount=()=>{
this.props.getAllServices();
}
  render() {
    const {services,status} = this.props;
    if(status === "done"){
      const serviceList = services.services.map(service=>{
        return(
          <Col xs={24} md={8} lg={6} style={{padding:"30px"}}>
            <Card
              hoverable
              style={{ width: 240}}
              cover={<img src="https://picsum.photos/200" alt="Name" />}
            >
              <div className="Vendor-info">
                <Meta title={service.location.businessName} description={service.vendor.name}/>
                {console.log(service)}
                <Rate disabled allowHalf value={this.state.values[0]} />
              </div>
            </Card>
          </Col>
        )
      })
      return(
        <div id="topServices"> 
        <h1>Top trending Services</h1>
        <div className="imageContainer"></div>
        {serviceList}
        </div>
      )
    }

    return (
      <div id="topServices">
        <h1>Top Services</h1>
        <Row type="flex" justify="center">
          <Col style={{ margin: 20 }}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src="https://picsum.photos/200" alt="Name" />}
            >
              <div className="Vendor-info">
                <Meta title="Name" description="Service Name" />
                <Rate disabled allowHalf value={this.state.values[0]} />
              </div>
            </Card>
          </Col>

          <Col style={{ margin: 20 }}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src="https://picsum.photos/200" alt="Name" />}
            >
              <div className="Vendor-info">
                <Meta title="Name" description="Service Name" />
                <Rate disabled allowHalf value={this.state.values[1]} />
              </div>
            </Card>
          </Col>

          <Col style={{ margin: 20 }}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src="https://picsum.photos/200" alt="Name" />}
            >
              <div className="Vendor-info">
                <Meta title="Name" description="Service Name" />
                <Rate disabled allowHalf value={this.state.values[2]} />
              </div>
            </Card>
          </Col>

          <Col style={{ margin: 20 }}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src="https://picsum.photos/200" alt="Name" />}
            >
              <div className="Vendor-info">
                <Meta title="Name" description="Service Name" />
                <Rate disabled allowHalf value={this.state.values[3]} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  services: state.service.services,
  status: state.service.status
});

export default connect(
  mapStateToProps,
  { getAllServices }
)(TopVendors);

import React, { Component } from 'react';
import {
  Row,
  Col,
  Icon,
  Avatar,
  PageHeader,
  Typography,
  Card,
  List
} from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { Title } = Typography;
// This page shall contain Name of the shop/business, Address if applicable, phone number, commercial email ID, website link, Hours of operation. Modes of Payment, Year established, Location and Overview, Products and Services offered, Rates of Services provided(optional).
// There will be two part of this :

export default class VendorSalesPage extends Component {
  state = {
    name: "Kirana Electricals",
    address: "Wz-45 Vikas Puri New Delhi 110018",
    phone: 739929933,
    commId: "Electricals123@kirana.com",
    webLink: "http://www.kiranaelectricals.com",
    opTime: "12:00pm to 8:00pm ",
    payMode: [
      { id: 1, type: "Credit Card" },
      { id: 2, type: "Google Pay" },
      { id: 3, type: "Cash On Delivery" }
    ],
    established: "2000",
    location: "Located in a well built locality ",
    services: "Provides an electrician to any complaint issued",
    ratesOfService: [
      { issue: "Minor changes", cost: 1200 },
      { issue: "Big changes", cost: 4200 }
    ]
  };
  render() {
    const data = this.state.payMode.map(({ id, type }) => {
      return type;
    });
    const rates = this.state.ratesOfService.map(({ issue, cost }) => {
      return { issue, cost };
    });
    return (
      <div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={10}>
            <Card
              hoverable
              style={{ width: 400 }}
              cover={<img alt="example" src="https://picsum.photos/500/310" />}
            >
              <Meta title={this.state.name} description={this.state.services} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={14}>
            <PageHeader
              onBack={() => null}
              title="Know More"
              subTitle={"Phone   :  " + this.state.phone}
            />
            <Title level={4}>Address : {this.state.address}</Title>
            <Title level={4}>Email On : {this.state.commId}</Title>
            <Title level={4}>Established : {this.state.established}</Title>
            <Title level={4}>Location : {this.state.location}</Title>
            <Title level={4}>
              Visit the Website :
              <Link to={this.state.webLink}> Kirana Electricals</Link>
            </Title>
            <Title level={4}>Timings: {this.state.opTime}</Title>
            <List
              style={{ marginTop: 40 }}
              size="small"
              header={<div style={{ fontSize: 30 }}>Payment Methods</div>}
              bordered
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
            <List
              style={{ marginTop: 40 }}
              size="small"
              header={<div style={{ fontSize: 30 }}>Rates</div>}
              bordered
              dataSource={rates}
              renderItem={({ issue, cost }) => (
                <List.Item>
                  Issue is : {issue} Cost is : {cost}{" "}
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

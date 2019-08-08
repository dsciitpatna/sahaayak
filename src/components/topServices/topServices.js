import React, { Component } from "react";
import "./topServices.css";
import "antd/dist/antd.css";
import { Card, Rate, Row, Col } from "antd";

const { Meta } = Card;

class TopVendors extends Component {
  state = {
    values: [4.5, 5, 4, 3.5]
  };

  render() {
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

export default TopVendors;

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Input, Row, Col, Button } from 'antd';

const InputGroup = Input.Group;

class Password extends Component {
  render() {
    return (
      <Fragment>
        <h1>Password</h1>
        <hr />
        <br />
        <InputGroup>
          <Row gutter={8}>
            <Col span={4}>
              <label>Current Password</label>
            </Col>
            <Col span={8}>
              <Input />
            </Col>
          </Row>
        </InputGroup>
        <br />
        <InputGroup>
          <Row gutter={8}>
            <Col span={4}>
              <label>New Password</label>
            </Col>
            <Col span={8}>
              <Input />
            </Col>
          </Row>
        </InputGroup>
        <br />
        <InputGroup>
          <Row gutter={8}>
            <Col span={4}>
              <label>Verify Password</label>
            </Col>
            <Col span={8}>
              <Input />
            </Col>
          </Row>
        </InputGroup>
        <br />
        <InputGroup>
          <div>Forgot your Password?</div>
        </InputGroup>
        <br />
        <Button type="primary">
          Save Changes
        </Button>
      </Fragment>)
  }
}

export default connect(
  null,
  null
)(Password);
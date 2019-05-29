import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import './rating.css';
import {Typography, Rate, Modal, Button,Input} from "antd";
const {Title, Paragraph}  = Typography;
const {TextArea} =  Input;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Ratings extends Component {
  state = {
    value: 3,
    visible: false,
  };

  handleChange = value => {
    this.setState({ value });
    this.showModal();
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false
    })
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };


  render() {
    const { value, visible, confirmLoading } = this.state;
    return (    
      <Fragment>
        <div className="ratingwrapper">
        <Title>Rate This Vendor</Title>
        <Paragraph>Tell others what you think</Paragraph>
        <div className="offset">
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </div>
        <Button type="primary" onClick={this.showModal}>
          Review
        </Button>
        <Modal
          title="Rate this vendor"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Title>Reviews are public and editable</Title>
          <Paragraph>
            The name is visible to the vendor and the admin
          </Paragraph>
          <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        <Title>Write a review</Title>

      <TextArea rows={4} placeholder="Describe your experience" />

        </Modal>
        </div>
      </Fragment>
    )
  }
}
const mapStatetoProps = state=>({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
})
export default connect(
  mapStatetoProps,
  {}
)(Ratings)
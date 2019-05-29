import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import {compose} from 'redux';
import "./rating.css";
import { Typography, Rate, Modal, Button, Input,Form,Alert } from "antd";
import {addReview} from "../../redux/actions/vendorActions";
const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

class Ratings extends Component {
  state = {
    value: 3,
    visible: false,
    id: "5cee8aa8f2a49620161cdf14"
  };

  handleChange = value => {
    this.setState({ value });
    this.showModal();
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  onEnterKeyPress = (e)=>{
    if(e.key === 'Enter'){
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    this.setState({
      visible: false
    });
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
				this.props.addReview({rating:this.state.value,review:values.review,serviceId:this.state.id});
      }
    });
  };
  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  render() {
    const {isAuthenticated,error} = this.props

  if(isAuthenticated){
    const { getFieldDecorator } = this.props.form;
    const { value, visible, confirmLoading } = this.state;
    return (
      <Fragment>
        {error.msg != ''?<Alert type="error" message={error.msg} />:null}
        <div className="ratingwrapper">
          <Title>Rate This Vendor</Title>
          <Paragraph>Tell others what you think</Paragraph>
          <div className="offset">
            <Rate tooltips={desc} onChange={this.handleChange} value={value} />
            {value ? (
              <span className="ant-rate-text">{desc[value - 1]}</span>
            ) : (
              ""
            )}
          </div>
          <Button type="primary" onClick={this.showModal}>
            Review
          </Button>
          <Modal
            title="Rate this vendor"
            visible={visible}
            onOk={this.handleSubmit}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" loading={this.props.isLoading} onClick={this.handleSubmit}>
                Review
              </Button>,
            ]}
          >
            <Title>Reviews are public and editable</Title>
            <Paragraph>
              The name is visible to the vendor and the admin
            </Paragraph>
              <Rate
                tooltips={desc}
                onChange={this.handleChange}
                value={value}
              />
              {value ? (
                <span className="ant-rate-text">{desc[value - 1]}</span>
              ) : (
                ""
              )}
              <Form onSubmit={this.handleSubmit} onKeyPress={this.onEnterKeyPress}>
              <Title>Write a review</Title>
              <Form.Item
              label=" Enter review"
            >
              {getFieldDecorator('review', {
                rules: [{  required: false }],
              })(
                <TextArea rows={4} placeholder="Tell others what you think" />
              )}
            
            </Form.Item>
              </Form>

          </Modal>

        </div>
      </Fragment>
    );
  }
  else{
    return <div>Not authenticated</div>
  }
  }
}
const mapStatetoProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default compose(
  connect(mapStatetoProps,{addReview}),
  Form.create({name: 'review_add'})
)(Ratings);

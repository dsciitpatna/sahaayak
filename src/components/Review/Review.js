import React, { Component } from 'react'
import {Rate,Modal,Button,Input} from "antd";
import './Review.css';
const {TextArea}  = Input

export default class Review extends Component {
    state = {
        loading: false,
        visible: false,
        rating: null,
        review: null
      };
    ratingChange = (e)=>{
        console.log(e);
        this.setState({
            rating:e
        })
    }
    changeReview = (e)=>{
        e.preventDefault()
        this.setState({
            review:e.target.value
        })
    }
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    
    render() {
        const { visible, loading } = this.state;
        return (
          <div className="review">
            <Button type="primary" onClick={this.showModal}  style={{margin:20}}>
              Review the Service
            </Button>
            <Modal
              visible={visible}
              title="Review the service"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>
                  Return
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  Submit
                </Button>,
              ]}
            >
        <Rate allowClear={false} defaultValue={this.state.rating} onChange={this.ratingChange} /> 
        <h2 style={{textAlign:"center",font:100}}>Write a review</h2>
        <TextArea rows={3} onChange={this.changeReview} defaultValue={this.state.review} />
            </Modal>
          </div>
        );
      }
}

import React, { Component } from 'react'
import {Rate,Modal,Button,Input} from "antd";
import './Review.css';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {postReviewAction} from '../../redux/actions/reviewActions';
const {TextArea}  = Input

class Review extends Component {
    state = {
        loading: false,
        visible: false,
        rating: null,
        review: null
      };
    ratingChange = (e)=>{
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
    
      handleSubmit = () => {
        const {_id} = this.props.service;
        const {rating,review}  = this.state
        this.props.postReviewAction(_id,{rating,review});


      };
    
      cancel = () => {
        this.setState({ visible: false
         });
      };
    
    render() {
        const { visible, loading,rating } = this.state;
        const {error,review}  = this.props;
        console.log(error,review);
        return (
          <div id="Addreview">
            
            <Button type="primary" onClick={this.showModal}  style={{margin:20}}>
              Review the Service
            </Button>
            <Modal
              visible={visible}
              title="Review the service"
              onOk={this.handleSubmit}
              onCancel={this.cancel}
              footer={[
                <Button key="back" onClick={this.cancel}>
                  Return
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleSubmit} disabled={rating===null?true:false}>
                  Submit
                </Button>,
              ]}
            >
        <Rate allowClear={false} onChange={this.ratingChange} /> 
        <h2 style={{textAlign:"center",font:100}}>Write a review</h2>
        <TextArea rows={3} onChange={this.changeReview} />
            </Modal>
          </div>
        );
      }
}
const mapStateToProps = state=>({
  service: state.categoryService.service,
  review: state.review,
  error: state.error
})
export default compose(
  connect(
    mapStateToProps,
    {postReviewAction}
  )
)(Review);
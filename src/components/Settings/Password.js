import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Input, Row, Col, Button, notification} from 'antd';
import {updatePassword} from '../../redux/actions/userActions';
const InputGroup = Input.Group;

class Password extends Component {
  state ={
    oldPassword: null,
    newPassword: null,
    confNewPassword: null
  }
  onChange = e=>{
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  openNotificationWithIcon = (type,message) => {
    notification[type]({
      message: message,
    });
  };
  onClick = ()=>{
    if(this.state.newPassword !== this.state.confNewPassword){
      return this.openNotificationWithIcon('error','Password doesn\'t match');
    }
    else if(this.state.oldPassword === this.state.newPassword){
      return this.openNotificationWithIcon('info','Cannot set the same password');
    }
    else{
       this.props.updatePassword({oldPassword: this.state.oldPassword,newPassword:this.state.newPassword},this.props.user.id);

    }

  }
  render() {
  if(this.props.passwordChangeStatus === 'Done')   
    this.openNotificationWithIcon('success','Changed the password successfully') ;
  else if(this.props.passwordChangeStatus === 'Fail') 
   this.openNotificationWithIcon('error','Some error occured try again')
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
              <Input name="oldPassword" value={this.state.oldPassword}  type="password"  onChange={this.onChange}/>
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
              <Input name="newPassword" value={this.state.newPassword} type="password" onChange={this.onChange}/>
            </Col>
          </Row>        </InputGroup>
        <br />
        <InputGroup>
          <Row gutter={8}>
            <Col span={4}>
              <label>Verify Password</label>
            </Col>
            <Col span={8}>
              <Input name="confNewPassword" value={this.state.confNewPassword} type="password" onChange={this.onChange}/>
            </Col>
          </Row>
        </InputGroup>
        <br />
        <InputGroup>
          <div>Forgot your Password?</div>
        </InputGroup>
        <br />
        <Button type="primary" onClick={this.onClick} loading={this.state.loading}>
          Save Changes
        </Button>
      </Fragment>)
  }
}
const mapStateToProps = state=>({
  user: state.user.user,
  passwordChangeStatus: state.user.passwordChangeStatus
})
export default connect(
  mapStateToProps,
  {updatePassword}
)(Password);
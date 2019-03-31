import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Form,Input,Checkbox,Button } from "antd";

class UserProfile extends Component {
  state={
    name:"",
    email:"",
    password:"",
    newpassword:"",
    phone:""
 }
 onChange = e => {
  this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { isAuthenticated, user } = this.props;
    const {name,email,password,newpassword,phone}=this.state;
    if (isAuthenticated && user.role === "user") {
      return (
        <Fragment>
          <Form layout="vertical">
            <Form.Item label="Username">
              <Input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item label="E-mail Id">
              <Input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
              />            
            </Form.Item>
            <Form.Item label="New Password">
              <Input
                type="password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item label="Confirm New Password">
              <Input
                type="password"
                name="newpassword"
                value={newpassword}
                onChange={this.onChange}
              />           
             </Form.Item>
            <Form.Item label="Phone Number">
             <Input
                type="text"
                name="phone"
                value={phone}
                onChange={this.onChange}
              />
            </Form.Item>
            <Checkbox>
              Are you sure you want to update your profile
            </Checkbox>
            <Button>UPDATE</Button>
          </Form>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <p>Please login to view user Profile.</p>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(UserProfile);

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Input, Row, Col, Button, Select } from 'antd';
import { clearErrors } from "../../redux/actions/errorActions";
import { updateUser } from "../../redux/actions/userActions";
import PropTypes from 'prop-types';

const InputGroup = Input.Group;
const { Option } = Select;

class Account extends Component {
  state = {
    username: this.props.authUser.name,
    email: this.props.authUser.email,
  }

  static propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = ()=>{
    const name = this.state.username;
    if(name !== this.props.authUser.name){
      const {id,email,isVendor,isAdmin} = this.props.authUser;
      console.log(id,email,isVendor,isAdmin,name);
      const updatedUser = {name,email,isVendor,isAdmin};
      this.props.updateUser({updatedUser,userId: id});
    }
  }
  render() {
    const { email, username } = this.state;
    return (
      <Fragment>
        <h1>Account</h1>
        <hr />
        <br />
        <InputGroup>
          <Row gutter={8}>
            <Col span={3}>
              <label>Username</label>
            </Col>
            <Col span={8}>
              <Input name="username" value={username} onChange={this.onChange} />
            </Col>
          </Row>
        </InputGroup>
        <br />
        <InputGroup>
          <Row gutter={8}>
            <Col span={3}>
              <label>Email</label>
            </Col>
            <Col span={8}>
              <Input value={email} disabled={true} style={{ color: 'grey' }} />
            </Col>
          </Row>
        </InputGroup>
        <br />
        <InputGroup>
          <Row gutter={8}>
            <Col span={3}>
              <label>Language</label>
            </Col>
            <Col span={8}>
              <Select defaultValue="english" style={{ width: 120 }}>
                <Option value="english">English</Option>
              </Select>
            </Col>
          </Row>
        </InputGroup>
        <br />
        <Button type="primary" onClick={this.onSubmit}>
          Save Changes
        </Button>
        <br />
        <div>
          <h4>Danger Zone</h4>
          <div style={{ border: '1px solid red', padding: '10px' }}>
            <Row gutter={8}>
              <Col span={20}>
                <h4>Delete Account</h4>
                <p>Once you delete account, there is no going back. Please be certain.</p>
              </Col>
              <Col span={4} style={{ marginTop: '10px' }}>
                <Button type="danger" size="large">Delete</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Fragment>)
  }
}

const mapStateToProps = state => ({
  authUser: state.auth.user,
  userUser: state.user.user,
});

export default connect(
  mapStateToProps,
  { clearErrors, updateUser }
)(Account);
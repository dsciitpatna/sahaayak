
import React, { Component, Fragment } from "react";
import { updateUser } from "../../redux/actions/userActions";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Form, Input, Button, Row, Col, Upload, Icon, message, Alert } from "antd";
import "./Profile.css";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class UserProfile extends Component {
  state = {
    alertMessage: null,
    name: this.props.authUser.name,
    email: this.props.authUser.email,
    newpassword: "",
    confnewpassword: "",
    phone: "",
    // Property used for uploading image
    loading: false
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // Function is used for uploading picture
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if ( this.state.newpassword!=="" && this.state.confnewpassword==="" ) {
      this.setState({
        alertMessage: "Please confirm your password !!!"
      })
      return;
    }
    if ( this.state.newpassword==="" && this.state.confnewpassword!=="" ) {
      this.setState({
        alertMessage: "Please enter both password fields !!!"
      })
      return;
    }
    if ( this.state.newpassword!==this.state.confnewpassword ) {
      this.setState({
        alertMessage: "Password do not match !!!"
      })
      return;
    }
    let body={};
    if ( this.state.name!=="" && this.state.name!==this.props.authUser.name ) {
      body.name=this.state.name;
    }
    if ( this.state.email!=="" && this.state.email!==this.props.authUser.email ) {
      body.email=this.state.email;
    }
    if ( this.state.newpassword!=="" ) {
      body.password=this.state.newpassword;
    }
    this.setState({
      alertMessage: null
    })
    const update={
      updatedUser: body,
      userId: this.props.authUser.id
    }
    this.props.updateUser(update);
  }

  render() {
    const { isAuthenticated } = this.props;
    const { name, email, newpassword, confnewpassword, phone, alertMessage } = this.state;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    if (isAuthenticated) {
      return (
        <Fragment>
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Row>
              <h1>Profile Page</h1>
              <hr></hr>
            </Row>
            <Row>
              <Col span={8}>
                <p>Here is a pic</p>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>

              </Col>
              <Col span={16}>
              {alertMessage ? <Alert message={alertMessage} type="error" /> : null}
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
                    name="newpassword"
                    value={newpassword}
                    onChange={this.onChange}
                  />
                </Form.Item>
                <Form.Item label="Confirm New Password">
                  <Input
                    type="password"
                    name="confnewpassword"
                    value={confnewpassword}
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
                <Button type="primary" onClick={this.handleSubmit}>UPDATE</Button>
              </Col>
            </Row>

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
  authUser: state.auth.user,
  userUser: state.user.user
});

export default connect(
  mapStateToProps,
  { updateUser }
)(UserProfile);

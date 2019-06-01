import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {compose} from 'redux'
import {Form,Input,Button,Row,Col,Icon,message,Alert,Typography,Modal} from "antd";
import { clearErrors } from "../../redux/actions/errorActions";
import { updateUser,updateUserNoPass } from "../../redux/actions/userActions";
import "./Profile.css";
const { Title, Paragraph } = Typography;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}
const Description = ({ term, children, span = 12 }) => (
  <Col span={span}>
    <div className="description">
      <div className="term">{term}</div>
      <div className="detail">{children}</div>
    </div>
  </Col>
);

class UserProfile extends Component {
  state = {
    msg: null,
    visible: false,
    username:this.props.authUser.name,
    email : this.props.authUser.email,
    isVendor: this.props.authUser.isVendor,

    // Property used for uploading image
    loading: false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    authUser: PropTypes.object.isRequired,
    userUser: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "USER_UPDATE_FAIL") {
        if (error.msg !== Object(error.msg)) {
          this.setState({
            msg: error.msg
          });
        } else {
          let message = "";
          if (error.msg.name && error.msg.name.message !== "") {
            message += error.msg.name.message + " ";
          }
          if (error.msg.email && error.msg.email.message !== "") {
            message += error.msg.email.message;
          }
          this.setState({
            msg: message
          });
        }
      } else {
        this.setState({
          msg: null
        });
      }
    }
  }

  // Function is used for uploading picture
  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  changeData = () =>{
    const {id} = this.props.authUser;
    const {username,email,isVendor} = this.state;
  this.props.updateUserNoPass({name:username,email,isVendor},id);
  }
  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  onEnterKeyPress = (e)=>{
    if(e.key === 'Enter'){
      this.handleSubmit(e)
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values['password']===values['confirmpassword'])
        {
          console.log(values['password']);
          return 1;
        }
        return 0;
      }
    });
  };
  onChangeName = (name)=>{
    console.log(name);
    this.setState({username:name})
  }
  onChangeEmail = (email)=>{
    console.log(email);
    this.setState({email:email})
  }

  render() {
    const { isAuthenticated } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { username,email,isVendor } = this.state;
    const imageUrl = this.state.imageUrl;
    if (isAuthenticated) {
      return (
        <Fragment>
          <div className="v-dashboard-container">
            <Row gutter={300} type="flex" justify="space-around" align="middle">
              <Col className="gutter-row" span={6}>
                <img
                  src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
                  alt=""
                  className="image1"
                />
                <Button
                  className="v-dashboard-btn"
                  type="primary"
                  icon="camera"
                  size="large"
                >
                  Change Profile Pic
                </Button>
              </Col>
              <Col className="gutter-row" span={18}>
                <div className="gutter-box">
                  <Title style={{ textAlign: "center", fontSize: "70px" }}>
                    Welcome: {username}
                  </Title>
                  <hr />
                  <div className="description-object" span={18}>
                    <span>Username is </span>
                    <Paragraph  editable={{ onChange: this.onChangeName }}>{username}</Paragraph>
                    <span>Email is </span>
                    <Paragraph  editable={{ onChange: this.onChangeEmail }}>{email}</Paragraph>
                    <span>Registered as a</span>
                    <Paragraph>{isVendor ? "Vendor" : "User"}</Paragraph>
                    <Button type="primary" title="Update Changes" size="large" onClick={this.changeData}>
                      Update changes
                    </Button>
                    <a onClick={this.showModal}>Update Password</a>
                  </div>
                </div>
              </Col>
              <Form onSubmit={this.handleSubmit} className="login-form" onKeyPress={this.onEnterKeyPress}>
                <Modal
                  title="Basic Modal"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your new Password!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Add a new Password"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("confirmpassword", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Password again!"
                        },
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Confirm Password"
                      />
                    )}
                  </Form.Item>
                </Modal>
              </Form>
            </Row>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <p>Please login to view user Profile.</p>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  authUser: state.auth.user,
  userUser: state.user.user,
  userStatus: state.user.status,
  error: state.error
});

export default compose(
  connect(mapStateToProps,{ updateUser,clearErrors,updateUserNoPass }),
  Form.create({ name: 'Change Password' })
)(UserProfile);
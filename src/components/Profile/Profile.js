import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Upload,
  Icon,
  message,
  Alert,
  Typography,
  Descriptions
} from "antd";
import { clearErrors } from "../../redux/actions/errorActions";
import { updateUser } from "../../redux/actions/userActions";
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
    pwdError: "",
    confPwdError: "",
    name: this.props.authUser.name,
    email: this.props.authUser.email,
    newpassword: "",
    confnewpassword: "",
    phone: "",
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newpassword !== "" && this.state.confnewpassword === "") {
      this.setState({
        confPwdError: "Please confirm your password !!!",
        pwdError: ""
      });
      return;
    }
    if (this.state.newpassword === "" && this.state.confnewpassword !== "") {
      this.setState({
        pwdError: "Please enter both password fields !!!",
        confPwdError: ""
      });
      return;
    }
    if (this.state.newpassword !== this.state.confnewpassword) {
      this.setState({
        pwdError: "Passwords do not match !!!",
        confPwdError: "Passwords do not match !!!"
      });
      return;
    }
    let body = {};
    if (
      this.state.name !== "" &&
      this.state.name !== this.props.authUser.name
    ) {
      body.name = this.state.name;
    }
    if (
      this.state.email !== "" &&
      this.state.email !== this.props.authUser.email
    ) {
      body.email = this.state.email;
    }
    if (
      this.state.newpassword !== "" &&
      this.state.newpassword === this.state.confnewpassword
    ) {
      body.password = this.state.newpassword;
    }
    this.setState({
      pwdError: "",
      confPwdError: "",
      newpassword: "",
      confnewpassword: ""
    });
    if (body === {}) {
      return;
    }
    const update = {
      updatedUser: body,
      userId: this.props.authUser.id
    };
    this.props.updateUser(update);
  };

  render() {
    const { isAuthenticated } = this.props;
    const { user } = this.props;
    const {
      name,
      email,
      newpassword,
      confnewpassword,
      phone,
      pwdError,
      confPwdError,
      msg
    } = this.state;
    console.log(user);
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
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
                    Welcome: {user.name}
                  </Title>
                  <hr />
                  <div className="description-object" span={18}>
                  <span>Username is </span>
                  <Paragraph editable={true}>{user.name}</Paragraph>
                  <span>
                  Email is </span>
                  <Paragraph editable={true}>{user.email}</Paragraph>
                  <span>Registered as a</span>
                  <Paragraph>{user.isVendor ? "Vendor":"User"}</Paragraph>
                  <Button type="primary" title="Update Changes" size="large">Update changes</Button>
                  </div>
                </div>
              </Col>
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

export default connect(
  mapStateToProps,
  { updateUser, clearErrors }
)(UserProfile);

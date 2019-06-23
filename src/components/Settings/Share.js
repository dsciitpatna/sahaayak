import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Share extends Component {
  render() {
    return (
      <Fragment>
        <h1>Share on Social Media</h1>
        <hr />
      </Fragment>)
  }
}

export default connect(
  null,
  null
)(Share);
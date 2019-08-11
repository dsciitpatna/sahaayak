import React, { Component } from "react";
import "antd/dist/antd.css";
import {connect} from 'react-redux';
import Tables from '../Tables/Tables';
class NewlyAddedService extends Component {
  render() {
    const {services,status} = this.props;
return  (
    <React.Fragment>
        <Tables services={services} status={status} />
    </React.Fragment>
)
  }
}
const mapStateToProps = state => ({
  services: state.service.services,
  status: state.service.status
});

export default connect(
  mapStateToProps,
  {}
)(NewlyAddedService);

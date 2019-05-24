import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import 'antd/dist/antd.css';

import { getCategoryWiseServices } from "../../redux/actions/serviceActions";

export class CategoryWiseServices extends Component {
    
    componentDidMount() {
        const category=this.props.match.params.categoryName;
        this.props.getCategoryWiseServices(category);
    }

    render() {

        const serviceList=!this.props.service.pending ? ( this.props.service.services.map((service)=>{
            return(
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: '100%' }} key={service._id} >
                <p>Category Name: {service.categoryName}</p>
                <p>Service Name: {service.name}</p>
                <p>Vendor Name: {service.vendor.name}</p>
                </Card>
            )
          })
          ) : (
            <div>Loading...</div>
          )

        return (
            <div>
                <div>
                    { serviceList }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    service: state.service
  });
  
  export default connect(
    mapStateToProps,
    { getCategoryWiseServices }
  )(CategoryWiseServices);
  

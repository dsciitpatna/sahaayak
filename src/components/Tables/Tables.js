import React from 'react';
import 'antd/dist/antd.css';
import {Col, Row  } from 'antd';
import './Tables.css';


export default function Tables(props){
  let list = null
  if(props.status === "done"){
   list = props.services.services.map(service=>{
    return (
      <Row className="tableBox">
              <Col xs={10} sm={10} md={6} lg={6} className="imageBox">
                  <img src="https://picsum.photos/200" />
              </Col>
              <Col xs={14} sm={14} md={6} lg={6} className="descBox">
                  {service.location.businessName}
              </Col>
            </Row>
    )
  })}
    return(
      <div id="tables">
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="newAddedTable">
            <h1>Newly Added Services</h1>
            {list}
          </div>
        </Col>
      </div>
    )
}
import React, { Component } from 'react'
import {Input} from 'antd';
import './PageHeader.css';
const {Search}  = Input;
const PageHeader = (props) =>{
    return (
        <div id="pageHeader">
        <h1>Find the person or your work</h1>
        <h2>Get instant access to reliable and affordable services</h2>
        <Search
              placeholder="Search for a service"
              onSearch={value => console.log(value)}
              style={{ maxWidth: 600 }}
            />
          <h3>For eg. Plumber, Electrician</h3>
      </div>
    );
}
export default PageHeader;
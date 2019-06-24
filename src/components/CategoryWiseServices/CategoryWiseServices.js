import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Card, Spin, Row, Col, Icon, notification, Alert, Button } from 'antd';
import 'antd/dist/antd.css';

import { getCategoryWiseServices } from "../../redux/actions/categoryServiceActions";
import "./CategoryWiseServices.css";

class CategoryWiseServices extends Component {

	componentDidMount() {
		const category = this.props.match.params.categoryName;
		this.props.getCategoryWiseServices(category);
	}

	componentDidUpdate(prevProps) {

		const category = this.props.match.params.categoryName;
		if (category !== prevProps.match.params.categoryName) {
			this.props.getCategoryWiseServices(category);
		}

		const { error } = this.props;

		if (error !== prevProps.error) {
			notification['error']({
				message: 'Error Processing your request',
				description: error.msg,
			});
		}
	}

	render() {
		const category = this.props.match.params.categoryName;
		const serviceList = !this.props.categoryService.pending ? (this.props.categoryService.services.map((service) => {
			return (
				<Card className="containerCard" key={service._id}>
					<Row gutter={16}>
						<Col xs={24} sm={24} md={8}>
							<Card style={{ width: 'auto', padding: '0px' }} className="card-image">
								<img alt="example" src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
							</Card>
						</Col>
						<Col xs={24} sm={24} md={16}>
							<h3>{service.name}</h3>
							Rating: {service.rating}
							<Link to={`/service/${service._id}`}><Button type="primary" style={{ float: 'right', margin: '-20px 0px' }}>View Details</Button></Link>
							<hr />
							<p><Icon type="phone" theme="twoTone" /> Contact: {service.detail.contact}</p>
							<p><Icon type="setting" theme="twoTone" /> Category : {category}</p>
							<p><Icon type="heat-map" /> Location: {service.detail.location}</p>
							<p><Icon type="smile" theme="twoTone" /> Vendor Name: {service.vendor.name}</p>
							<p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Description: {service.detail.description}</p>
						</Col>
					</Row>
				</Card>
			)
		})
		) : (
				[<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Spin tip="Loading..." size="large" ></Spin>
				</div>]
			)

		return (
			<div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					{serviceList.length ? serviceList : <Alert message="No services found!" type='warning' />}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	categoryService: state.categoryService
});

export default connect(
	mapStateToProps,
	{ getCategoryWiseServices }
)(CategoryWiseServices);


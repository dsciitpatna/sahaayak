import React, { Component } from 'react';
import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
import { Card, Spin, Row, Col, Icon, notification, PageHeader } from 'antd';
import 'antd/dist/antd.css';
import Gallery from 'react-grid-gallery';
import { getService } from "../../redux/actions/categoryServiceActions";
import "./Service.css";
import Review from '../Review/Review';
const { Meta } = Card;

const tabList = [
	{
		key: 'tab1',
		tab: 'Service',
	},
	{
		key: 'tab2',
		tab: 'Vendor',
	},
];

const IMAGES =
	[{
		src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
		thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
		thumbnailWidth: 40,
		thumbnailHeight: 40,
	},
	{
		src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
		thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
		thumbnailWidth: 40,
		thumbnailHeight: 40,
	},
	{
		src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
		thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
		thumbnailWidth: 40,
		thumbnailHeight: 40,
	},
	{
		src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
		thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
		thumbnailWidth: 40,
		thumbnailHeight: 40,
	}]


class Service extends Component {

	state = {
		key: 'tab1',
		boolReview:false
	};

	onTabChange = (key, type) => {
		this.setState({ [type]: key });
	};
	addReview = ()=>{
		this.setState({
			boolReview:true
		})
	}
	componentDidMount() {
		const serviceId = this.props.match.params.serviceId;
		this.props.getService(serviceId);
	}

	componentDidUpdate(prevProps) {
		const { error } = this.props;
		if (error !== prevProps.error) {
			notification['error']({
				message: 'Error Processing your request',
				description: error.msg,
			});
		}
	}

	render() {
		const { service, pending } = this.props;
				const serviceData = !pending && service ? (
			<div className="card-container">
				<PageHeader onBack={() => window.history.back()} title={`Category: ${service.business.categoryName}`} />
				<Card
					style={{ width: '100%' }}
					title={service.name}
					tabList={tabList}
					activeTabKey={this.state.key}
					onTabChange={key => {
						this.onTabChange(key, 'key');
					}}
				>
					{{
						tab1: (
							<div>
								<Row gutter={16}>
									<Col xs={12}>
										<Gallery images={IMAGES} />
									</Col>
									<Col xs={12} sm={12}>
										<Card
											title="Service Details"
											bordered={true}
											style={{ width: '100%' }}
										>
											<p><Icon type="setting" theme="twoTone" /> Category : {service.business.categoryName}</p>
											<p><Icon type="heat-map" /> Location: {service.location.building}</p>
											<p><Icon type="phone" theme="twoTone" /> Contact: {service.contact.landline}</p>
											<h3>Rating details:</h3>
											<div style={{ display: 'flex' }}>
												<Icon type="star" theme="twoTone" twoToneColor="#FFD700" />
												<Icon type="star" theme="twoTone" twoToneColor="#FFD700" />
												<Icon type="star" theme="twoTone" twoToneColor="#FFD700" />
												<Icon type="star" />
												<Icon type="star" />
											</div>
											<Review />
										</Card>
									</Col>
								</Row>
								<Row style={{ marginTop: '50px' }}>
									<Col xs={24} lg={12}>
										<h3>Description</h3>
										<div>Some Description</div>
									</Col>
								</Row>
							</div>
						),
						tab2: (
							<div>
								<Row gutter={16}>
									<Col xs={8}>
										<Card
											hoverable
											bordered={false}
											style={{ width: 'auto' }}
										>
											<img alt="example" src="https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
											<Meta title={service.categoryName} />
										</Card>
									</Col>
									<Col xs={24} sm={16}>
										<Card
											title="Vendor Details"
											bordered={true}
											style={{ width: '100%' }}
										>
											<p><Icon type="smile" theme="twoTone" /> Name: {service.vendor.name}</p>
											<p><Icon type="phone" theme="twoTone" /> Contact: {service.contact.landline}</p>
											<p><Icon type="smile" theme="twoTone" /> Categories: {service.business.categoryName}</p>
										</Card>
									</Col>
								</Row>
								<Row>
									<Col xs={24} sm={24}>
										<Card
											title="Other Services"
											bordered={true}
											style={{ width: '100%' }}
										>
											<p><Icon type="setting" theme="twoTone" /> Data</p>
											<p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Data</p>
											<p><Icon type="heat-map" /> Data</p>
											<p><Icon type="phone" theme="twoTone" /> Data</p>
											<p><Icon type="star" theme="twoTone" /> Data</p>
										</Card>
									</Col>
								</Row>
							</div>
						),
					}[this.state.key]}
				</Card>
			</div>
		) : (
				<div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Spin tip="Loading..." size="large" ></Spin>
				</div>
			)

		return (
			<div>
				{serviceData}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	service: state.categoryService.service,
	pending: state.categoryService.pending
});

export default connect(
	mapStateToProps,
	{ getService }
)(Service);
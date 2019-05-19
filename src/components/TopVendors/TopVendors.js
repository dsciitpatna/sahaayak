
import React from 'react';
import 'antd/dist/antd.css';
import './TopVendors.css';
import { Typography, Row, Col, Card ,Rate} from 'antd';

const { Title } = Typography;

function TopVendors(props) {
    return (
        <div className="container">
            <Title className="typography">TOP VENDORS</Title>
            <hr width="50%" align="left" />
            <div className="grid">
                <Row>
                    <Col sm={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            
                            <Rate disabled defaultValue={3.5} allowHalf= "true" />
                        </Card>
    </Col>
                    <Col sm={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            
                            <Rate disabled defaultValue={3.5} allowHalf= "true" />
                          
                        </Card>,
    </Col>
                    <Col sm={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            
                            <Rate disabled defaultValue={3.5} allowHalf= "true" />
                          
                        </Card>,
    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            
                            <Rate disabled defaultValue={3.5} allowHalf= "true" />
                          
                        </Card>,
    </Col>
                    <Col sm={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            
                            <Rate disabled defaultValue={3.5} allowHalf= "true" />
                          
                        </Card>,
    </Col>
                    <Col sm={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            
                            <Rate disabled defaultValue={3.5} allowHalf= "true" />
                          
                        </Card>,
    </Col>
                </Row>,
            </div>
        </div>);
}
export default TopVendors;
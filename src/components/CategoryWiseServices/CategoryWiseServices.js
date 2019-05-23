import React, { Component } from 'react';
import { Card } from 'antd';

export class CategoryWiseServices extends Component {
    render() {
        return (
            <div>
                <div>
                    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: '100%' }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    </Card>
                    <Card title="Small size card" extra={<a href="#">More</a>} style={{ width: '100%' }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    </Card>
                </div>
            </div>
        )
    }
}

export default CategoryWiseServices;

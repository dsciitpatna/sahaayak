import React, { Component } from 'react'

export class Service extends Component {
    render() {
        const serviceId=this.props.match.params.serviceId;
        return (
            <div>
                Service Dashboard...<br/>{serviceId}
            </div>
        )
    }
}

export default Service;

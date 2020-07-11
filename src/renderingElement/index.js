import React, { Component } from 'react'

export default class RenderingElement extends Component {
    username = "Cybersoft";
    lop = "FE42";

    renderInfo = () => {
        return <p> Username: {this.username} - Lop: {this.lop} </p>
    }

    render() {
        return (
            <div>
                <h3 className="title">Rendering Element</h3>
                {/* <p>Username: {this.username} </p>
                <p>Lop: {this.lop}</p> */}
                {this.renderInfo()}
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class HandlingEvent extends Component {

    handleOnclick = () => {
        console.log("Click button");
    }

    handleOnclickParam = (name,age) => {
        console.log("Hello " +  name + " " + age)
    }

    render() {
        return (
            <div>
                <h3 className="title"> Handeling Events</h3>

                <button className="btn btn-success" onClick={this.handleOnclick}> Handling Event</button>

                <button className="btn btn-info" onClick={() => { this.handleOnclickParam("Quan","18")} }>Handling Event Params</button>
            </div>
        )
    }
}

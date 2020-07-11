import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin: false,
            username: "Quan"
        };

        // console.log("Contructor");
    }

    renderHTML = () => {
        return this.state.isLogin ? <p>Login Success: Hello {this.state.username}</p > : <button className="btn btn-success" onClick={this.HandleLogin} >Login</button>;
    }

    HandleLogin = () => {
        this.setState({
            isLogin:true
        })
    }

    render() {
        // console.log("render");
        return (
            <div>
                <h3 className="title">State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}

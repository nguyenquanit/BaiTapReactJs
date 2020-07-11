import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {
    isLogin = false;
    username = "Quan";


    // renderHTML = () => {
    //     if(this.isLogin){
    //         return <p>Login Success: Hello {this.username}</p>
    //     }
    //     return <button className="btn btn-success">Login</button>;
    // }

    renderHTML = () => {
        return this.isLogin ? <p>Login Success: Hello {this.username}</p > : <button className="btn btn-success" onClick={this.HandleLogin} >Login</button>;
    }

    HandleLogin = () => {
        
        this.isLogin = true;
        
    }
    render() {
        // console.log("render");
        return (
            <div>
                <h3 className="title"> Example Handling Event</h3>
                {this.renderHTML()}
            </div>
        )
    }
}

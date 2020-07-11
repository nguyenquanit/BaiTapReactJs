import React, { Component } from 'react'

export default class BaiTapCar extends Component {

    constructor(props){
        super(props);
        this.state = {
            img:"./img/imgRedCar.jpg"
        }
    }

    setColor = img => this.setState({img})

    render() {
        return (
            <div className="container">
                <h3 className="title">
                    Bai Tap Car
                </h3>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={this.state.img} alt="" />
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger m-2" onClick={() => { this.setColor("./img/imgRedCar.jpg") }}>Red</button>
                        <button className="btn btn-light m-2" onClick={() => { this.setColor("./img/imgSilverCar.jpg")}}>Silver</button>
                        <button className="btn btn-dark m-2" onClick={() => { this.setColor("./img/imgBlackCar.jpg") }}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}

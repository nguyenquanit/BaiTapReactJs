import React, { Component } from 'react'
import data from './data.json'
export default class BaiTapList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listMovie: data
        }
        // console.log(this.state.listMovie)
    }

    renderListMovie = () => {
        const { listMovie } = this.state;
        return listMovie.map((productMovie) => {
            return (
                <div className="col-4 mb-2" key={productMovie.maPhim}>
                    <div className="card">
                        <img src={productMovie.hinhAnh} alt="pictureMovie"/>
                        <div className="card-body">
                            <h3 >{productMovie.tenPhim}</h3>
                            <span >{productMovie.moTa}</span>
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="container">
                <h3 className="title">Danh sách phim</h3>
                <div className="row">
                    {this.renderListMovie()}
                </div>
            </div>
        );
    }
}


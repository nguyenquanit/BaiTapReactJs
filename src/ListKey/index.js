import React, { Component } from 'react'

export default class ListKey extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ListProduct: [
                { id: 1, name: "Iphone XsMax", price: 123456 },
                { id: 2, name: "Samsung S20+", price: 133456 },
                { id: 3, name: "Nokia Lumia", price: 143456 },
                { id: 4, name: "HTC X", price: 153456 }
            ]
        }
    }

    renderTable = () => {
        const { ListProduct } = this.state;
        return ListProduct.map((product) => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <h3 className="title">Lists and Keys </h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

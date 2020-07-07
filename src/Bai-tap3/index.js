import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import ListProduct from './ListProduct'
import Footer from './Footer';

export default function Baitap3(){
    return(
        <div className = "bg-dark " >
            <Header />
            <Carousel />
            <ListProduct />
            <Footer />
        </div>
    );
}

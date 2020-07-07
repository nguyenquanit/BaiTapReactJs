import React from 'react';
import ProductItems from "./ProductItems"

export default function ListProduct(){
    return(
    <section section id = "smartphone"
    className = "container-fluid pt-5 pb-5 " >
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
      </div>
    </section>
    );
}
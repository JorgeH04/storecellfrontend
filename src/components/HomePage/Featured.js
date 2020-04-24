import React from "react";
//import { Link } from "react-router-dom";
import Title from "../Title";
//import { ProductConsumer } from "../../context";
import Product from "../Product";
export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="destacadas" center="true" />
        {/* products */}
        <div className="row my-5">
            {//value => {            <ProductConsumer>

             // const { featuredProducts } = value;
             // return featuredProducts.map(product => (
               // <Product// key={product.id} product={product} />
            //  ));       </ProductConsumer>
            }}
         
        </div>
        {/* button */}
        <div className="row mt-5">
          <div className="col text-center">
            
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { ProductConsumer } from "../../context/context";
import styled from "styled-components";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";     

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <ProductsWrapper className="py-5">
            <div className="container">
              {/* title                    total products : {filteredProducts.length} */}
              <ProductFilter />   

              <Title center title="our products" />
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">

                  </h6>
                  <hr />
                </div>
              </div>
              {/* products */}
              <div className="row my-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry, no items matched you search
                  </div>
                ) : (
                  filteredProducts.map(product => {
                    return <Product key={product._id} product={product} />;
                  })
                )}
              </div>
            </div>
          </ProductsWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductsWrapper = styled.section``;

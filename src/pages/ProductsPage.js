import React from "react";
import Hero from "../components/Hero";
//import productsBcg from "../images/productsBcg.jpeg";
import download from "../images/download.jpg";
import Products from "../components/ProductsPage/Products";
export default function ProductsPage() {
  return (
    <>
      <Hero img={download} />
      <Products />
    </>
  );
}

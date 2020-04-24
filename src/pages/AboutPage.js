import React from "react";
//import aboutBcg from "../images/aboutBcg.jpeg";
import casanunez from "../images/casanunez.jpg";

import Hero from "../components/Hero";
import Info from "../components/AboutPage/Info";

export default function AboutPage() {
  return (
    <>
      <Hero img={casanunez} />
      <Info />
    </>
  );
}

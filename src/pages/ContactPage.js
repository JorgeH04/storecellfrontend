import React from "react";
import Hero from "../components/Hero";
//import contactImg from "../images/contactBcg.jpeg";
import contacto from "../images/contacto.jpg";

import Contact from "../components/ContactPage/Contact";
export default function ContactPage() {
  return (
    <>
      <Hero img={contacto} />
      <Contact />
    </>
  );
}

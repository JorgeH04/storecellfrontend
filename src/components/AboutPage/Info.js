import React from "react";
import Title from "../Title";
//import aboutBcg from "../../images/aboutBcg.jpeg";
import salaacus from "../../images/salaacus.jpg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={salaacus}
              className="img-fluid img-thumbnail"
              alt="iphone"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 p-3">
            <Title title="Nuestro Negocio" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              impedit ab deleniti doloremque quia quis libero deserunt
              repellendus sint earum?
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              impedit ab deleniti doloremque quia quis libero deserunt
              repellendus sint earum?
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}

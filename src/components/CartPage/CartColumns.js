import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block my-5">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">productos</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">nombre de los productos</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">precio</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">cantidad</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">eliminar</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
        </div>
      </div>
    );
  }
}

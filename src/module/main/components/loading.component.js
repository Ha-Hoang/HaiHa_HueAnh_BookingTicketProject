import React, { Component } from "react";
import logo from "../../../assets/images/web-logo.png";

export default class Loading extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          zIndex: "99",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          className="animate__animated animate__pulse animate__infinite"
          alt=""
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import logo from "../../../assets/images/web-logo.png";

export default class Loading extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          zIndex: "4",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            margin: "auto",
            width: "120px",
            height: "100px",
            zIndex: "5",
          }}
        >
          <img
            src={logo}
            class="animate__animated animate__pulse animate__infinite"
            alt=""
          />
        </div>
      </div>
    );
  }
}

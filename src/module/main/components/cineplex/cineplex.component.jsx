import React, { Component } from "react";
import LogoCineplex from "../logo-cineplex/logo-cineplex.component";

class Cineplex extends Component {
  render() {
    return (
      <ul className="nav nav-pills col-768">
        <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li>
      </ul>
    );
  }
}

export default Cineplex;

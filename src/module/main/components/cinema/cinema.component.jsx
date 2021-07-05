import React, { Component } from "react";

class Cinema extends Component {
  render() {
    return (
      <a
        className="nav-link active"
        data-toggle="pill"
        role="tab"
        href="#v-pills-bhd-cinema-1"
      >
        <div className="details">
          <div className="cinemaImage">
            <img
              src="./images/bhd-star-bitexco.png"
              className="image"
              alt="bhd"
            />
          </div>
          <div className="describe">
            <p className="title">
              <span className="green">BHD Star</span> - Bitexco
            </p>
            <p className="address">L3-Bitexco Icon 68, 2 Hải Triều, Q1 </p>
            <p className="moreInfo">[chi tiết]</p>
          </div>
        </div>
      </a>
    );
  }
}

export default Cinema;

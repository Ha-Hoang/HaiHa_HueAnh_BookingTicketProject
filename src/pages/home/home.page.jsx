import React, { Component } from "react";
import Carousel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Footer />
      </div>
    );
  }
}

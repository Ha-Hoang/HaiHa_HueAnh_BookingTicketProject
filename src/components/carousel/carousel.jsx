import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data } from "./data";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 50,
      autoplaySpeed: 10000,
      cssEase: "linear",
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {data.map((item) => (
            <div>
              <img src={item} width="100%" alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

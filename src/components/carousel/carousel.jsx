import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/slide-1.jpg";
import slide2 from "../../assets/images/slide-2.jpg";
import slide3 from "../../assets/images/slide-3.jpg";
import "./carousel.css";

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
          <div className="slider1">
            <img width="100%" src={slide1} alt="slide1" />
          </div>
          <div className="slider2">
            <img width="100%" src={slide2} alt="slide2" />
          </div>
          <div className="slider3">
            <img width="100%" src={slide3} alt="slide3" />
          </div>
        </Slider>
      </div>
    );
  }
}

import React, { Component } from 'react'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/slide-1.jpg";
import slide2 from "../../assets/images/slide-2.jpg";
import slide3 from "../../assets/images/slide-3.jpg";
import homecss from "./carousel.css";

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
            dotsClass: "slick-dots",
            appendDots: (dots) => (
              <div
                style={{
                  borderRadius: "10px",
                  padding: "100px 0",
                }}
              >
                <ul style={{ margin: "0px", homecss }}>{dots}</ul>
              </div>
            ),
          };
          return (
            <div>
              <Slider {...settings}>
                <div>
                  <img src={slide1} alt="slide1" />
                </div>
                <div>
                  <img src={slide2} alt="slide2" />
                </div>
                <div>
                  <img src={slide3} alt="slide3" />
                </div>
              </Slider>
            </div>
          );
        
    }
}

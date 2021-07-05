import React, { Component } from "react";
import Slider from "react-slick";
import "./home.scss";
import { arrow, data } from "./data";
import MovieList from "../../components/movielist/movieList";
import CinemaApp from "../../components/cinema-app/cinema-app.component";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      slideArray: data,
      arrowArray: arrow,
      open: false,
    };
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

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
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="slickSlider">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.state.slideArray.map((slide, index) => (
              <div key={index} className="slide_item-poster">
                <img src={slide} width="100%" alt="" />
              </div>
            ))}
          </Slider>
          <div className="button">
            <button className="button-previous" onClick={this.previous}>
              <img src={this.state.arrowArray[0]} alt="" />
            </button>
            <button className="button-next" onClick={this.next}>
              <img src={this.state.arrowArray[1]} alt="" />
            </button>
          </div>
        </div>
        <section>
          {" "}
          <MovieList />
        </section>
        <section className="cinema-app">
          <CinemaApp />
        </section>
      </div>
    );
  }
}

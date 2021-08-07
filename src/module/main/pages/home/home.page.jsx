import React, { Component } from "react";
import Slider from "react-slick";
import "./home.scss";
import { arrow, data } from "./data";
import MovieList from "../../components/movielist/movieList";
import CinemaApp from "../../components/cinema-app/cinema-app.component";
import playvid from "../../../../assets/images/play-video.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CardMedia from "@material-ui/core/CardMedia";
import close from "../../../../assets/images/close.png";
import Application from "../../components/application/application.component";

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
          breakpoint: 600,
          settings: {
            dots: false
          }
        }
      ]
    };
    return (
      <div>
        <div className="slickSlider" style={{ position: "relative" }}>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.state.slideArray.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide}
                  style={{
                    width: "100%",
                  }}
                  alt=""
                />
              </div>
            ))}
          </Slider>

          <div className="hoverPoster">
            <button type="button" onClick={this.handleOpen}>
              <img src={playvid} alt="playvideo" />
            </button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              open={this.state.open}
              onClose={this.handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={this.state.open}>
                <div
                  style={{
                    width: "900px",
                    height: "500px",
                    position: "relative",
                  }}
                >
                  <button
                    onClick={this.closeModal}
                    style={{
                      position: "absolute",
                      right: "-20px",
                      transform: "translateY(-20px)",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      "&:focus": {
                        outline: "none",
                      },
                    }}
                  >
                    <img src={close} alt="close"></img>
                  </button>
                  <CardMedia
                    component="iframe"
                    src="https://www.youtube.com/embed/Eu9G8nO5-Ug"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Fade>
            </Modal>
          </div>
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
        <section
          className="cinema-app"
          id="cinemaGroup"
          style={{ paddingTop: "60px" }}
        >
          <CinemaApp />
        </section>
        <section
          id="application"
          style={{ paddingTop: "60px" }}
        >
          <Application />
        </section>
      </div>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
import ShowingFilmContent from "./showingFilmContent";
import { connect } from "react-redux";
import { getMovieListAction } from "../../../../store/actions/movie.action";

class ShowingFilm extends Component {
  renderMovieList = () => {
    const { movieList } = this.props;
    return movieList.map((movie, index) => {
      return <ShowingFilmContent movie={movie} key={index} />;
    });
  };

  render() {
    const settings = {
      rows: 2,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return <Slider {...settings}>{this.renderMovieList()}</Slider>;
  }
  componentDidMount() {
    this.props.dispatch(getMovieListAction());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps)(ShowingFilm);

import React, { Component } from "react";
import CinemaMovieDetail from "../cinema-movie-detail/cinemaMovieDetail..component";

class CinemaMovieDetailList extends Component {
  render() {
    return (
      <div>
        <div>
          <CinemaMovieDetail />
          <CinemaMovieDetail />
          <CinemaMovieDetail />
          <CinemaMovieDetail />
          <CinemaMovieDetail />
          <CinemaMovieDetail />
          <CinemaMovieDetail />
        </div>
      </div>
    );
  }
}

export default CinemaMovieDetailList;

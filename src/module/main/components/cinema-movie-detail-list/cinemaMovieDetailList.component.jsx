import React, { Component } from "react";
import CinemaMovieDetail from "../cinema-movie-detail/cinemaMovieDetail..component";

class CinemaMovieDetailList extends Component {
  render() {
    return (
      <div className="tab-content">
        <div
          className="tab-pane active"
          id="v-pills-bhd-cinema-1"
          role="tabpanel"
        >
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

import React, { Component } from "react";
import Carousel from "../../components/carousel/carousel";
import MovieList from "../../components/movielist/movieList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <MovieList />
      </div>
    );
  }
}

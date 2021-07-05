import React, { Component } from "react";
import CinemaList from "../cinema-list/cinema-list.component";
import Cineplex from "../cineplex/cineplex.component";
import "./cinema-app.styles.scss";
class CinemaApp extends Component {
  render() {
    return (
      <section className="cinemaBlock ">
        <div className="wrapper container">
          <div className="row">
            <div className="col-md-1 ">
              <Cineplex />
            </div>
            <div className="col-md-11 scroll-0">
              <CinemaList />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CinemaApp;

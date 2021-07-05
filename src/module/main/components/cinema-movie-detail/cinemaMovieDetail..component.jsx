import React, { Component } from 'react';

class CinemaMovieDetail extends Component {
    render() {
        return (
            <div className="details big-details">
                <div className="wrapInfo d-flex ">
                  <div className="cinemaImage">
                    <img src="./images/csnm.png" alt="wonderwoman" />
                  </div>
                  <div className="titleInfo ">
                    <span className="bg-green">P</span>
                    <p className="movieTitle">Cuộc Sống Nhiệm Màu - Soul - </p>
                    <p className="info">100 phút - TIX 9 - IMDb 8</p>
                  </div>
                </div>
                <div className="typeTiming">
                  <div className="version">2D Digital</div>
                  <div className="session">
                    <a href="#"><span className="start-time">13:00</span> ~ 14:40</a>
                    <a href="#"><span className="start-time">16:55</span> ~ 18:35</a>
                    <a href="#"><span className="start-time">21:05</span> ~ 22:45</a>
                  </div>
                </div>
              </div>
        );
    }
}

export default CinemaMovieDetail;

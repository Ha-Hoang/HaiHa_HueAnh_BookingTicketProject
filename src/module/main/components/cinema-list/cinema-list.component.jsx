import React, { Component } from 'react';
import CinemaMovieDetailList from '../cinema-movie-detail-list/cinemaMovieDetailList.component';
import Cinema from '../cinema/cinema.component';

class CinemaList extends Component {
    render() {
        return (
          <div className="tab-pane active" id="v-pills-bhd" role="tabpanel">
            <div className="row">
              <div className="col-md-4">
                <div className="nav nav-pills " role="tablist">
                <Cinema />
                <Cinema />
                <Cinema />
                <Cinema />
                <Cinema />
                  </div>
              </div>
              <div className="col-md-8 fix-padding fixed-scroll">
               <CinemaMovieDetailList />
              </div>
            </div>
          </div>
        );
    }
}

export default CinemaList;
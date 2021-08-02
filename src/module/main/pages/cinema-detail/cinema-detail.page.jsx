import React, { Component } from "react";
import { getCinemaDetailAction } from "../../../../store/actions/cinema.action";
import CinemaDetailBottom from "../../components/cinema-detail-bottom/cinema-detail-bottom.component";
import CinemaDetailTop from "../../components/cinema-detail-top/cinema-detail-top.component";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class CinemaDetail extends Component {
  render() {
    return (
      <div>
        <CinemaDetailTop />
        <div id="cinemaDetailBottom">
          <CinemaDetailBottom />
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { cinemagroupcode } = this.props.match.params;
    console.log(cinemagroupcode);
  }
}

export default connect()(withRouter(CinemaDetail));

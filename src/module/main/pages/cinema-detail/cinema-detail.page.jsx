/* eslint-disable no-undef */
import React, { Component } from "react";
import {
  getCinemaDetailAction,
  getCinemaGroupAction,
} from "../../../../store/actions/cinema.action";
import CinemaDetailBottom from "../../components/cinema-detail-bottom/cinema-detail-bottom.component";
import CinemaDetailTop from "../../components/cinema-detail-top/cinema-detail-top.component";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class CinemaDetail extends Component {
  render() {
    return (
      <div>
        <CinemaDetailTop />
        <div
          id="cinemaDetailBottom"
          style={{
            paddingTop: "43px",
            "@media (maxWidth: 768px)": {
              paddingTop: "0px",
            },
          }}
        >
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

const mapStateToProps = (state) => {
  return {
    cinemaDetail: state.cinema.cinemaDetail,
  };
};
export default connect(mapStateToProps)(withRouter(CinemaDetail));

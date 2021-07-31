import React from "react";
import CinemaMovieDetail from "../cinema-movie-detail/cinemaMovieDetail..component";

export default function CinemaMovieDetailList(props) {
  const { danhSachPhim } = props.schedule;

  const renderCinemaMovieDetail = () => {
    return danhSachPhim?.map((lst, index) => {
      return (
        <React.Fragment key={index}>
          <CinemaMovieDetail lst={lst} />
        </React.Fragment>
      );
    });
  };

  return (
    <div style={{ padding: "10px 10px" }}>
      <div>{renderCinemaMovieDetail()}</div>
    </div>
  );
}

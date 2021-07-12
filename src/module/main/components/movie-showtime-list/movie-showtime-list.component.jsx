import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MovieTheaterDetail from "../movie-theater-detail/movie-theater-detail.component";
import MovieShowTime from "../movie-showtime/movie-showtime.component";

const useStyles = makeStyles((theme) => ({
  showDetail: {
    padding: "18px",
    height: "667px",
  },
  time: {
    padding: "10px",
  },
}));

export default function MovieShowTimeList() {
  const classes = useStyles();
  return (
    <div className={classes.showDetail}>
      <MovieTheaterDetail />
      <div className={classes.time}>
        <MovieShowTime />
      </div>
    </div>
  );
}

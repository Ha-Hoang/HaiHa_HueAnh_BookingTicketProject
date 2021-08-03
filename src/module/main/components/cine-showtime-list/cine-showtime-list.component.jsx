import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FilmDetail from "../film-detail/film-detail.component";
import FilmShowtime from "../film-showtime/film-showtime.component";

const useStyles = makeStyles((theme) => ({
  showDetail: {
    padding: "18px",
    height: "595px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: "#e8e3e3",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#8080805e",
      borderRadius: "5px",
    },
  },
  time: {
    padding: "10px",
  },
}));

export default function CineShowtimeList(props) {
  const classes = useStyles();
  return (
    <div className={classes.showDetail}>
      <FilmDetail />
      <div className={classes.time}>
        <FilmShowtime />
      </div>
    </div>
  );
}

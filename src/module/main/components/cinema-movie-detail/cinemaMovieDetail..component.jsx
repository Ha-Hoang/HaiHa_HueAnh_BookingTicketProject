import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import film from "../../../../assets/images/payoo.jpg";

const useStyles = makeStyles((theme) => ({
  coverTextTiming: {
    padding: "5px",
    display: "inline-block",
  },
  textTiming: {
    color: "#43a047",
    "&:hover": {
      color: "green",
      textDecoration: "none",
    },
  },
  bigDetail: {
    padding: "10px 0",
    borderBottom: "1px solid #e2e2e2",
  },
  imgFilm: {
    marginRight: "15px",
    width: "50px",
    height: "50px",
  },
  titleInfo: {
    width: "100%",
    paddingTop: "5px",
  },
  movieTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "0",
    lineHeight: "22px",
  },
  info: {
    marginBottom: "0",
    fontSize: "14px",
    color: "#9b9b9b",
  },
  filmDetail: {
    display: "flex",
  },
  typeTiming: {
    paddingTop: "8px",
  },
}));
export default function CinemaMovieDetail(props) {
  const classes = useStyles();
  return (
    <div className={classes.bigDetail}>
      <div className={classes.filmDetail}>
        <img src={film} alt="wonderwoman" className={classes.imgFilm} />
        <div className={classes.titleInfo}>
          <p className={classes.movieTitle}>Cuộc Sống Nhiệm Màu - Soul - </p>
          <p className={classes.info}>100 phút - TIX 9 - IMDb 8</p>
        </div>
      </div>
      <div className={classes.typeTiming}>
        <div className="session">
          <span>2D DIGITAL</span>
          <Typography variant="h5" className={classes.coverTextTiming}>
            <Link to="/" className={classes.textTiming}>
              10:10
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}

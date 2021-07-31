import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Format from "date-format";

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
  const { lst } = props;
  const { lstLichChieuTheoPhim } = props.lst;

  const renderTimeList = () => {
    return lstLichChieuTheoPhim.map((lstLichChieu, index) => {
      return (
        <Typography variant="h5" className={classes.coverTextTiming} key={index}>
          <Link to="/" className={classes.textTiming}>
            {Format("hh:mm", new Date(lstLichChieu.ngayChieuGioChieu))}
          </Link>
        </Typography>
      );
    });
  };

  return (
    <div className={classes.bigDetail}>
      <div className={classes.filmDetail}>
        <img src={lst.hinhAnh} alt="lst.hinhAnh" className={classes.imgFilm} />
        <div className={classes.titleInfo}>
          <p className={classes.movieTitle}>{lst.tenPhim}</p>
          <p className={classes.info}>100 phút - TIX 9 - IMDb 8</p>
        </div>
      </div>
      <div className={classes.typeTiming}>
        <div className="session">
          <span>2D DIGITAL</span>
          {renderTimeList()}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MovieTheaterDetail from "../movie-theater-detail/movie-theater-detail.component";
import MovieShowTime from "../movie-showtime/movie-showtime.component";
import { useSelector } from "react-redux";

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

export default function MovieShowTimeList(props) {
  const { lichChieuRap } = props;
  const classes = useStyles();
  const cinemaGroup = useSelector((state) => state.cinema.cinemaGroup);

  return (
    <div className={classes.showDetail}>
      {cinemaGroup.map((rap, index) => {
        let lichChieu = lichChieuRap.filter(
          (item) => item.thongTinRap.maCumRap === rap.maCumRap
        );
        return (
          <React.Fragment key={index}>
            <MovieTheaterDetail chiTietRap={rap} />
            <div className={classes.time}>
              <MovieShowTime lichChieu={lichChieu}/>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MovieTheaterList from "../movie-theater-list/movie-theater-list.component";
import DaysOfWeek from "../days-of-week/days-of-week.component";
import MovieShowTimeList from "../movie-showtime-list/movie-showtime-list.component";
import { useDispatch } from "react-redux";
import { getCinemaGroupAction } from "../../../../store/actions/cinema.action";
import { useSelector } from "react-redux";
import Format from "date-format";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "915px",
    float: "none",
    margin: "auto",
    clear: "both",
  },
  row: {
    border: "1px solid #8080804f",
    borderRadius: "6px",
    backgroundColor: "#fff",
    height: "713px",
    "@media (max-width: 768px)": {
      height: "1300px",
    },
  },
  col2: {
    maxWidth: "74.666667%",
    "@media (max-width: 768px)": {
      maxWidth: "74%",
    },
    "@media (max-width: 600px)": {
      maxWidth: "100%",
    },
  },
}));

export default function MovieDetailBottom(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [maHeThongRap, setMaHeThongRap] = useState("");
  const [lichChieuRap, setLichChieuRap] = useState([]);
  const lichChieu = useSelector((state) => state.movie.movieDetail.lichChieu);

  const handleChoiceMovie = (maHeThongRap) => {
    const lichChieuRap = lichChieu.filter(
      (lichChieu) => lichChieu.thongTinRap.maHeThongRap === maHeThongRap
    );
    setMaHeThongRap(maHeThongRap);
    setLichChieuRap(lichChieuRap);
    dispatch(getCinemaGroupAction(maHeThongRap));
  };

  const [ngayThang, setNgayThang] = useState(new Date());
  const handleChoiceDay = (ngay) => {
    const lichChieuRap = lichChieu.filter(
      (lichChieu) =>
        Format("dd/MM/yyyy", new Date(lichChieu.ngayChieuGioChieu)) === ngay
    );
    setLichChieuRap(lichChieuRap);
    setNgayThang(ngayThang);
  };

  return (
    <Container className={classes.container}>
      <Grid container className={classes.row}>
        <Grid item lg={3} md={3} sm={3} xs={12} className={classes.col1}>
          <MovieTheaterList
            maHeThongRap={maHeThongRap}
            handleChoiceMovie={handleChoiceMovie}
          />
        </Grid>

        <Divider orientation="vertical" flexItem />

        <Grid item lg={9} md={9} sm={9} xs={12} className={classes.col2}>
          <DaysOfWeek handleChoiceDay={handleChoiceDay} />
          <MovieShowTimeList lichChieuRap={lichChieuRap} />
        </Grid>
      </Grid>
    </Container>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaDetailAction } from "../../../../store/actions/cinema.action";
import CinemaList from "../cinema-list/cinema-list.component";
import Cineplex from "../cineplex/cineplex.component";

const useStyles = makeStyles((theme) => ({
  cineplex: {
    border: "1px solid #e2e2e2",
    padding: "0",
    borderRight: "none",
  },
  cinemaList: {
    border: "1px solid #e2e2e2",
  },
  wrapper: {
    maxWidth: "940px",
    margin: "auto",
  },
}));

export default function CinemaApp(props) {
  const classes = useStyles();

  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  const [cinemaDetail, setCinemaDetail] = useState({});

  const dispatch = useDispatch();
  let cinema = useSelector((state) => state.cinema.cinemaDetail);

  useEffect(() => {
    dispatch(getCinemaDetailAction());
  }, []);

  useEffect(() => {
    if (Object.keys(cinemaDetail).length === 0) {
      const newCinemaDetail = cinema[0] || {};
      setCinemaDetail(newCinemaDetail);
    }
  }, [cinema]);

  const handleChoiceCinema = (maHeThongRap) => {
    const newCinemaDetail = cinema.find(
      (cine) => cine.maHeThongRap === maHeThongRap
    );

    setMaHeThongRap(maHeThongRap);
    setCinemaDetail(newCinemaDetail);
  };

  return (
    <section className={classes.wrapper}>
      <Grid container>
        <Grid item md={1} className={classes.cineplex}>
          <Cineplex
            handleChoiceCinema={handleChoiceCinema}
            maHeThongRap={maHeThongRap}
          />
        </Grid>
        <Grid item md={11} className={classes.cinemaList}>
          <CinemaList cinemaDetail={cinemaDetail} />
        </Grid>
      </Grid>
    </section>
  );
}

import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaGroupAction } from "../../../../store/actions/cinema.action";
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

  const dispatch = useDispatch();
  //const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  const [cinemaGroup, setCinemaGroup] = useState([]);

  const handleChoiceCinema = (maHeThongRap) => {
    // const cinemaGroup = cinemaList.filter(
    //   (list) => list.maHeThongRap === maHeThongRap
    // );
    // console.log(cinemaGroup);
    dispatch(getCinemaGroupAction(maHeThongRap));
    setMaHeThongRap(maHeThongRap);
    // setCinemaGroup(cinemaGroup);
  };
  
  return (
    <section className={classes.wrapper}>
      <Grid container>
        <Grid item md={1} className={classes.cineplex}>
          <Cineplex handleChoiceCinema={handleChoiceCinema} />
        </Grid>
        <Grid item md={11} className={classes.cinemaList}>
          <CinemaList cinemaGroup={cinemaGroup} />
        </Grid>
      </Grid>
    </section>
  );
}

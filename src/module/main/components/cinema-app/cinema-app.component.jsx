import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
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
  return (
    <section className={classes.wrapper}>
      <Grid container>
        <Grid item md={1} className={classes.cineplex}>
          <Cineplex />
        </Grid>
        <Grid item md={11} className={classes.cinemaList}>
          <CinemaList />
        </Grid>
      </Grid>
    </section>
  );
}

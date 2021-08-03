import React from "react";
import CinemaGroup from "../cinema-group/cinema-group.component";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Divider, Grid } from "@material-ui/core";
import CineSchedule from "../cine-schedule/cine-schedule.component";
import CineShowtimeList from "../cine-showtime-list/cine-showtime-list.component";

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

export default function CinemaDetailBottom(props) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container className={classes.row}>
        <Grid item lg={3} md={3} sm={3} xs={12} className={classes.col1}>
          <CinemaGroup />
        </Grid>

        <Divider orientation="vertical" flexItem />

        <Grid item lg={9} md={9} sm={9} xs={12} className={classes.col2}>
          <CineSchedule />
          <CineShowtimeList />
        </Grid>
      </Grid>
    </Container>
  );
}

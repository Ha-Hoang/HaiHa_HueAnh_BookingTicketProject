import React from "react";
import { Divider, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MovieTheater from "../movie-theater/movie-theater.component";

const useStyles = makeStyles((theme) => ({
  rootList: {
    width: "100%",
    maxWidth: "36ch",
    "@media (max-width: 600px)": {
      maxWidth: "100%",
    },
  },
  divider: {
    width: "100%",
  },
}));

export default function MovieTheaterList() {
  const classes = useStyles();
  return (
    <List className={classes.rootList}>
      <MovieTheater />
      <Divider orientation="horizontal" className={classes.divider} />
      <MovieTheater />
      <Divider orientation="horizontal" className={classes.divider} />
      <MovieTheater />
      <Divider orientation="horizontal" className={classes.divider} />
      <MovieTheater />
      <Divider orientation="horizontal" className={classes.divider} />
      <MovieTheater />
      <Divider orientation="horizontal" className={classes.divider} />
      <MovieTheater />
      <Divider orientation="horizontal" className={classes.divider} />
    </List>
  );
}

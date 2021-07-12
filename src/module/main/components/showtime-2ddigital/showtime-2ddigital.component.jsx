import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  coverText: {
    padding: "5px",
    display: "inline-block",
  },
  textTime: {
    color: "#43a047",
    "&:hover": {
      color: "green",
      textDecoration: "none",
    },
  },
}));

export default function ShowTime2dDigital() {
  const classes = useStyles();
  return (
    <Typography className={classes.coverText} variant="h5">
      <Link className={classes.textTime}>13:00</Link>
    </Typography>
  );
}

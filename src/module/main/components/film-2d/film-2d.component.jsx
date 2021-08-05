import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Format from "date-format";

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

export default function Film2d(props) {
  const classes = useStyles();
  return (
    <Typography className={classes.coverText} variant="h5">
      <Link to="/" className={classes.textTime}>
        10:10
        {/* {Format("hh:mm", new Date(time.ngayChieuGioChieu))} */}
      </Link>
    </Typography>
  );
}

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

export default function ShowTime2dDigital(props) {
  const classes = useStyles();
  const { lichChieu } = props;

  return lichChieu.map((time, index) => {
    return (
        <Typography key={index} className={classes.coverText} variant="h5">
          <Link to="/" className={classes.textTime}>
            {Format("hh:mm", new Date(time.ngayChieuGioChieu))}
          </Link>
        </Typography>
    );
  });
}

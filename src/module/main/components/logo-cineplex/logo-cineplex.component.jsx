import { makeStyles } from "@material-ui/core";
import React from "react";
import cinemaLogo from "../../../../assets/images/BHD.png";

const useStyles = makeStyles((theme) => ({
  imgLogo: {
    width: "100%",
  },
}));
export default function LogoCineplex(props) {
  const classes = useStyles();
  return <img src={cinemaLogo} alt="hehe" className={classes.imgLogo} />;
}

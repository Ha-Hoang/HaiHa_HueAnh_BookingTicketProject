import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  imgLogo: {
    width: "100%",
  },
}));
export default function LogoCineplex(props) {
  const classes = useStyles();
  const { item } = props;
  return <img src={item.logo} alt="hehe" className={classes.imgLogo} />;
}

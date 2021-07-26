import { makeStyles } from "@material-ui/core";
import React from "react";
import LogoCineplex from "../logo-cineplex/logo-cineplex.component";

const useStyles = makeStyles((theme) => ({
  liLogo: {
    opacity: "0.3",
    padding: "20px 0",
    borderBottom: "1px solid #e2e2e2",
    transition: "all 0.5s",
    cursor: "pointer",
    "&:hover": {
      opacity: "1",
    },
  },
  ulLogo: {
    listStyle: "none",
    paddingLeft: "0",
    maxWidth: "50px",
    margin: "auto",
  },
}));

class Cineplex extends Component {
  render() {
    return (
      <ul className="nav nav-pills col-768">
        <li className="nav-item">
          <LogoCineplex />
        </li>
        {/* <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li>
        <li className="nav-item">
          <LogoCineplex />
        </li> */}
      </ul>
    );
  }
}

export default function Cineplex(props) {
  const classes = useStyles();
  return (
    <ul className={classes.ulLogo}>
      <li className={classes.liLogo}>
        <LogoCineplex />
      </li>
      <li className={classes.liLogo}>
        <LogoCineplex />
      </li>
      <li className={classes.liLogo}>
        <LogoCineplex />
      </li>
      <li className={classes.liLogo}>
        <LogoCineplex />
      </li>
      <li className={classes.liLogo}>
        <LogoCineplex />
      </li>
      <li className={classes.liLogo}>
        <LogoCineplex />
      </li>
    </ul>
  );
}

import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import galaxy from "../../../../assets/images/galaxycine.png";

const useStyles = makeStyles((theme) => ({
  avatarCinema: {
    width: "50px",
    height: "50px",
    padding: "5px",
  },
  detailCinema: {
    display: "flex",
    borderBottom: "3px solid black",
    padding: "10px",
  },
  listItemActive: {
    opacity: "1",
    cursor: "pointer",
  },
  textCinemaName: {
    textTransform: "capitalize",
    marginBottom: "0px",
  },
  textTiming: {
    color: "grey",
    marginBottom: "0px",
  },
}));

export default function InfoCinema(props) {
  const classes = useStyles();
  return (
    <div className={classes.detailCinema}>
      <div className={classes.avatar}>
        <Avatar className={classes.avatarCinema} alt="bhd" src={galaxy} />
      </div>
      <div>
        <p className={classes.textCinemaName}>Galaxy Quang Trung</p>
        <p className={classes.textTiming}>
          <span>8/8</span> - <span>13:00</span> - <span>RẠP 5</span>
        </p>
      </div>
    </div>
  );
}

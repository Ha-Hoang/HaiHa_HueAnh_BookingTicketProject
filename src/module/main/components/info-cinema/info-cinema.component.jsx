import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  const { bookinglst } = props;

  return (
    <div className={classes.detailCinema}>
      <div className={classes.avatar}>
        <Avatar
          className={classes.avatarCinema}
          alt="bhd"
          src={bookinglst.hinhAnh}
        />
      </div>
      <div>
        <p className={classes.textCinemaName}>{bookinglst.tenCumRap}</p>
        <p className={classes.textTiming}>
          <span>{bookinglst.ngayChieu}</span> - <span>{bookinglst.gioChieu}</span>{" "}
          - <span style={{ textTransform: "uppercase" }}>{bookinglst.tenRap}</span>
        </p>
      </div>
    </div>
  );
}

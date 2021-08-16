import { makeStyles } from "@material-ui/core";
import React from "react";
import bhd from "../../../../assets/images/bhd-star-vincom-le-van-viet.png";

const useStyles = makeStyles((theme) => ({
  navLink: {
    backgroundColor: "white !important",
    width: "100%",
    cursor: "pointer",
  },
  detail: {
    paddingBottom: "5px",
    borderBottom: "1px solid #e2e2e2",
    display: "flex",
    opacity: "0.3",
    transition: "all 0.5s",
    padding: "13px",
    cursor: "pointer",
    "&:hover": {
      opacity: "1",
    },
  },
  detailActive: {
    paddingBottom: "5px",
    borderBottom: "1px solid #e2e2e2",
    display: "flex",
    opacity: "1",
    transition: "all 0.5s",
    padding: "13px",
    cursor: "pointer",
  },
  imageCinema: {
    width: "54px",
    marginRight: "20px",
  },
  describe: {
    display: "block",
    fontSize: "14px",
  },
  title: {
    marginBottom: "0",
    color: "black",
  },
  address: {
    color: "#949494",
    fontSize: "12px",
    whiteSpace: "nowrap",
    width: "180px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: "0px",
  }
}));
export default function Cinema(props) {
  const classes = useStyles();
  const { cine, maCumRap } = props;

  return (
    <div
      className={
        cine.maCumRap === maCumRap ? classes.detailActive : classes.detail
      }
      onClick={() => props.handleChoiceSchedule(cine.maCumRap)}
    >
      <div>
        <img src={bhd} className={classes.imageCinema} alt="bhd" />
      </div>
      <div className={classes.describe}>
        <p className={classes.title}>
          <span>{cine.tenCumRap}</span>
        </p>
        <p className={classes.address}>{cine.diaChi}</p>
      </div>
    </div>
  );
}

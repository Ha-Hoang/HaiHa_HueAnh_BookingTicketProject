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
    "&:hover": {
      opacity: "1",
    },
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
  },
  moreInfo: {
    color: "red",
  },
}));
export default function Cinema(props) {
  const classes = useStyles();
  return (
    <a href="/" className={classes.navLink} style={{textDecoration: "none"}}>
      <div className={classes.detail}>
        <div>
          <img src={bhd} className={classes.imageCinema} alt="bhd" />
        </div>
        <div className={classes.describe}>
          <p className={classes.title}>
            <span>BHD Star - Bitexco</span>
          </p>
          <p className={classes.address}>
            L3-Bitexco Icon 68, 2 Hải Triều, Q1{" "}
          </p>
          <p className={classes.moreInfo}>[chi tiết]</p>
        </div>
      </div>
    </a>
  );
}

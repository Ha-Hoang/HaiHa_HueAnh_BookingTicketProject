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
    whiteSpace: "nowrap",
    width: "180px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: "0px",
  },
  moreInfo: {
    color: "red",
    fontSize: "13px",
  },
}));
export default function Cinema(props) {
  const classes = useStyles();
  const { cine } = props;
  console.log("cine: ", cine);


  return (
    <a href="/" className={classes.navLink} style={{ textDecoration: "none" }}>
      <div className={classes.detail}>
        <div>
          <img src={bhd} className={classes.imageCinema} alt="bhd" />
        </div>
        <div className={classes.describe}>
          <p className={classes.title}>
            <span>{cine.tenCumRap}</span>
          </p>
          <p className={classes.address}>{cine.diaChi}</p>
          <p className={classes.moreInfo}>[chi tiết]</p>
        </div>
      </div>
    </a>
  );
}

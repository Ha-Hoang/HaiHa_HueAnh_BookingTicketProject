import React from "react";
import { Grid, Typography } from "@material-ui/core";
import bhdstar from "../../../../assets/images/bhd-star-vincom-le-van-viet.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: "915px",
    float: "none",
    margin: "auto",
    clear: "both",
  },
  row: {
    border: "1px solid #8080804f",
    borderRadius: "6px",
    backgroundColor: "#fff",
    height: "713px",
    "@media (max-width: 768px)": {
      height: "1300px",
    },
  },
  col2: {
    maxWidth: "74.666667%",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
  divider: {
    marginLeft: "15px",
    marginRight: "0px",
    width: "190px",
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  boxRoot: {
    width: "646px",
  },
  listItem: {
    opacity: "0.5",
    transition: "all 0.2s",
    "&:hover": {
      opacity: "1",
      cursor: "pointer",
    },
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  imgTheater: {
    marginRight: "10px",
  },
  address: {
    color: "grey",
    fontSize: "13px",
  },
  showDetail: {
    padding: "18px",
    height: "667px",
  },
  tabList: {
    // padding: "10px 0",
  },
  tab: {
    width: "100%",
    flexShrink: "1",
    padding: "0",
    fontSize: "16px",
    color: "black",
    textTransform: "capitalize",
    "&:focus": {
      outline: "none",
    },
  },
  table: {
    width: "250px",
  },
  tableCell: {
    border: "none",
    padding: "5px",
  },
  time: {
    padding: "10px",
  },
  textTime: {
    color: "#43a047",
  },
}));

export default function MovieTheaterDetail(props) {
  const { chiTietRap } = props;
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={1} className={classes.imgTheater}>
        <img src={bhdstar} alt="bhd" className={classes.logo} />
      </Grid>
      <Grid item lg={10}>
        <Typography variant="h6">{chiTietRap.tenCumRap}</Typography>
        <span className={classes.address}>
          {chiTietRap.diaChi}
        </span>
      </Grid>
    </Grid>
  );
}

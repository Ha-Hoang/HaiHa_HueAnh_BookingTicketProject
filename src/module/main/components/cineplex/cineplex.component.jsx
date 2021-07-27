import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LogoCineplex from "../logo-cineplex/logo-cineplex.component";
import { useSelector, useDispatch } from "react-redux";
import { getCinemaListAction } from "../../../../store/actions/cinema.action";

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

export default function Cineplex(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaListAction());
  }, []);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const renderLogoCineplex = () => {
    return cinemaList.map((item, index) => {
      return (
        <li className={classes.liLogo} key={index} onClick={() => props.handleChoiceCinema(item.maHeThongRap)}>
          <LogoCineplex item={item} />
        </li>
      );
    });
  };
  return <ul className={classes.ulLogo}>{renderLogoCineplex()}</ul>;
}

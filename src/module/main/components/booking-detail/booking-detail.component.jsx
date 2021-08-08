import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import BookingTotal from "../booking-total/booking-total.component";

const useStyles = makeStyles((theme) => ({
  btn: {
    width: "100%",
    backgroundColor: "grey",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function BookingDetail(props) {
  const classes = useStyles();
  return (
    <div style={{ boxShadow: "0 0px 20px rgba(0, 0, 0, 0.3)" }}>
      <BookingTotal />
      <Button className={classes.btn}>Đặt Vé</Button>
    </div>
  );
}

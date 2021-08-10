import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import BookingTotal from "../booking-total/booking-total.component";

const useStyles = makeStyles((theme) => ({
  btn: {
    width: "100%",
    backgroundColor: "grey",
    position: "absolute",
    bottom: "0",
    "&:focus": {
      outline: "none",
    },
  },
  bookingDetail: {
    boxShadow: "0 0px 20px rgba(0, 0, 0, 0.3)",
    height: "100%",
    position: "relative",
  },
}));

export default function BookingDetail(props) {
  const classes = useStyles();
  const { bookinglst } = props;
  return (
    <div className={classes.bookingDetail}>
      <BookingTotal bookinglst={bookinglst} />
      <Button className={classes.btn}>Đặt Vé</Button>
    </div>
  );
}

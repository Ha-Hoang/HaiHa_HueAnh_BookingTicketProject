import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import BookingTotal from "../booking-total/booking-total.component";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "green",
    margin: "0 10px",
    left: "95%",
    transform: "translateX(-95%)",
    color: "white",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "green",
    },
  },
  bookingDetail: {
    boxShadow: "0 0px 20px rgba(0, 0, 0, 0.3)",
    height: "100%",
  },
}));

export default function BookingDetail(props) {
  const classes = useStyles();
  const { bookinglst } = props;
  const { chairInfo } = props;

  return (
    <div className={classes.bookingDetail}>
      <BookingTotal bookinglst={bookinglst} chairInfo={chairInfo} />
      <Button
        className={classes.btn}
        onClick={() => props.handleBookingFunction()}
      >
        Đặt Vé
      </Button>
    </div>
  );
}

import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import BookingChair from "../../components/booking-chair/booking-chair.component";
import BookingDetail from "../../components/booking-detail/booking-detail.component";

const useStyles = makeStyles((theme) => ({
  mainBooking: {
    paddingTop: "63px",
    fontFamily: ['"Calibri"'],
  },
}));
export default function BookingTicket(props) {
  const classes = useStyles();
  return (
    <div className={classes.mainBooking}>
      <Grid container>
        <Grid item md={9} sm={12}>
          <BookingChair />
        </Grid>
        <Grid item md={3} sm={12}>
          <BookingDetail />
        </Grid>
      </Grid>
    </div>
  );
}

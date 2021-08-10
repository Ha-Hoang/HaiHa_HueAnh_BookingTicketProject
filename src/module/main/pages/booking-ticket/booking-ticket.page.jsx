import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookingTicketAction } from "../../../../store/actions/booking.action";
import BookingChair from "../../components/booking-chair/booking-chair.component";
import BookingDetail from "../../components/booking-detail/booking-detail.component";
import Loading from "../../components/loading.component";

const useStyles = makeStyles((theme) => ({
  mainBooking: {
    paddingTop: "63px",
    fontFamily: ['"Calibri"'],
  },
}));
export default function BookingTicket(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { schedulecode } = useParams();

  useEffect(() => {
    dispatch(getBookingTicketAction(schedulecode));
  }, []);
  const bookinglst = useSelector((state) => {
    return state.booking.bookingList;
  });

  useEffect(() => {
    document.title = "Booking";
  });

  const loading = useSelector((state) => {
    return state.common.loading;
  });
  if (loading) {
    return <Loading />;
  }

  return (
    <div className={classes.mainBooking}>
      <Grid container>
        <Grid item md={9} xs={12}>
          <BookingChair bookinglst={bookinglst} />
        </Grid>
        <Grid item md={3} xs={12}>
          <BookingDetail bookinglst={bookinglst} />
        </Grid>
      </Grid>
    </div>
  );
}

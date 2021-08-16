import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBookingTicketAction,
  getChairListAction,
  postBookingInfoAction,
} from "../../../../store/actions/booking.action";
import BookingChair from "../../components/booking-chair/booking-chair.component";
import BookingDetail from "../../components/booking-detail/booking-detail.component";
import Loading from "../../components/loading.component";
import { choiceChairAction } from "../../../../store/actions/booking.action";

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

  //get thongTinPhim
  useEffect(() => {
    dispatch(getBookingTicketAction(schedulecode));
  }, []);
  const bookinglst = useSelector((state) => {
    return state.booking.bookingList;
  });

  //get danhSachGhe
  useEffect(() => {
    dispatch(getChairListAction(schedulecode));
  }, []);
  const chairlst = useSelector((state) => {
    return state.booking.listChair;
  });

  //title
  useEffect(() => {
    document.title = "Booking";
  });

  //loading
  const loading = useSelector((state) => {
    return state.common.loading;
  });
  if (loading) {
    return <Loading />;
  }

  //click chọn ghế
  const handleChoiceChair = (chair) => {
    dispatch(choiceChairAction(chair));
  };

  //get chair dangChon
  const chairInfo = chairlst.filter((chair) => chair.dangChon);

  //click đặt vé
  const handleBookingFunction = () => {
    const ticketChoosing = chairlst.filter((chair) => chair.dangChon);
    dispatch(postBookingInfoAction(schedulecode, ticketChoosing));
  };

  return (
    <div className={classes.mainBooking}>
      <Grid container>
        <Grid item md={9} xs={12}>
          <BookingChair
            bookinglst={bookinglst}
            chairlst={chairlst}
            handleChoiceChair={handleChoiceChair}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <BookingDetail
            bookinglst={bookinglst}
            chairInfo={chairInfo}
            handleBookingFunction={handleBookingFunction}
          />
        </Grid>
      </Grid>
    </div>
  );
}

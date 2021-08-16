import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  textChair: {
    color: "#fa5238",
    fontWeight: "600",
    fontSize: "16px",
  },
  textPrice: {
    color: "#8bc541",
    fontWeight: "500",
    fontSize: "16px",
    textAlign: "right",
  },
  mainBookingTotal: {
    padding: "20px",
  },
  detail: {
    borderBottom: "1px solid #8080802e",
  },
  textp2: {
    marginBottom: "0px",
    fontSize: "16px",
  },
  textp3: {
    marginBottom: "0px",
    fontSize: "16px",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "20px",
  },
  total: {
    paddingTop: "12px",
  },
  bookingchair: {
    paddingRight: "5px",
    display: "inline-block",
  },
}));
export default function BookingTotal(props) {
  const classes = useStyles();
  const { bookinglst } = props;
  const { chairInfo } = props;

  const renderChairBooking = () => {
    return chairInfo.map((chairbooking, index) => {
      return (
        <span key={index} className={classes.bookingchair}>
          {chairbooking.tenGhe}
        </span>
      );
    });
  };

  const renderTotal = () => {
    return chairInfo
      .reduce((total, bookingChair, index) => {
        return (total += bookingChair.giaVe);
      }, 0)
      .toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
  };

  return (
    <div className={classes.mainBookingTotal}>
      <div className={classes.detail}>
        <p className={classes.title}>{bookinglst.tenPhim}</p>
        <p className={classes.textp2}>{bookinglst.tenCumRap}</p>
        <p className={classes.textp3}>
          <span>{bookinglst.ngayChieu}</span> -{" "}
          <span>{bookinglst.gioChieu}</span> -{" "}
          <span style={{ textTransform: "uppercase" }}>
            {bookinglst.tenRap}
          </span>
        </p>
      </div>
      <Grid container className={classes.total}>
        <Grid item md={6} xs={6} className={classes.textChair}>
          Ghế {renderChairBooking()}
        </Grid>

        <Grid item md={6} xs={6} className={classes.textPrice}>
          {renderTotal()}
        </Grid>
      </Grid>
    </div>
  );
}

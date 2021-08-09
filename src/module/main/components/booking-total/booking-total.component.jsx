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
}));
export default function BookingTotal(props) {
  const classes = useStyles();
  const { bookinglst } = props;

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
          Ghế <span></span>
        </Grid>
        <Grid item md={6} xs={6} className={classes.textPrice}>
          75.000đ
        </Grid>
      </Grid>
    </div>
  );
}

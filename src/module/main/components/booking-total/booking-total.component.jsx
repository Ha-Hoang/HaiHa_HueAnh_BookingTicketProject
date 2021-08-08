import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  textChair: {
    color: "#fa5238",
    fontWeight: "500",
  },
  textPrice: {
    color: "#8bc541",
    fontWeight: "500",
    paddingLeft: "220px",
  },
  mainBookingTotal: {
    padding: "15px",
  },
  detail: {
    borderBottom: "1px solid #8080802e",
  },
  textp2: {
    marginBottom: "0px",
    fontSize: "15px",
  },
  textp3: {
    marginBottom: "0px",
    fontSize: "15px",
  },
  title: {
    textTransform: "capitalize",
  },
}));
export default function BookingTotal(props) {
  const classes = useStyles();
  return (
    <div className={classes.mainBookingTotal}>
      <div className={classes.detail}>
        <p className={classes.title}>Câu chuyện đồ chơi 4 - Toy Story 4</p>
        <p className={classes.textp2}>Galaxy Quang Trung</p>
        <p className={classes.textp3}>
          <span>8/8</span> - <span>13:00</span> - <span>RẠP 5</span>
        </p>
      </div>
      <div>
        <span className={classes.textChair}>
          Ghế <span></span>
        </span>
        <span className={classes.textPrice}>75.000đ</span>
      </div>
    </div>
  );
}

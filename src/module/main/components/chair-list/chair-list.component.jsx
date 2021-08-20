import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  textScreen: {
    textAlign: "center",
    fontWeight: "600",
    color: "black",
  },
  mainChairList: {
    maxWidth: "700px",
    margin: "auto",
  },
  divBtnChair: {
    margin: "0 10px",
    display: "inline",
  },
  textBtnChair: {
    paddingLeft: "5px",
    color: "#fff",
  },
  btnNote: {
    padding: "20px 0",
    backgroundColor: "#5f5e5ee0",
    border: "1px solid transparent",
    borderRadius: "13px",
  },
  btnChair: {
    margin: "5px",
    "&:focus": {
      outline: "none",
    },
  },
  btnChairActive: {
    backgroundColor: "green",
    margin: "5px",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "green",
    },
  },
  effectScreen: {
    borderBottom: "50px solid #d6c929",
    borderLeft: "25px solid transparent",
    borderRight: "25px solid transparent",
    height: "0",
    width: "100%",
    opacity: "0.5",
    filter: "drop-shadow(0px 128px 63px #d6c929)",
    "&::-webkit-filter": "drop-shadow(0px 128px 63px rgba(8,8,8,0.38))",
    "&::-moz-filter": "drop-shadow(0px 128px 63px rgba(8,8,8,0.38))",
  },
  classGuestChair: {
    backgroundColor: "#88af2a",
    margin: "5px",
    "&:focus": {
      outline: "none",
    },
  },
  btnDaDat: {
    "&:disabled": {
      backgroundColor: "grey",
      color: "rgba(0, 0, 0, 0.26)",
      boxShadow: "none",
    },

    margin: "5px",
  },
}));

export default function ChairList(props) {
  const classes = useStyle();
  const { chairlst } = props;

  return (
    <div className={classes.mainChairList}>
      <div className={classes.effectScreen}>
        <h5 className={classes.textScreen}>Màn hình</h5>
      </div>

      <div style={{ padding: "17px" }}>
        {chairlst.map((chair, index) => {
          return (
            <Button
              onClick={() => props.handleChoiceChair(chair)}
              disabled={chair.daDat}
              color={chair.loaiGhe === "Vip" ? "secondary" : "default"}
              className={
                chair.dangChon
                  ? classes.btnChairActive
                  : classes.btnChair && chair.daDat
                  ? classes.btnDaDat
                  : classes.btnChair
              }
              variant="contained"
              key={index}
            >
              {chair.tenGhe}
            </Button>
          );
        })}
      </div>
      <div className={classes.btnNote}>
        <div className={classes.divBtnChair}>
          <Button
            disabled
            variant="contained"
            style={{ textTransform: "none" }}
          >
            Ghế đã đặt
          </Button>
        </div>

        <div style={{ margin: "0 10px", display: "inline" }}>
          <Button variant="contained" style={{ padding: "15px" }} />
          <span className={classes.textBtnChair}>Ghế trống</span>
        </div>

        <div style={{ margin: "0 10px", display: "inline" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "green", padding: "15px" }}
          />
          <span className={classes.textBtnChair}>Ghế đang chọn</span>
        </div>

        <div style={{ margin: "0 10px", display: "inline" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#fa5238", padding: "15px" }}
          />
          <span className={classes.textBtnChair}>Ghế VIP</span>
        </div>
      </div>
    </div>
  );
}

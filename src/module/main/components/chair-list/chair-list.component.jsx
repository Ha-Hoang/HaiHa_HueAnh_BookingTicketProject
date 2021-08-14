import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyle = makeStyles((theme) => ({
  textScreen: {
    textAlign: "center",
    fontWeight: "600",
  },
  mainChairList: {
    paddingTop: "12px",
    maxWidth: "700px",
    margin: "auto",
  },
  divBtnChair: {
    margin: "0 10px",
    display: "inline",
  },
  textBtnChair: {
    paddingLeft: "5px",
    color: "#5a5a5a",
  },
  btnNote: {
    padding: "20px 0",
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
  // userChon: {
  //   backgroundColor: "purple",
  //   margin: "5px",
  //   "&:focus": {
  //     outline: "none",
  //   },
  // },
}));

export default function ChairList(props) {
  const classes = useStyle();
  const { chairlst } = props;
  // const taiKhoan = localStorage.getItem("taiKhoan");
  // JSON.stringify(taiKhoan);
  // console.log(taiKhoan);

  return (
    <div className={classes.mainChairList}>
      <h5 className={classes.textScreen}>Màn hình</h5>
      <div style={{ padding: "30px" }}>
        {chairlst.map((chair, index) => {
          return (
            <Button
              onClick={() => props.handleChoiceChair(chair)}
              disabled={chair.daDat}
              color={chair.loaiGhe === "Vip" ? "secondary" : "default"}
              className={
                chair.dangChon ? classes.btnChairActive : classes.btnChair
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

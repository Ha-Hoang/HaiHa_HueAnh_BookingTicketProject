import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getListMovieAPI,
  getMovieDetailAPI,
  getScheduleInfoAPI,
} from "../../../../api/movie.api";
import { date } from "yup";
import Format from "date-format";
import { getListBookingAPI } from "../../../../api/booking.api";
// import {
//   getCinemaGroupAPI,
//   getCinemaListAPI,
// } from "../../../../../api/cinema.api";
// import { useFormik } from "formik";
// import { useHistory, useParams } from "react-router-dom";
// import moment from "moment";
// import { showTimeAction } from "../../../../../store/actions/filmAdmin.action";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textTitle: {
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#fa5238",
    "&:hover": {
      backgroundColor: "#fa5238",
    },
  },
  btnBuyTicket: {
    backgroundColor: "grey",
    width: "100%",
    margin: "10px",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
}));

export default function HomeTool(props) {
  const classes = useStyles();

  const [valueMovie, setValueMovie] = useState("");
  const [valueCinema, setValueCinema] = useState("");
  const [valueDate, setValueDate] = useState("");
  const [valueTime, setValueTime] = useState("");

  const [state, setState] = useState({
    movie: [],
    cinemaGroup: [],
    date: [],
    time: {},
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      let res = await getListMovieAPI();
      setState({
        ...state,
        movie: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleMovieChange = async (e) => {
    setValueMovie(e.target.value);
    try {
      let res = await getMovieDetailAPI(e.target.value);

      setState({
        ...state,
        cinemaGroup: res.data.lichChieu,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCinemaChange = async (e) => {
    setValueCinema(e.target.value);
    let lichChieu = state.cinemaGroup.filter(
      (item) => item.thongTinRap.maCumRap === e.target.value
    );

    setState({
      ...state,
      date: lichChieu,
    });
  };

  const handleDateChange = async (e) => {
    setValueDate(e.target.value);
    console.log(e.target.value);
    try {
      let res = await getListBookingAPI(e.target.value);

      setState({
        ...state,
        time: res.data.thongTinPhim,
      });
      
    } catch (err) {
      console.log(err);
    }
  };

  const handleTimeChange = (e) => {
    setValueTime(e.target.value);
  };

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "black" }}
            >
              Phim
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={valueMovie}
              onChange={handleMovieChange}
            >
              {state.movie?.map((movie, index) => {
                return (
                  <MenuItem value={movie.maPhim} key={index}>
                    {movie.tenPhim}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "black" }}
            >
              Rạp
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={valueCinema}
              onChange={handleCinemaChange}
            >
              {state.cinemaGroup?.map((cine, index) => {
                return (
                  <MenuItem value={cine.thongTinRap.maCumRap} key={index}>
                    {cine.thongTinRap.tenCumRap}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "black" }}
            >
              Ngày/giờ xem
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={valueDate}
              onChange={handleDateChange}
            >
              {state.date?.map((day, index) => {
                return (
                  <MenuItem value={day.maLichChieu} key={index}>
                    {Format("dd/MM/yyyy hh:mm", new Date(day.ngayChieuGioChieu))}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button className={classes.btnBuyTicket} disabled>Mua vé</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

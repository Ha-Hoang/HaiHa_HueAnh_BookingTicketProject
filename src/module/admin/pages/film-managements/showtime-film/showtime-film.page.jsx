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
  getCinemaGroupAction,
  getCinemaListAction,
} from "../../../../../store/actions/cinema.action";
import { SettingsInputAntenna } from "@material-ui/icons";
import {
  getCinemaGroupAPI,
  getCinemaListAPI,
} from "../../../../../api/cinema.api";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import moment from "moment";
import { showTimeAction } from "../../../../../store/actions/filmAdmin.action";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textTitle: {
    textAlign: "center",
  },
  form: {
    maxWidth: "700px",
    margin: "auto",
  },
  btn: {
    backgroundColor: "#fa5238",
    margin: "50px 283px",
    "&:hover": {
      backgroundColor: "#fa5238",
    },
  },
}));

export default function Showtime(props) {
  const classes = useStyles();
  const { schedulecode } = useParams();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      maPhim: schedulecode,
      ngayChieuGioChieu: "",
      maRap: 0,
      giaVe: 0,
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(showTimeAction(values))
    },
  });

  const [state, setState] = useState({
    cinema: [],
    cinemaGroup: [],
  });

  const [valueCinema, setValueCinema] = useState("");
  const [valueCinemaGroup, setValueCinemaGroup] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      let res = await getCinemaListAPI();
      setState({
        ...state,
        cinema: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleCinemaChange = async (e) => {
    setValueCinema(e.target.value);
    try {
      let res = await getCinemaGroupAPI(e.target.value);
      setState({
        ...state,
        cinemaGroup: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCinemaGroupChange = (e) => {
    setValueCinemaGroup(e.target.value);
    formik.setFieldValue("maRap", e.target.value);
    console.log(e.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date("2018-01-01T00:00:00.000Z")
  );

  const handleDateChange = (value) => {
    setSelectedDate(value);
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log(moment(value).format("DD/MM/YYYY hh:mm:ss"));
  };

  const handleTicketChange = (e) => {
    formik.setFieldValue("giaVe", Number(e.target.value));
    console.log(Number(e.target.value));
  };

  return (
    <Container>
      <h5 className={classes.textTitle}>Tạo Lịch Chiếu</h5>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">
                Hệ thống rạp
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueCinema}
                onChange={handleCinemaChange}
              >
                {state.cinema?.map((cine, index) => (
                  <MenuItem key={index} value={cine.maHeThongRap}>
                    {cine.tenHeThongRap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Cụm rạp</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueCinemaGroup}
                onChange={handleCinemaGroupChange}
              >
                {state.cinemaGroup?.map((group, index) => (
                  <MenuItem key={index} value={group.maCumRap}>
                    {group.tenCumRap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={false}
              label="Ngày chiếu giờ chiếu"
              value={selectedDate}
              onChange={handleDateChange}
              // onError={console.log}
              disablePast
              format="dd/MM/yyyy hh:mm:ss"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-number"
              onChange={handleTicketChange}
              label="Giá vé"
              type="number"
              InputProps={{
                inputProps: {
                  max: 150000,
                  min: 75000,
                },
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-number"
              label="Thời lượng phim"
              value="120"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mã Nhóm"
              name="maNhom"
              value="GP01"
              // onChange={handleGroupCodeChange}
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" className={classes.btn}>
          Tạo lịch chiếu
        </Button>
      </form>
    </Container>
  );
}

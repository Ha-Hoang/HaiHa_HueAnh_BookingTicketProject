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
import { useDispatch } from "react-redux";
import {
  getCinemaGroupAPI,
  getCinemaListAPI,
} from "../../../../../api/cinema.api";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router-dom";
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
  btn: {
    backgroundColor: "#fa5238",
    "&:hover": {
      backgroundColor: "#fa5238",
    },
  },
}));

export default function Showtime(props) {
  const classes = useStyles();
  const { schedulecode } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      maPhim: schedulecode,
      ngayChieuGioChieu: "",
      maRap: 0,
      giaVe: 0,
    },
    onSubmit: async (values) => {
      console.log("values", values);
      await dispatch(showTimeAction(values));
      history.push("/admin/film-management");
    },
  });

  const [state, setState] = useState({
    cinema: [],
    cinemaGroup: [],
    cinemaGroupCode: [],
  });

  const [valueCinema, setValueCinema] = useState("");
  const [valueCinemaGroup, setValueCinemaGroup] = useState("");
  const [valueGroupCode, setValueGroupCode] = useState("");
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

  const handleCinemaGroupChange = async (e) => {
    setValueCinemaGroup(e.target.value);

    const groupcode = state.cinemaGroup.find(
      (cine) => cine.maCumRap === e.target.value
    );

    setState({
      ...state,
      cinemaGroupCode: groupcode?.danhSachRap,
    });
  };

  const handleCinemaGroupCode = (e) => {
    setValueGroupCode(e.target.value);
    formik.setFieldValue("maRap", e.target.value);
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
  };

  const handleTicketChange = (e) => {
    formik.setFieldValue("giaVe", Number(e.target.value));
  };

  return (
    <Container>
      <h5 className={classes.textTitle}>T???o L???ch Chi???u</h5>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">
                H??? th???ng r???p
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
              <InputLabel id="demo-simple-select-label">C???m r???p</InputLabel>
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
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">M?? R???p</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueGroupCode}
                onChange={handleCinemaGroupCode}
              >
                {state.cinemaGroupCode?.map((groupcode, index) => (
                  <MenuItem key={index} value={groupcode.maRap}>
                    {groupcode.tenRap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={false}
              label="Ng??y chi???u gi??? chi???u"
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
              label="Gi?? v??"
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
              label="Th???i l?????ng phim"
              value="120"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="M?? Nh??m"
              name="maNhom"
              value="GP01"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" className={classes.btn}>
              T???o l???ch chi???u
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

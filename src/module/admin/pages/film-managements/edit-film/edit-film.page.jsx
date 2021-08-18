import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EditIcon from "@material-ui/icons/Edit";
import { useFormik, Form } from "formik";
import Format from "date-format";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updateFilmInfoAction } from "../../../../../store/actions/filmAdmin.action";
import { getMovieDetailAction } from "../../../../../store/actions/movie.action";
import { useParams } from "react-router-dom";
import Loading from "../../../../main/components/loading.component";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#fa5238",
    "&:hover": {
      backgroundColor: "#fa5238",
    },
  },
}));

export default function EditFilm() {
  const classes = useStyles();
  const dispatch = useDispatch();

  //Lấy movieDetail về component
  const { filmcode } = useParams();
  useEffect(() => {
    dispatch(getMovieDetailAction(filmcode));
  }, []);
  const filmInfo = useSelector((state) => state.movie.movieDetail);
  console.log("Store", filmInfo);

  //formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: filmInfo?.maPhim,
      tenPhim: filmInfo?.tenPhim,
      biDanh: filmInfo?.biDanh,
      trailer: filmInfo?.trailer,
      hinhAnh: null,
      moTa: filmInfo?.moTa,
      ngayKhoiChieu: filmInfo?.ngayKhoiChieu,     
      maNhom: "GP01",
      danhGia: filmInfo?.danhGia,
    },
    
    onSubmit: (values) => {
      console.log("submit", values);
      //tạo đối tượng formData, đưa giá trị formik qua form data
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("file", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }

      console.log("formdata", formData.get("ngayKhoiChieu"));

      //gọi api
      dispatch(updateFilmInfoAction(formData));
    },
  });

  console.log(formik.values.ngayKhoiChieu);
  //ngayKhoiChieu
  const handleDateChange = (e) => {
    let ngayKhoiChieu = moment(e.target.value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    console.log("ngayKhoiChieu", ngayKhoiChieu);
  };

  //hinhAnh
  const [imgSrc, setImgSrc] = useState("");

  const handleChangeFile = async (e) => {
    //lấy file từ e
    let file = e.target.files[0];
    console.log(file);

    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/jpg"
    ) {
      //lưu formik
      await formik.setFieldValue("hinhAnh", file);
      //tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      //onload bắt url
      reader.onload = (e) => {
        setImgSrc(e.target.result); //base64
      };
    }
  };

  //loading
  const loading = useSelector((state) => state.common.loading);
  if (loading) {
    return <Loading />;
  }

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EditIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cập Nhật Phim
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mã Phim"
                disabled
                name="maPhim"
                onChange={formik.handleChange}
                value={formik.values.maPhim}
                type="number"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Ngày Khởi Chiếu"
                name="ngayKhoiChieu"
                onChange={handleDateChange}
                value={Format(
                  "yyyy-MM-dd",
                  new Date(formik.values.ngayKhoiChieu)
                )}
                variant="outlined"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Tên Phim"
                name="tenPhim"
                onChange={formik.handleChange}
                value={formik.values.tenPhim}
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Đánh Giá"
                name="danhGia"
                onChange={formik.handleChange}
                value={formik.values.danhGia}
                type="number"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Bí danh"
                name="biDanh"
                onChange={formik.handleChange}
                value={formik.values.biDanh}
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Trailer"
                name="trailer"
                onChange={formik.handleChange}
                value={formik.values.trailer}
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mã Nhóm"
                name="maNhom"
                value="GP01"
                onChange={formik.handleChange}
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mô tả"
                name="moTa"
                onChange={formik.handleChange}
                value={formik.values.moTa}
                multiline
                rows={10}
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h5>Hình ảnh</h5>
              <input
                type="file"
                name="hinhAnh"
                onChange={handleChangeFile}
                accept="image/png, image/jpeg, image/gif, image/jpg"
              />
              <br />
              <img
                src={imgSrc === "" ? filmInfo.hinhAnh : imgSrc}
                style={{ width: 80, height: 80 }}
                alt="imgsrc"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cập nhật phim
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

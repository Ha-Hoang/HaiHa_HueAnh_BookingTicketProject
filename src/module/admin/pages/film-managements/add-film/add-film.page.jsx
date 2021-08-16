import React, { useState } from "react";
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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useFormik, Form } from "formik";
import Format from "date-format";
import moment from "moment";
import { useDispatch } from "react-redux";
import { postFilmInfoAction } from "../../../../../store/actions/filmAdmin.action";

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

export default function AddFilm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      maPhim: 0,
      tenPhim: "", 
      ngayKhoiChieu: "",
      trailer: "",
      danhGia: 0,
      hinhAnh: "",
      moTa: "",
    },
    onSubmit: (values) => {
      console.log(values);
      //tạo đối tượng formData, đưa giá trị formik qua form data
      let formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("file", values.hinhAnh, values.hinhAnh.name);
        }
      }

      console.log("formdata", formData.get("ngayKhoiChieu"));

      //gọi api
      dispatch(postFilmInfoAction(formData));
    },
  });

  const handleDateChange = (e) => {
    let ngayKhoiChieu = moment(e.target.value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    console.log(ngayKhoiChieu);
  };

  const handleChangeFile = (e) => {
    //lấy file từ e
    let file = e.target.files[0];
    // console.log(file);
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      //tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file); //trả ra url
      //onload bắt url
      reader.onload = (e) => {
        setImgSrc(e.target.result); //base64
      };
      formik.setFieldValue("hinhAnh", file);
    }
  };

  const [imgSrc, setImgSrc] = useState("");

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Thêm phim
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
                name="maPhim"
                onChange={formik.handleChange}
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
                defaultValue="2017-05-24"
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
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Trailer"
                name="trailer"
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
                multiline
                rows={10}
                variant="outlined"
                required
                fullWidth
                id="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h5>Hình ảnh</h5>
              <input
                type="file"
                onChange={handleChangeFile}
                accept="image/png, image/jpeg, image/gif, image/png"
              />
              <br />
              <img
                src={imgSrc}
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
            Thêm phim
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

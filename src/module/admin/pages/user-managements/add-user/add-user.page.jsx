import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import InputLabel from "@material-ui/core/InputLabel";

import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  formGroup: {
    marginRight: "20px",
  },
  userInput: {
    width: "100%",
    fontSize: "20px",
    padding: "10px",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
  },
  inputLabel: {
    padding: "10px 0",
    fontSize: "20px",
    color: "black"
  },
  btnSubmit: {
    padding: "15px 50px",
    fontSize: "20px",
  },
  errorMessage: {
    color: "red",
    fontSize: "20px",
    fontStyle: "italic",
  },
  required: {
    color: "red",
  },
});
export default function AddUser() {
  const classes = useStyles();
  const initialValues = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  };
  const validationSchema = yup.object().shape({
    taiKhoan: yup.string().required("Không được để trống"),
    matKhau: yup.string().required("Không được để trống"),
    hoTen: yup.string().required("Không được để trống"),
    email: yup.string().required("Không được để trống").email("email sai"),
    soDT: yup.number().required("Không được để trống"),
  });
  const handleSubmit = (value) => {
    console.log("value", value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <Form className="container">
            <Typography variant="h4" style={{textAlign:"center", marginBottom:"20px"}}>Thêm người dùng</Typography>
            <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <div className={classes.formGroup}>
                  <InputLabel className={classes.inputLabel}>
                    Tài Khoản <span className={classes.required}>(*)</span>
                  </InputLabel>
                  <Field
                    type="text"
                    name="taiKhoan"
                    className={classes.userInput}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name="taiKhoan">
                    {(mess) => (
                      <div className={classes.errorMessage}>{mess}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={classes.formGroup}>
                  <InputLabel className={classes.inputLabel}>
                    Mật khẩu <span className={classes.required}>(*)</span>
                  </InputLabel>
                  <Field
                    type="password"
                    name="matKhau"
                    className={classes.userInput}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name="matKhau">
                    {(mess) => (
                      <div className={classes.errorMessage}>{mess}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={classes.formGroup}>
                  <InputLabel className={classes.inputLabel}>
                    Họ tên <span className={classes.required}>(*)</span>
                  </InputLabel>
                  <Field
                    type="text"
                    name="hoTen"
                    className={classes.userInput}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name="hoTen">
                    {(mess) => (
                      <div className={classes.errorMessage}>{mess}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={classes.formGroup}>
                  <InputLabel className={classes.inputLabel}>
                    Mã nhóm <span className={classes.required}>(*)</span>
                  </InputLabel>
                  <Field
                    component="select"
                    className={classes.userInput}
                    name="maNhom"
                    onChange={formik.handleChange}
                  >
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                    <option value="GP04">GP04</option>
                    <option value="GP05">GP05</option>
                    <option value="GP06">GP06</option>
                    <option value="GP07">GP07</option>
                    <option value="GP08">GP08</option>
                    <option value="GP09">GP09</option>
                    <option value="GP010">GP10</option>
                  </Field>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <div className={classes.formGroup}>
                  <InputLabel className={classes.inputLabel}>
                    Email <span className={classes.required}>(*)</span>
                  </InputLabel>
                  <Field
                    type="text"
                    name="email"
                    className={classes.userInput}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name="email">
                    {(mess) => (
                      <div className={classes.errorMessage}>{mess}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={classes.formGroup}>
                  <InputLabel className={classes.inputLabel}>
                    Số diện thoại <span className={classes.required}>(*)</span>
                  </InputLabel>
                  <Field
                    type="number"
                    name="soDT"
                    className={classes.userInput}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name="soDT">
                    {(mess) => (
                      <div className={classes.errorMessage}>{mess}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={classes.formGroup}>
                  <InputLabel className={classes.inputLabel}>
                    Chức vụ <span className={classes.required}>(*)</span>
                  </InputLabel>
                  <Field
                    component="select"
                    name="maLoaiNguoiDung"
                    onChange={formik.handleChange}
                    className={classes.userInput}
                  >
                    <option value="KhachHang">Khách hàng</option>
                    <option value="QuanTri">Quản trị</option>
                  </Field>
                </div>
              </Grid>
            </Grid>
            <div className={classes.btn}>
              <Button
                className={classes.btnSubmit}
                variant="contained"
                onClick={formik.handleSubmit}
              >
                Thêm
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

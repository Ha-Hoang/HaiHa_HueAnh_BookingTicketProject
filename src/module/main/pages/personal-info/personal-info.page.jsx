import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button, Modal } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { style } from "./personal-info.style";
import { connect } from "react-redux";
import Loading from "../../components/loading.component";

import { getPersonalInfoAction,updateInfoAction} from "../../../../store/actions/personal-info.action";
import BookingHistoryList from "../../components/booking-history-list/booking-history-list-component";
import { Container, Grid, Typography, withStyles } from "@material-ui/core";

const validateUpdateUser = yup.object().shape({
  taiKhoan: yup.string().required("Nhap tai Khoan"),
  matKhau: yup.string().required("Nhap mat khau"),
  hoTen: yup.string().required("Nhap ho ten"),
  email: yup.string().required("Nhap email").email("email sai"),
  soDT: yup.number().typeError("Nhap so dien thoai 0-9").required("Nhap SDT"),
});
class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    let username = JSON.parse(localStorage.getItem("taiKhoan"));
    this.state = {
      user: {
        taiKhoan: username,
      },
      showModal: {
        show: false,
      },
    };
  }
  handleShow = () => {
    this.setState({
      showModal: {
        show: true,
      },
    });
  };
  handleClose = () => {
    this.setState({
      showModal: {
        show: false,
      },
    });
  };
  handleSubmit = (value) => {
    this.props.dispatch(updateInfoAction(value));
  };

  render() {
    const { personal,loading } = this.props;
    const { classes } = this.props;
    const maLoaiNguoiDung = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
    if (loading) {
      return <Loading/>;
    }
    return (
      <div className="">
        <Container maxWidth="lg">
          <section className={classes.personalInfo}>
            <Typography className={classes.info_label}>
              Thông tin cá nhân
            </Typography>
            <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography className={classes.info_}>
                  Email: {personal.email}
                </Typography>
                <Typography>Họ tên: {personal.hoTen} </Typography>
                <Typography>Số điện thoại: {personal.soDT}</Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography>Tài khoản: {personal.taiKhoan}</Typography>
                <Typography>Mật khẩu: {personal.matKhau} </Typography>
              </Grid>
            </Grid>
          </section>
          <section className="btn-updateUser">
            <Button
              onClick={() => {
                this.handleShow();
              }}
            >
              Cập nhật
            </Button>
            <Modal show={this.state.showModal.show}>
              <ModalHeader>Cập nhật tài khoản</ModalHeader>
              <Formik
                initialValues={{
                                  taiKhoan: personal.taiKhoan,
                    matKhau: personal.matKhau,
                    email: personal.email,
                    soDT: personal.soDT,
                    maNhom: personal.maNhom,
                    maLoaiNguoiDung: maLoaiNguoiDung,
                    hoTen: personal.hoTen,
                }}
                validationSchema={validateUpdateUser}
                onSubmit={this.handleSubmit}
                render={(props) => (
                  <Form>
                    <div>
                      <label htmlFor="" className={classes.lbUpdate}>
                        Tài khoản
                      </label>

                      <Field
                        id="standard-basic"
                        className={classes.sizeInput}
                        color="secondary"
                        name="taiKhoan"
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="taiKhoan">
                        {(mess) => (
                          <div className="" style={{ color: "red" }}>
                            {mess}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label htmlFor="" className={classes.lbUpdate}>
                        Mật khẩu
                      </label>

                      <Field
                        id="standard-basic"
                        label="Mật khẩu"
                        onChange={props.handleChange}
                        className={classes.sizeInput}
                        color="secondary"
                        name="matKhau"
                      />
                      <ErrorMessage name="matKhau">
                        {(mess) => (
                          <div className="" style={{ color: "red" }}>
                            {mess}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label htmlFor="" className={classes.lbUpdate}>
                        Email
                      </label>
                      <Field
                        id="standard-basic"
                        onChange={props.handleChange}
                        className={classes.sizeInput}
                        color="secondary"
                        name="email"
                      />
                      <ErrorMessage name="email">
                        {(mess) => (
                          <div className="" style={{ color: "red" }}>
                            {mess}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label htmlFor="" className={classes.lbUpdate}>
                        Số điện thoại
                      </label>

                      <Field
                        id="standard-basic"
                        type="number"
                        onChange={props.handleChange}
                        className={classes.sizeInput}
                        color="secondary"
                        name="soDT"
                      />
                      <ErrorMessage name="soDT">
                        {(mess) => (
                          <div className="" style={{ color: "red" }}>
                            {mess}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>

                    <div>
                      <label htmlFor="" className={classes.lbUpdate}>
                        Họ tên
                      </label>

                      <Field
                        id="standard-basic"
                        onChange={props.handleChange}
                        className={classes.sizeInput}
                        color="secondary"
                        name="hoTen"
                      />
                      <ErrorMessage name="hoTen">
                        {(mess) => (
                          <div className="" style={{ color: "red" }}>
                            {mess}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <Button onClick={props.handleSubmit}>Lưu</Button>
                  </Form>
                )}
              />
              <div>
                <Button
                  onClick={() => {
                    this.handleClose();
                  }}
                >
                  Thoát
                </Button>
              </div>
            </Modal>
          </section>
          <section className="booking-history" style={{ marginTop: "20px", marginBottom:"80px" }}>
            <Typography className={classes.info_label}>
              Lịch sử đặt vé
            </Typography>
            <BookingHistoryList />
          </section>
        </Container>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getPersonalInfoAction(this.state.user));
  }
}
const mapStateToProps = (state) => {
  return {
    personal: state.personal.personalInfo,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(withStyles(style)(PersonalInfo));

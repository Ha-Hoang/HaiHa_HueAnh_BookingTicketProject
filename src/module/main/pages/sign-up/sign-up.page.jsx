import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./sign-up.styles.scss";
import { signUpAction } from "../../../../store/actions/auth.action";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
const signUpUser = yup.object().shape({
  taiKhoan : yup.string().required("Nhap tai Khoan"),
  matKhau : yup.string().required("Nhap mat khau"),
  hoTen : yup.string().required("Nhap ho ten"),
  email : yup.string().required("Nhap email").email("email sai"),
  soDT : yup.number().typeError("Nhap so dien thoai 0-9").required("Nhap SDT"),
  maNhom: yup.string().required("Nhap ma nhom"),

})
class SignUp extends Component {
  handleSubmit = (value) => {
    this.props.dispatch(signUpAction(value, this.props.history));
  };
  render() {
    return (
      <section className="registration-form">
        <div className="sign-up">
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              soDT: "",
              hoTen: "",
              maNhom: "",
              maLoaiNguoiDung: "KhachHang"
            }}
            validationSchema={signUpUser}
            onSubmit={this.handleSubmit}
            render={(props) => (
              <Form>
                <div className="registration">
                  <h1 className="registration__name">Đăng kí</h1>
                </div>
                <div className="form-group">
                  <Field
                    type="text"
                    name="taiKhoan"
                    className="form-control item"
                    id="username"
                    placeholder="Tài khoản"
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="taiKhoan">
                    {(mess) => <div className="" style={{color: "red"}}>{mess}</div> }
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    type="password"
                    className="form-control item"
                    id="password"
                    placeholder="Mật khẩu"
                    name="matKhau"
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="matKhau">
                    {(mess) => <div className="" style={{color: "red"}}>{mess}</div> }
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    type="text"
                    className="form-control item"
                    id="email"
                    placeholder="Email"
                    name="email"
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="email">
                    {(mess) => <div className="" style={{color: "red"}}>{mess}</div> }
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    type="text"
                    className="form-control item"
                    id="phone-number"
                    placeholder="Số điện thoại"
                    name="soDT"
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="soDT">
                    {(mess) => <div className="" style={{color: "red"}}>{mess}</div> }
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    type="text"
                    className="form-control item"
                    id=""
                    placeholder="Họ tên"
                    name="hoTen"
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="hoTen">
                    {(mess) => <div className="" style={{color: "red"}}>{mess}</div> }
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                   component="select"
                    className="form-control"
                    name="maNhom"
                    onChange={props.handleChange}
                  >
                    <option selected disabled>
                      Mã nhóm
                    </option>
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
                  <ErrorMessage name="maNhom">
                    {(mess) => <div className="" style={{color: "red"}}>{mess}</div> }
                  </ErrorMessage>
                </div>
                <div className="form-group ">
                  <button
                  onClick={props.handleSubmit}
                    type="button"
                    className="btn btn-block create-account mx-auto mb-3"
                  >
                    Đăng kí
                  </button>
                </div>
                <div className="bottom text-center mb-5">
                  <p className="sm-text mx-auto mb-3">
                    Bạn đã có tài khoản?
                    <NavLink to = "/signin" className="btn btn-bottom ml-2">Đăng nhập</NavLink>
                  </p>
                </div>
              </Form>
            )}
          />
          
        </div>
      </section>
    );
  }
}
export default connect()(withRouter(SignUp));

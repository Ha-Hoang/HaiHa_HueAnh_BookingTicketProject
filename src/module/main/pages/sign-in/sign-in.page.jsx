import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import bgSignIn from "../../../../assets/images/bg-sign-in.jpg";
import signInLogo from "../../../../assets/images/sign-in-logo.png";
import { signInAction } from "../../../../store/actions/auth.action";
import "./sign-in.styles.scss";

import { NavLink, withRouter } from "react-router-dom";
import Loading from "../../components/loading.component";

const signIpUser = yup.object().shape({
  taiKhoan: yup.string().required("Nhap tai Khoan"),
  matKhau: yup.string().required("Nhap mat khau"),
});
class SignIn extends Component {
  
  handleSubmit = (value) => {
    console.log("submit");
    const {dispatch,history} = this.props;
    dispatch(signInAction(value, history));
  };
  render() {
    const { loading } = this.props;
    if (loading) {
      return <Loading/>;
    }
    return (
      <section
        className="sign-in px-4 py-5 mx-auto modal"
        style={{ backgroundImage: `url(${bgSignIn})` }}
      >
        <div className="sign-in__container">
          <NavLink
            to="/"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            &times;
          </NavLink>
          <div className="sign-in__content">
            <img
              src={signInLogo}
              alt="sign in logo"
              className="sign-in__loogo px-3 mb-3"
            />
          </div>
          <Formik
            initialValues={{ taiKhoan: "", matKhau: "" }}
            validationSchema={signIpUser}
            onSubmit={this.handleSubmit}
            >{(props) => (
              <Form className="">
                <div className="form-group">
                  <Field
                    type="text"
                    name="taiKhoan"
                    placeholder="Tài khoản"
                    className="sign-in__input"
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
                <div className="form-group">
                  <Field
                    type="password"
                    name="matKhau"
                    placeholder="Mật khẩu"
                    className="sign-in__input"
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="matKhau">
                    {(mess) => (
                      <div className="" style={{ color: "red" }}>
                        {mess}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="row justify-content-center my-3 px-3">
                  <button
                    onClick={props.handleSubmit}
                    className="btn-block btn-color"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className="bottom text-center mb-5">
                  <p className="sm-text mx-auto mb-3">
                    Bạn chưa có tài khoản?
                    <NavLink to="/signup" className="btn btn-white ml-2">Đăng ký</NavLink>
                  </p>
                </div>
              </Form>
            )}
            </Formik>
        </div>
      </section>
    );
  }
}
export default connect()(withRouter(SignIn));

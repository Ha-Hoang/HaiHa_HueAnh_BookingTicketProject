import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import bgSignIn from "../../../../assets/images/bg-sign-in.jpg";
import signInLogo from "../../../../assets/images/sign-in-logo.png";
import { signInAction } from "../../../../store/actions/auth.action";
import "./sign-in.styles.scss";

const signIpUser = yup.object().shape({
  taiKhoan : yup.string().required("Nhap tai Khoan"),
  matKhau : yup.string().required("Nhap mat khau"),

})
class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (value) => {
    console.log("submit");
    this.props.dispatch(signInAction(value));
  };
  render() {
    
    return (
      <section
        className="sign-in px-4 py-5 mx-auto modal"
        style={{ backgroundImage: `url(${bgSignIn})` }}
      >
        <div className="sign-in__container">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            &times;
          </button>
          <div className="sign-in__content">
            <img
              src={signInLogo}
              alt="sign in logo"
              className="sign-in__loogo px-3 mb-3"
            />
          </div>
          <Formik
            initialValues={{taiKhoan: "",
              matKhau: "",}}
            validationSchema={signIpUser}
            onSubmit={this.handleSubmit}
            render={(props) => (
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
                    {(mess) => <div className="" style={{color: "red"}}>{mess}</div> }
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
                    {(mess) => <div className="" style={{color: "red"}}>{mess}</div> }
                  </ErrorMessage>
                </div>
                <div className="row justify-content-center my-3 px-3">
                  <button
                    onClick={props.handleSubmit}
                    className="btn-block btn-color"
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className="bottom text-center mb-5">
                  <p className="sm-text mx-auto mb-3">
                    Bạn chưa có tài khoản?
                    <button className="btn btn-white ml-2">Đăng ký</button>
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
export default connect()(SignIn);

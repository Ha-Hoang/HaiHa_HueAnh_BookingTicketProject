import React, { Component } from "react";
import { data, media } from "./data";
import "./footer.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoArray: data,
      logoMedia: media,
    };
  }

  render() {
    return (
      <footer>
        <div className="footer__wrapper">
          <div className="container">
            <div className="footer__content">
              <div className="footer__info row m-0">
                <div className="info__item info__item--left col-md-4">
                  <h4 className="col-md-12 mb-3 pl-0 m-0 text-white text-uppercase hideOnSmallScreen">
                    tix
                  </h4>
                  <div className="row m-0 justify-content-md-start justify-content-center">
                    <ul className="d-flex flex-wrap w-100">
                      <li className="col-lg-6 col-md-12 col-sm-6 pl-0 pr-4 hideOnSmallScreen">
                        <a href="/">FAQ</a>
                      </li>
                      <li className="col-lg-6 col-md-12 col-sm-6 pl-0 pr-xl-4 pr-md-0 pr-sm-2 pr-0 text-md-left text-sm-right text-center">
                        <a href="/">Thỏa thuận sử dụng</a>
                      </li>
                      <li className="col-lg-6 col-md-12 col-sm-6 pl-0 pr-4 hideOnSmallScreen">
                        <a href="/">Brand Guidelines</a>
                      </li>
                      <li className="col-lg-6 col-md-12 col-sm-6 pl-md-0 pl-sm-2 pl-0 pr-xl-4 pr-0 text-sm-left text-center">
                        <a href="/">Chính sách bảo mật</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="info__item info__item--middle col-md-4 hideOnSmallScreen">
                  <h4 className="col-md-12 mb-3 pl-0 m-0 text-white text-uppercase">
                    Đối tác
                  </h4>
                  {this.state.logoArray.map((logo, index) => (
                    <div className="row m-0 mb-3" key={index}>
                      <a className="bg-white" href="/">
                        <img src={logo.logo1} alt="logo1" />
                      </a>
                      <a href="/">
                        <img src={logo.logo2} alt="logo2" />
                      </a>
                      <a href="/">
                        <img src={logo.logo3} alt="logo3" />
                      </a>
                      <a href="/">
                        <img src={logo.logo4} alt="logo4" />
                      </a>
                      <a href="/">
                        <img src={logo.logo5} alt="logo5" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="info__item info__item--right col-md-4">
                  <div className="row mb-2 m-0">
                    <h4 className="col-md-6 m-0 text-white text-uppercase text-center hideOnSmallScreen">
                      mobile app
                    </h4>
                    <h4 className="col-md-6 m-0 text-white text-uppercase text-center hideOnSmallScreen">
                      social
                    </h4>
                  </div>
                  <div className="row m-0 w-100 justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center hideOnSmallScreen">
                      <a href="/">
                        <img src={this.state.logoMedia[0]} alt="apple" />
                      </a>
                      <a href="/">
                        <img src={this.state.logoMedia[1]} alt="android" />
                      </a>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      <a href="/">
                        <img src={this.state.logoMedia[2]} alt="fb" />
                      </a>
                      <a href="/">
                        <img src={this.state.logoMedia[3]} alt="zalo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer__copyright row m-0">
                <div className="col-md-1 col-sm-12 p-0 text-center">
                  <img
                    className="logo"
                    src={this.state.logoMedia[4]}
                    alt="zion"
                  />
                </div>
                <div className="col-md-9 mb-3">
                  <h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
                  <p>
                    Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                    Hồ Chí Minh, Việt Nam.
                  </p>
                  <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                  <p>
                    đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                    kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                  </p>
                  <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                  <p>
                    Email: <a href="mailto:support@tix.vn">support@tix.vn</a>
                  </p>
                </div>
                <div className="col-md-2 col-sm-12 text-md-right text-center p-0">
                  <a href="http://online.gov.vn/Home/WebDetails/62782">
                    <img
                      className="certificate"
                      src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                      alt="s3img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

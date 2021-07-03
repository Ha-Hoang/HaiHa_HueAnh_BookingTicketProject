import React, { Component } from "react";
import logo1 from "../../../../assets/images/cnx.jpg";
import logo2 from "../../../../assets/images/BHD.png";
import logo3 from "../../../../assets/images/cgv.png";
import logo4 from "../../../../assets/images/dongdacinema.png";
import logo5 from "../../../../assets/images/galaxycine.png";
import logo6 from "../../../../assets/images/STARLIGHT.png";
import logo7 from "../../../../assets/images/dcine.png";
import logo8 from "../../../../assets/images/zalopay_icon.png";
import logo9 from "../../../../assets/images/megags.png";
import logo10 from "../../../../assets/images/cinestar.png";
import logo11 from "../../../../assets/images/TOUCH.png";
import logo12 from "../../../../assets/images/payoo.jpg";
import logo13 from "../../../../assets/images/VCB.png";
import logo14 from "../../../../assets/images/AGRIBANK.png";
import logo15 from "../../../../assets/images/VIETTINBANK.png";
import logo16 from "../../../../assets/images/IVB.png";
import logo17 from "../../../../assets/images/123go.png";
import logo18 from "../../../../assets/images/laban.png";
import logo19 from "../../../../assets/images/apple-logo.png";
import logo20 from "../../../../assets/images/android-logo.png";
import logo21 from "../../../../assets/images/facebook-logo.png";
import logo22 from "../../../../assets/images/zalo-logo.png";
import logo23 from "../../../../assets/images/zion-logo.jpg";
import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__wrapper">
          <div className="container">
            <div className="footer__content">
              <div className="footer__info row m-0">
                <div className="info__item info__item--left col-md-4">
                  <h4 className="col-md-12 mb-3 pl-0 m-0 text-white text-uppercase hideOnSmallScreen">tix</h4>
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
                  <h4 className="col-md-12 mb-3 pl-0 m-0 text-white text-uppercase">Đối tác</h4>
                  <div className="row m-0 mb-3">
                    <a className="bg-white" href="/">
                      <img src={logo3} alt="logo3" />
                    </a>
                    <a href="/">
                      <img src={logo2} alt="logo2" />
                    </a>
                    <a href="/">
                      <img src={logo5} alt="logo5" />
                    </a>
                    <a href="/">
                      <img src={logo10} alt="logo10" />
                    </a>
                    <a href="/">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                        alt="s3img"
                      />
                    </a>
                  </div>
                  <div className="row m-0 mb-3">
                    <a href="/">
                      <img src={logo9} alt="logo9" />
                    </a>
                    <a href="/">
                      <img src="./images/bt.jpg" alt="bt" />
                    </a>
                    <a className="bg-white" href="/">
                      <img src={logo4} alt="logo4" />
                    </a>
                    <a href="/">
                      <img src={logo11} alt="logo11" />
                    </a>
                    <a href="/">
                      <img src={logo1} alt="logo1" />
                    </a>
                  </div>
                  <div className="row m-0 mb-3">
                    <a href="/">
                      <img src={logo6} alt="logo6" />
                    </a>
                    <a href="/">
                      <img src={logo7} alt="logo7" />
                    </a>
                    <a href="/">
                      <img src={logo8} alt="logo8" />
                    </a>
                    <a href="/">
                      <img src={logo12} alt="logo12" />
                    </a>
                    <a href="/">
                      <img src={logo13} alt="logo13" />
                    </a>
                  </div>
                  <div className="row m-0">
                    <a href="/">
                      <img src={logo14} alt="logo14" />
                    </a>
                    <a href="/">
                      <img src={logo15} alt="logo15" />
                    </a>
                    <a href="/">
                      <img src={logo16} alt="logo16" />
                    </a>
                    <a href="/">
                      <img src={logo17} alt="logo17" />
                    </a>
                    <a href="/">
                      <img src={logo18} alt="logo18" />
                    </a>
                  </div>
                </div>
                <div className="info__item info__item--right col-md-4">
                  <div className="row mb-2 m-0">
                    <h4 className="col-md-6 m-0 text-white text-uppercase text-center hideOnSmallScreen">mobile app</h4>
                    <h4 className="col-md-6 m-0 text-white text-uppercase text-center hideOnSmallScreen">social</h4>
                  </div>
                  <div className="row m-0 w-100 justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center hideOnSmallScreen">
                      <a href="/">
                        <img src={logo19} alt="logo19" />
                      </a>
                      <a href="/">
                        <img src={logo20} alt="logo20" />
                      </a>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      <a href="/">
                        <img src={logo21} alt="logo21" />
                      </a>
                      <a href="/">
                        <img src={logo22} alt="logo22" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer__copyright row m-0">
                <div className="col-md-1 col-sm-12 p-0 text-center">
                  <img className="logo" src={logo23} alt="logo23" />
                </div>
                <div className="col-md-9 mb-3">
                  <h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
                  <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                  <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                  <p>
                    đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí
                    Minh cấp.
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

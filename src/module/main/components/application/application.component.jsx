/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { data } from "./data";
import Slider from "react-slick";
import "./application.scss";
import mobile from "../../../../assets/images/mobile.png";

export default function Application() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  };

  return (
    <section id="app">
      <div className="app__wrapper">
        <div className="container">
          <div className="app__content">
            <div className="row">
              <div
                className="col-lg-6 text-white app__left"
                style={{ paddingRight: "0px", paddingLeft: "90px" }}
              >
                <h1>
                  Ứng dụng tiện lợi dành cho <br /> người yêu điện ảnh
                </h1>
                <p className="my-5"  style={{ marginBottom: "28px", marginTop: "28px" }}>
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <button className="btn text-white">
                  App miễn phí - Tải về ngay!
                </button>
                <p className="download">
                  TIX có hai phiên bản{" "}
                  <a
                    target="_blank"
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                    className="text-white text-decoration-none"
                  >
                    iOS
                  </a>{" "}
                  &amp;{" "}
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    className="text-white text-decoration-none"
                  >
                    Android
                  </a>
                </p>
              </div>
              <div className="col-lg-6 app__right p-0">
                <img
                  className="my-0 mx-auto d-block"
                  src={mobile}
                  alt="mobile"
                />
                <div className="app__slider m-auto">
                  <Slider {...settings} className="slider__content">
                    {data.map((item, index) => {
                      return (
                        <div className="slide__item" key={index}>
                          <img src={item} alt="item" />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

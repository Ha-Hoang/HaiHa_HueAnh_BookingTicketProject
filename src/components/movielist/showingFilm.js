import React, { Component } from "react";
import Slider from "react-slick";
import playVideo from "../../assets/images/play-video.png";
import star1 from "../../assets/images/star1.png";
import star12 from "../../assets/images/star1.2.png";
import "./showingFilm.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { getMovieListAction } from "../../store/actions/movie.action";

class ShowingFilm extends Component {
  renderMovieList = () => {
    const { movieList } = this.props;
    return movieList.map((movie, index) => {
      return (
        <div className="tab-content">
          <div className="tab-pane container active">
            <div className="showing_item">
              <div className="item_poster">
                <img className="poster" src={movie.hinhAnh} alt="" />
                <div className="hover_poster">
                  <a
                    href={movie.trailer}
                    className="venobox"
                    data-vbtype="video"
                  >
                    <img src={playVideo} alt="playvideo" />
                  </a>
                </div>
              </div>
              <div className="item_content">
                <div className="info">
                  <span>C18</span>
                  <h3>{movie.tenPhim}</h3>
                  <p>{movie.moTa}</p>
                </div>
                <button href="#">Mua vé</button>
              </div>
              <div className="showing_rate text-center">
                <p>{movie.danhGia}</p>
                <span>
                  <img src={star1} alt="star1" />
                  <img src={star1} alt="star1" />
                  <img src={star1} alt="star1" />
                  <img src={star12} alt="star12" />
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    const settings = {
      rows: 2,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return <Slider {...settings}>{this.renderMovieList()}</Slider>;
  }
  componentDidMount() {
    this.props.dispatch(getMovieListAction());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps)(ShowingFilm);

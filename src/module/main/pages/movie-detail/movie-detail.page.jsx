import { CardMedia, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { style } from "./movie-detail.style";
import playVideo from "../../../../assets/images/play-video.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { getMovieDetailAction } from "../../../../store/actions/movie.action";
import Format from "date-format";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Loading from "../../components/loading.component";
import { Link } from "react-scroll";
import MovieDetailBottom from "../../components/movie-detail-bottom/movie-detail-bottom.component";

class MovieDetail extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { movieDetail, loading } = this.props;
    const { classes } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <div>
        <section className={classes.movieDetail}>
          <CardMedia
            component="img"
            image={movieDetail.hinhAnh}
            className={classes.imgBackground}
          />
          <div maxwidth="lg" className={classes.movieContent}>
            <Grid container>
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className={classes.itemContent}
              >
                <div className={classes.itemPoster}>
                  <img
                    className={classes.poster}
                    src={movieDetail.hinhAnh}
                    alt=""
                  />
                  <div className={classes.hoverPoster}>
                    <button
                      className={classes.button}
                      type="button"
                      onClick={this.handleOpen}
                    >
                      <img
                        className={classes.imgPlayVid}
                        src={playVideo}
                        alt="playvideo"
                      />
                    </button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={this.state.open}
                      onClose={this.handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={this.state.open}>
                        <div className={classes.paper}>
                          <button
                            onClick={this.closeModal}
                            className={classes.close}
                          >
                            <img
                              src="https://tix.vn/app/assets/img/icons/close.png"
                              alt="tix"
                            ></img>
                          </button>
                          <CardMedia
                            component="iframe"
                            src={movieDetail.trailer}
                            className={classes.iframe}
                          />
                        </div>
                      </Fade>
                    </Modal>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                sm={12}
                xs={12}
                className={classes.textInfo}
              >
                <Typography variant="h4" className={classes.textTransformMovie}>
                  {movieDetail.tenPhim}
                </Typography>
                <span className={classes.textTransform}>
                  {movieDetail.moTa}
                </span>
                <Typography variant="h6" style={{ paddingTop: "10px" }}>
                  Bí Danh: {movieDetail.biDanh}
                </Typography>
                <Typography variant="h6">
                  Ngày Khởi Chiếu:{" "}
                  {Format("dd/MM/yyyy", new Date(movieDetail.ngayKhoiChieu))}
                </Typography>
                <Typography variant="h6">
                  Đánh Giá: {movieDetail.danhGia}
                </Typography>
                <Link to="show-time" spy={true} smooth={true} duration={500}>
                  <button className={classes.buttonBuyTicket}>Mua vé</button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className={classes.showTime} id="show-time">
          <MovieDetailBottom />
        </section>
      </div>
    );
  }
  componentDidMount() {
    const { movieCode } = this.props.match.params;
    this.props.dispatch(getMovieDetailAction(movieCode));
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(
  withStyles(style)(withRouter(MovieDetail))
);

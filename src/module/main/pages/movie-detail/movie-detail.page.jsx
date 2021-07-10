import { CardMedia, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ShowTime from "../../components/show-time/show-time";
import { style } from "./movie-detail.style";
import playVideo from "../../../../assets/images/play-video.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { getMovieDetailAction } from "../../../../store/actions/movie.action";
import Format from "date-format";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Loading from "../../components/loading.component";
import { Link } from "react-scroll";

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
        <div className={classes.movieDetail}>
          <CardMedia
            component="img"
            image={movieDetail.hinhAnh}
            className={classes.imgBackground}
          />
          <Container maxwidth="lg" className={classes.movieContent}>
            <Grid container>
              <Grid
                item
                lg={4}
                md={3}
                sm={3}
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
                md={9}
                sm={9}
                xs={12}
                className={classes.textInfo}
              >
                <Typography variant="h3" className={classes.textTransformMovie}>
                  {movieDetail.tenPhim}
                </Typography>
                <Typography variant="h5" className={classes.textTransform}>
                  {movieDetail.moTa}
                </Typography>
                <TableContainer className={classes.table}>
                  <Table>
                    <TableRow>
                      <TableCell
                        className={classes.tableCellWidth && classes.tableCell}
                      >
                        <Typography variant="h6">Bí danh</Typography>
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        <Typography
                          variant="h6"
                          className={classes.textTransform}
                        >
                          {movieDetail.biDanh}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={classes.tableCellWidth && classes.tableCell}
                      >
                        <Typography variant="h6">Ngày Khởi chiếu</Typography>
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        <Typography variant="h6">
                          {Format(
                            "MM/dd/yyyy",
                            new Date(movieDetail.ngayKhoiChieu)
                          )}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={classes.tableCellWidth && classes.tableCell}
                      >
                        <Typography variant="h6">Đánh giá</Typography>
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        <Typography variant="h6">
                          {movieDetail.danhGia}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableContainer>
                <Link to="show-time" spy={true} smooth={true} duration={500}>
                  <button className={classes.buttonBuyTicket}>Mua vé</button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </div>
        <section className={classes.showTime} id="show-time">
          <ShowTime />
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

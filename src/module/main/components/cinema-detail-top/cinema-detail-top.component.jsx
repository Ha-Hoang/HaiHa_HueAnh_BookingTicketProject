import { makeStyles, CardMedia, Grid, Typography } from "@material-ui/core";
import BHD from "../../../../assets/images/bhd-star-bitexco.png";
import star from "../../../../assets/images/star1.png";
import React from "react";
import { Link } from "react-scroll";

const useStyle = makeStyles((theme) => ({
  mainTop: {
    "@media (max-width: 768px)": {
      paddingBottom: "111px",
    },
  },
  movieDetail: {
    position: "relative",
    width: "100%",
    height: "650px",
    "@media (max-width: 992px)": {
      height: "600px",
    },
    "@media (max-width: 768px)": {
      height: "350px",
      paddingTop: "64px",
    },
  },
  imgBackground: {
    filter: "blur(15px)",
    width: "100%",
    height: "100%",
    "@media (max-width: 768px)": {
      filter: "none",
      width: "calc(100% + 5px)",
      margin: "-10px -10px 1px -5px",
    },
  },
  movieContent: {
    position: "absolute",
    maxWidth: "870px",
    margin: "auto",
    top: "50%",
    width: "100%",
    left: "50%",
    transform: "translate3d(-50%,-50%,0)",
  },
  itemContent: {
    maxWidth: "220px",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  itemPoster: {
    position: "relative",
    width: "100%",
  },
  poster: {
    width: "100%",
    borderRadius: "8px",
  },
  textInfo: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "30%",
    "@media (max-width: 768px)": {
      left: "0",
      top: "30px",
    },
  },
  buttonBuyTicket: {
    margin: "26px 0px",
    padding: "6px 23px",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "18px",
    textAlign: "center",
    background: "#fb4226",
    border: "none",
    transition: "all 0.2s",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "#b42a14",
      cursor: "pointer",
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  textTransform: {
    textTransform: "capitalize",
    display: "block",
  },
  textTransformMovie: {
    textTransform: "uppercase",
    "@media (max-width: 992px)": {
      paddingTop: "20px",
    },
  },
  mainCircle: {
    textAlign: "center",
    padding: "0",
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  circlePercent: {
    position: "relative",
    fontSize: "126px",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    margin: "auto",
    backgroundColor: "rgba(0,0,0,.4)",
  },
  circleBorder: {
    width: "100%",
    height: "100%",
    border: "7.5px solid #3a3a3a",
    borderRadius: "50%",
    position: "absolute",
  },
  textCircle: {
    position: "absolute",
    width: "100%",
    left: "0",
    top: "0",
    fontSize: "60px",
    color: "#fff",
    display: "block",
    textAlign: "center",
    lineHeight: "113px",
  },
  slice: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  bar: {
    position: "absolute",
    border: "7.5px solid #7ed321",
    width: "100%",
    height: "100%",
    clip: "rect(0px,126px,121px,58px)",
    borderRadius: "50%",
  },
  fill: {
    position: "absolute",
    border: "7.5px solid #7ed321",
    width: "100%",
    height: "100%",
    clip: "rect(31px,100px,120px,0px)",
    borderRadius: "50%",
  },
  starMain: {
    padding: "10px 0px",
  },
  backgroundWhite: {
    top: "0px",
    left: "0px",
    height: "100%",
    width: "100%",
    position: "absolute",
    background: "linear-gradient(to top,#fff,transparent 100%)",
    "@media (max-width: 768px)": {
      background: "none",
    },
  },
}));
export default function CinemaDetailTop(props) {
  const classes = useStyle();

  return (
    <div className={classes.mainTop}>
      <section className={classes.movieDetail}>
        <CardMedia
          component="img"
          image={BHD}
          className={classes.imgBackground}
        />
        <div className={classes.backgroundWhite}></div>
      </section>
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
              <img className={classes.poster} src={BHD} alt="" />
            </div>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12} className={classes.textInfo}>
            <Typography variant="h5" className={classes.textTransformMovie}>
              Tên Cụm Rạp
            </Typography>
            <span className={classes.textTransform}>Địa Chỉ</span>
            <Link
              to="cinemaDetailBottom"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className={classes.buttonBuyTicket}>Mua vé</button>
            </Link>
          </Grid>
          <Grid
            className={classes.mainCircle}
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
          >
            <div className={classes.circlePercent}>
              <div className={classes.circleBorder}></div>
              <span className={classes.textCircle}>8</span>
              <div className={classes.slice}>
                <div className={classes.bar}></div>
                <div className={classes.fill}></div>
              </div>
            </div>
            <div className={classes.starMain}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

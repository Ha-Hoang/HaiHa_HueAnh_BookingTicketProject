import React from "react";
import playVideo from "../../assets/images/play-video.png";
import star1 from "../../assets/images/star1.png";
import star12 from "../../assets/images/star1.2.png";
import "./showingFilm.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CardMedia from "@material-ui/core/CardMedia";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "900px",
    height: "500px",
    position: "relative",
  },
  iframe: {
    width: "100%",
    height: "100%",
  },
  close: {
    position: "absolute",
    right: "-20px",
    transform: "translateY(-20px)",
    backgroundColor: "transparent",
    border: "none",
  },
}));

export default function ShowingFilmContent(props) {
  const history = useHistory();
  const { movie } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="tab-content">
      <div className="tab-pane container active">
        <div className="showing_item">
          <div className="item_poster">
            <img className="poster" src={movie.hinhAnh} alt="" />
            <div className="hover_poster">
              <button type="button" onClick={handleOpen}>
                <img src={playVideo} alt="playvideo" />
              </button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <button onClick={closeModal} className={classes.close}>
                      <img
                        src="https://tix.vn/app/assets/img/icons/close.png"
                        alt="tix"
                      ></img>
                    </button>
                    <CardMedia
                      component="iframe"
                      src={movie.trailer}
                      className={classes.iframe}
                    />
                  </div>
                </Fade>
              </Modal>
            </div>
          </div>
          <div className="item_content">
            <div className="info">
              <span>C18</span>
              <h3>{movie.tenPhim}</h3>
              <p>{movie.moTa}</p>
            </div>
            <button
              onClick={() => {
                history.push(`/moviedetail/${movie.maPhim}`);
              }}
            >
              Mua vé
            </button>
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
}

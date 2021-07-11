export const style = {
  movieDetail: {
    position: "relative",
    paddingTop: "70px",
    background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
  },
  imgBackground: {
    filter: "blur(15px)",
    width: "100%",
    height: "500px",
    "@media (max-width: 768px)": {
      height: "700px",
    },
  },
  itemContent: {
    padding: "50px 50px 60px 90px",
    "@media (max-width: 992px)": {
      padding: "85px 50px 60px 58px",
    },
    "@media (max-width: 768px)": {
      padding: "0px 50px 60px 83px",
    },
  },
  movieContent: {
    position: "absolute",
    top: "60%",
    width: "100%",
    left: "50%",
    transform: "translate3d(-50%,-50%,0)",
    "@media (max-width: 992px)": {
      top: "55%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
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
    "&:focus": {
      outline: "none",
    },
  },
  itemPoster: {
    position: "relative",
  },
  hoverPoster: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    opacity: "0",
    transition: "all 0.5s",
    "&:hover": {
      opacity: "1",
      zIndex: "3",
      cursor: "pointer",
    },
  },
  poster: {
    width: "100%",
    height: "300px",
    borderRadius: "8px",
    "@media (max-width: 1280px)": {
      width: "200px",
    },
    "@media (max-width: 992px)": {
      width: "180px",
      height: "250px",
    },
    "@media (max-width: 768px)": {
      width: "320px",
    },
  },
  button: {
    position: "absolute",
    width: "60px",
    height: "60px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    "&:focus": {
      outline: "none",
    },
    "@media (max-width: 1280px)": {
      transform: "translateY(-50%)",
    },
    "@media (max-width: 1200px)": {
      transform: "translate(40%, -49%)",
    },
    "@media (max-width: 992px)": {
      transform: "translate(50%,-55%)",
    },
    "@media (max-width: 767px)": {
      transform: "translate(223%,-45%)",
    },
    "@media (max-width: 600px)": {
      transform: "translate(-70%,-45%)",
    },
  },
  imgPlayVid: {
    position: "absolute",
    width: "60px",
    height: "60px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  table: {
    paddingTop: "40px",
    "@media (max-width: 768px)": {
      paddingTop: "10px",
    },
  },
  textInfo: {
    color: "white",
    "@media (max-width: 1280px)": {
      padding: "0 150px",
    },
    "@media (max-width: 992px)": {
      padding: "20px 110px",
    },
    "@media (max-width: 768px)": {
      padding: "0px",
      maxWidth: "500px",
      margin: "auto",
    },
  },
  tableCell: {
    border: "none",
    "@media (max-width: 768px)": {
      padding: "3px 10px",
    },
  },
  tableCellWidth: {
    width: "35%",
  },
  buttonBuyTicket: {
    margin: "26px 18px",
    padding: "10px 20px",
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
  },
  textTransform: {
    textTransform: "capitalize",
    "@media (max-width: 992px)": {
      fontSize: "20px",
    },
  },
  textTransformMovie: {
    textTransform: "uppercase",
    "@media (max-width: 992px)": {
      fontSize: "30px",
    },
  },
  showTime: {
    backgroundColor: "rgb(10, 32, 41)",
    paddingTop: "75px",
    height: "900px",
    "@media (max-width: 768px)": {
      height: "1500px"
    },
  },
};

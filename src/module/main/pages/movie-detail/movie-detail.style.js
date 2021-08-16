export const style = {
  movieDetail: {
    position: "relative",
    width: "100%",
    height: "650px",
    background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
    "@media (max-width: 992px)": {
      height: "800px",
    },
    "@media (max-width: 768px)": {
      height: "900px",
    },
  },
  imgBackground: {
    filter: "blur(15px)",
    width: "100%",
    height: "100%",
  },
  movieContent: {
    position: "absolute",
    maxWidth: "870px",
    margin: "auto",
    top: "60%",
    width: "100%",
    left: "50%",
    transform: "translate3d(-50%,-50%,0)",
    "@media (max-width: 960px)": {
      maxWidth: "750px",
    },
  },
  itemContent: {
    maxWidth: "240px",
    margin: "auto",
  },
  itemPoster: {
    position: "relative",
    width: "100%",
  },
  poster: {
    width: "100%",
    borderRadius: "8px",
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
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },
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
    cursor: "pointer",
    "&:focus": {
      outline: "none",
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
  textInfo: {
    color: "white",
    padding: "0 20px",
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
  },
  textTransformMovie: {
    textTransform: "uppercase",
    "@media (max-width: 992px)": {
      paddingTop: "20px",
    },
  },
  showTime: {
    backgroundColor: "rgb(10, 32, 41)",
    paddingTop: "75px",
    height: "900px",
    "@media (max-width: 768px)": {
      height: "1500px",
    },
  },
};

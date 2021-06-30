export const style = {
  movieDetail: {
    position: "relative",
    paddingTop: "70px",
  },
  imgBackground: {
    filter: "blur(15px)",
    width: "100%",
    height: "550px",
  },
  itemContent: {
    padding: "50px 50px 60px 90px",
  },
  movieContent: {
    position: "absolute",
    top: "50%",
    width: "100%",
    left: "50%",
    transform: "translate3d(-50%,-50%,0)",
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
  },
  textInfo: {
    color: "white",
  },
  tableCell: {
    border: "none",
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
  },
};

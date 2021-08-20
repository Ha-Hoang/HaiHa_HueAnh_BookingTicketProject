import { Container } from "@material-ui/core";
import React from "react";
import ChairList from "../chair-list/chair-list.component";
import InfoCinema from "../info-cinema/info-cinema.component";
import { makeStyles } from "@material-ui/core";
import Background from "../../../../assets/images/backapp.jpg";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${Background})`,
    color: "#fff",
    paddingBottom: "20px",
  },
  container: {
    maxWidth: "975px",
  },
}));

export default function BookingChair(props) {
  const classes = useStyles();
  const { bookinglst } = props;
  const { chairlst } = props;
  const { handleChoiceChair } = props;
  return (
    <div className={classes.main}>
      <Container className={classes.container}>
        <InfoCinema bookinglst={bookinglst} />
        <ChairList chairlst={chairlst} handleChoiceChair={handleChoiceChair} />
      </Container>
    </div>
  );
}

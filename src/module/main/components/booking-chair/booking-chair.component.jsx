import { Container } from "@material-ui/core";
import React from "react";
import ChairList from "../chair-list/chair-list.component";
import InfoCinema from "../info-cinema/info-cinema.component";

export default function BookingChair(props) {
  const { bookinglst } = props;
  const { chairlst } = props;
  return (
    <Container style={{ maxWidth: "975px" }}>
      <InfoCinema bookinglst={bookinglst} />
      <ChairList chairlst={chairlst} />
    </Container>
  );
}

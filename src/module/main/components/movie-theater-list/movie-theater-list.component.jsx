import React, { useEffect } from "react";
import { Divider, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MovieTheater from "../movie-theater/movie-theater.component";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaListAction } from "../../../../store/actions/cinema.action";

const useStyles = makeStyles((theme) => ({
  rootList: {
    width: "100%",
    maxWidth: "36ch",
    "@media (max-width: 600px)": {
      maxWidth: "100%",
    },
  },
  divider: {
    width: "100%",
  },
}));

export default function MovieTheaterList(props) {
  const classes = useStyles();
  const { maHeThongRap } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaListAction());
  }, []);

  const cinemaList = useSelector((state) => state.cinema.cinemaList);

  const { handleChoiceMovie } = props;
  const renderCinemaList = () => {
    return cinemaList.map((cinema, index) => {
      return (
        <div key={index}>
          <MovieTheater
            cinema={cinema}
            maHeThongRap={maHeThongRap}
            handleChoiceMovie={handleChoiceMovie}
          />
          <Divider orientation="horizontal" className={classes.divider} />
        </div>
      );
    });
  };

  return <List className={classes.rootList}>{renderCinemaList()}</List>;
}

import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import CinemaMovieDetailList from "../cinema-movie-detail-list/cinemaMovieDetailList.component";
import Cinema from "../cinema/cinema.component";

const useStyles = makeStyles((theme) => ({
  cinema: {
    padding: "0",
    borderRight: "1px solid #e2e2e2",
  },
  cinemaDetailList: {
    maxHeight: "700px",
    overflowX: "hidden",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: "#e8e3e3",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#8080805e",
      borderRadius: "5px",
    },
  },
  cinemaScroll: {
    maxHeight: "700px",
    overflowX: "hidden",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "3px",
      backgroundColor: "#e8e3e3",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#8080805e",
      borderRadius: "5px",
    },
  }
}));
export default function CinemaList(props) {
  const classes = useStyles();

  const { lstCumRap = [] } = props.cinemaDetail;

  const [schedule, setSchedule] = useState({});
  const [maCumRap, setMaCumRap] = useState("");

  const handleChoiceSchedule = (maCumRap) => {
    const schedule = lstCumRap.find((lst) => lst.maCumRap === maCumRap);
    setMaCumRap(maCumRap);
    setSchedule(schedule);
  };

  return (
    <div className="tab-content">
      <div>
        <Grid container>
          <Grid item md={4} className={classes.cinemaScroll}>
            {lstCumRap.map((cine, index) => {
              return (
                <div key={index} className={classes.cinema}>
                  <Cinema
                    cine={cine}
                    handleChoiceSchedule={handleChoiceSchedule}
                    maCumRap={maCumRap}
                  />
                </div>
              );
            })}
          </Grid>
          <Grid item md={8} className={classes.cinemaDetailList}>
            <CinemaMovieDetailList schedule={schedule} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

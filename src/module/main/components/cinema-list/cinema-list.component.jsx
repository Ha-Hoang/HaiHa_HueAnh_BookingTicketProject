import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
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
 
}));
export default function CinemaList(props) {
  const classes = useStyles();
  return (
    <div className="tab-content">
      <div>
        <Grid container>
          <Grid item md={4} className={classes.cinema}>
            <div>
              <Cinema />
              <Cinema />
              <Cinema />
              <Cinema />
              <Cinema />
            </div>
          </Grid>
          <Grid item md={8} className={classes.cinemaDetailList}>
            <CinemaMovieDetailList />
          </Grid>
        </Grid>
      </div>
    </div>
  );

class CinemaList extends Component {
    render() {
        return (
          <div className="tab-pane active" id="v-pills-bhd" role="tabpanel">
            <div className="row">
              <div className="col-md-4">
                <div className="nav nav-pills " role="tablist">
                <Cinema />
                <Cinema />
                <Cinema />
                <Cinema />
                <Cinema />
                  </div>
              </div>
              <div className="col-md-8 fix-padding fixed-scroll">
               <CinemaMovieDetailList />
              </div>
            </div>
          </div>
        );
    }
}

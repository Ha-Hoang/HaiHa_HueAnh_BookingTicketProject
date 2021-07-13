import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShowTime2dDigital from "../showtime-2ddigital/showtime-2ddigital.component";
import ShowTime2dLtieng from "../showtime-2dltieng/showtime-2dltieng.component";

const useStyles = makeStyles((theme) => ({
  // filmType: {
  //   padding: "5px",
  // },
}));

export default function MovieShowTime() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid lg={12}>
          <Typography variant="span" className={classes.filmType}>
            2D DIGITAL
          </Typography>
          <ShowTime2dDigital />
          <ShowTime2dDigital />
          <ShowTime2dDigital />
          <ShowTime2dDigital />
          <ShowTime2dDigital />
          <ShowTime2dDigital />
        </Grid>
        <Grid lg={12}>
          <Typography variant="span" className={classes.filmType}>
            2D L.TIẾNG
          </Typography>
          <ShowTime2dLtieng />
          <ShowTime2dLtieng />
          <ShowTime2dLtieng />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

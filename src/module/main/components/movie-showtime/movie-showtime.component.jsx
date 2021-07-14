import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShowTime2dDigital from "../showtime-2ddigital/showtime-2ddigital.component";

const useStyles = makeStyles((theme) => ({
  // filmType: {
  //   padding: "5px",
  // },
}));

export default function MovieShowTime(props) {
  const classes = useStyles();
  const {lichChieu} = props;
  return (
    <div>
      <Grid container>
        <Grid lg={12}>
          <Typography variant="span" className={classes.filmType}>
            2D DIGITAL
          </Typography>
          <ShowTime2dDigital lichChieu={lichChieu}/>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

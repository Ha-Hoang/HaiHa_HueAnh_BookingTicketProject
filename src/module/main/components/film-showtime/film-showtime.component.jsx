import React from "react";
import { Grid } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Film2d from "../film-2d/film-2d.component";

const useStyles = makeStyles((theme) => ({
  // filmType: {
  //   padding: "5px",
  // },
}));

export default function FilmShowtime(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <span className={classes.filmType}>2D DIGITAL</span>
          <Film2d />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

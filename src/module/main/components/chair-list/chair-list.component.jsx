import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  textScreen: {
    textAlign: "center",
  },
  mainChairList: {
    paddingTop: "12px",
    maxWidth: "700px",
    margin: "auto",
  },
}));

export default function ChairList(props) {
  const classes = useStyle();
  return (
    <div className={classes.mainChairList}>
      <h5 className={classes.textScreen}>Màn hình</h5>
      <Grid container>
        <Grid item md={1} xs={2}>
          <h5>A</h5>
          <h5>A</h5>
          <h5>A</h5>
          <h5>A</h5>
          <h5>A</h5>
          <h5>A</h5>
          <h5>A</h5>
          <h5>A</h5>
          <h5>A</h5>
          <h5>A</h5>
        </Grid>
        <Grid item md={11} xs={10}>
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
          <Button className={classes.btnChair} variant="contained" />
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core";
import Day from "../day/day.component";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "scroll",
    overflowY: "hidden",
    "&::-webkit-scrollbar": {
      height: "6px",
      backgroundColor: "#e8e3e3",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#8080805e",
      borderRadius: "5px",
    },
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    paddingLeft: "0",
    marginTop: "1rem",
    width: "198%",
    cursor: "pointer",
  },
}));

export default function DaysOfWeek(props) {
  const classes = useStyles();
  const { handleChoiceDay } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.ul}>
        <Day handleChoiceDay={handleChoiceDay} />
      </ul>
    </div>
  );
}

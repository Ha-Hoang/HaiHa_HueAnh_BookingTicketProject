import React from "react";
import {
  ListItem,
  Typography,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "50px",
    height: "50px",
  },
  listItem: {
    opacity: "0.5",
    transition: "all 0.2s",
    "&:hover": {
      opacity: "1",
      cursor: "pointer",
    },
  },
  listItemActive: {
    opacity: "1",
    cursor: "pointer",
  },
  textCinemaName: {
    textTransform: "capitalize",
  },
}));

export default function MovieTheater(props) {
  const { cinema } = props;
  const { maHeThongRap } = props;
  
  const classes = useStyles();

  return (
    <ListItem
      className={
        cinema.maHeThongRap === maHeThongRap
          ? classes.listItemActive
          : classes.listItem
      }
      onClick={() => props.handleChoiceMovie(cinema.maHeThongRap)}
    >
      <ListItemAvatar>
        <Avatar className={classes.avatar} alt="bhd" src={cinema.logo} />
      </ListItemAvatar>
      <Typography variant="span" className={classes.textCinemaName}>
        {cinema.tenHeThongRap}
      </Typography>
    </ListItem>
  );
}

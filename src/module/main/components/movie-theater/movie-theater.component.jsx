import React from "react";
import {
  ListItem,
  Typography,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bhd from "../../../../assets/images/BHD.png";

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
}));

export default function MovieTheater() {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <Avatar className={classes.avatar} alt="bhd" src={bhd} />
      </ListItemAvatar>
      <Typography variant="span" className={classes.textCinemaName}>
        BHD Star Cineplex
      </Typography>
    </ListItem>
  );
}

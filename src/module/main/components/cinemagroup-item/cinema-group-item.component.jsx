import React from "react";
import BHD from "../../../../assets/images/bhd-star-vincom-le-van-viet.png"
import { ListItem, Avatar, ListItemAvatar } from "@material-ui/core";
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

export default function CinemaGroupItem(props) {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <Avatar className={classes.avatar} alt="bhd" src={BHD} />
      </ListItemAvatar>
      <span className={classes.textCinemaName}>BHD Star Bitexco</span>
    </ListItem>
  );
}

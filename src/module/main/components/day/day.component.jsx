import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    li: {
      display: "inline",
      textAlign: "center",
      fontWeight: "500",
    },
    pDay: {
      marginBottom: "0",
      fontSize: "14px",
    },
    pDate: {
      marginBottom: "0",
      fontSize: "18px",
    },
  }));

export default function Day() {
    const classes = useStyles();
    return (
        <li className={classes.li}>
          <p className={classes.pDay}>Thứ 2</p>
          <p className={classes.pDate}>12</p>
        </li>
    )
}

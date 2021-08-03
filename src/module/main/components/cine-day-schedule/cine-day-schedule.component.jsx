import React from "react";
import { makeStyles } from "@material-ui/core";
import Format from "date-format";

const useStyles = makeStyles((theme) => ({
  li: {
    display: "inline",
    textAlign: "center",
    fontWeight: "500",
  },
  liActive: {
    color: "red",
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

export default function CineDaySchedule(props) {
  const classes = useStyles();
  const daysofWeek = [];
  const days = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];

  for (let i = 0; i <= 13; i++) {
    let date = new Date(Date.now() + 1000 * 60 * 60 * 24 * i);
    Format("dd/MM/yyyy", date);
    daysofWeek.push(date);
  }

  return daysofWeek.map((day, index) => {
    return (
      <li className={classes.li} key={index}>
        <p className={classes.pDay}>{days[day.getDay()]}</p>
        <p className={classes.pDate}>{day.getDate()}</p>
      </li>
    );
  });
}

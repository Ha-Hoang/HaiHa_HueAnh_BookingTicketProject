import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  li: {
    display: "inline",
    textAlign: "center",
    fontWeight: "500",
  },
  liActive: {
    display: "inline",
    textAlign: "center",
    fontWeight: "500",
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

export default function Day(props) {
  const classes = useStyles();
  const daysofWeek = [];
  const { thu } = props;
  const days = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];

  for (let i = 0; i <= 6; i++) {
    let date = new Date(Date.now() + 1000 * 60 * 60 * 24 * i);
    daysofWeek.push(date);
  }

  return daysofWeek.map((day, index) => {
    return (
      <li
        className={(thu === day.getDay() ? classes.liActive : classes.li)}
        key={index}
        onClick={() => props.handleChoiceDay(day.getDay())}
      >
        <p className={classes.pDay}>{days[day.getDay()]}</p>
      </li>
    );
  });
}

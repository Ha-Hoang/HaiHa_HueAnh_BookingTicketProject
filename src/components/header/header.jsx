import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navActive: {
    color: "#fa5238",
  },
  media: {
    height: 50,
    width: 50,
  },
  text: {
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" exact>
            <CardMedia
              image="https://tix.vn/app/assets/img/icons/web-logo.png"
              component="img"
              className={classes.media}
            />
          </NavLink>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              to="/"
              exact
              className={classes.text}
              activeClassName={classes.navActive}
            >
              Home
            </NavLink>
          </Typography>
          <Button color="inherit">
            <NavLink
              to="/signin"
              exact
              className={classes.text}
              activeClassName={classes.navActive}
            >
              SIGN IN
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              to="/signup"
              exact
              className={classes.text}
              activeClassName={classes.navActive}
            >
              SIGN UP
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { CardMedia } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../assets/images/web-logo.png";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import HeaderResponsive from "./headerResponsive";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    justifyContent: "center",
  },
  media: {
    height: 50,
    width: 50,
    marginRight: 150,
  },
  textNavLink: {
    textDecoration: "none",
    fontWeight: 500,
    "&:hover": {
      textDecoration: "none",
    },
  },
  textButton: {
    textTransform: "capitalize",
    color: "#9b9b9b",
    "&:focus": {
      outline: "none",
    },
  },
  hover: {
    padding: 10,
    transition: "all 0.5s",
    "&:hover": {
      color: "#fb4226",
      cursor: "pointer",
    },
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
}));

export default function Header() {
  const classes = useStyles();

  //Breakpoints
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ width: "100%" }}>
          {isMatch ? (
            <HeaderResponsive />
          ) : (
            <>
              <NavLink to="/" exact>
                <CardMedia
                  image={logo}
                  component="img"
                  className={classes.media}
                />
              </NavLink>
              <Toolbar className={classes.title}>
                <Link
                  activeClass="active"
                  to="movieList"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Typography className={classes.textNavLink && classes.hover}>
                    Lịch chiếu
                  </Typography>
                </Link>
                <Link
                  activeClass="active"
                  to=""
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Typography className={classes.textNavLink && classes.hover}>
                    Cụm rạp
                  </Typography>
                </Link>
                <Link
                  activeClass="active"
                  to=""
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Typography className={classes.textNavLink && classes.hover}>
                    Tin tức
                  </Typography>
                </Link>
                <Link
                  activeClass="active"
                  to=""
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Typography className={classes.textNavLink && classes.hover}>
                    Ứng dụng
                  </Typography>
                </Link>
              </Toolbar>
              <Toolbar>
                <NavLink to="/signin" exact className={classes.textNavLink}>
                  <Button color="inherit" className={classes.textButton}>
                    <Avatar
                      src="/broken-image.jpg"
                      className={classes.avatar}
                    />
                    Đăng Nhập
                  </Button>
                </NavLink>
                <NavLink to="/signup" exact className={classes.textNavLink}>
                  <Button color="inherit" className={classes.textButton}>
                    Đăng Ký
                  </Button>
                </NavLink>
              </Toolbar>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

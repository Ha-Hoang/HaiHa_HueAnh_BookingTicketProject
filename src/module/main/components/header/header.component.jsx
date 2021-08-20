import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink, useHistory } from "react-router-dom";
import { CardMedia } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../../../assets/images/web-logo.png";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { Link } from "react-scroll";
import HeaderResponsive from "./header.responsive";

import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: "9",
    backgroundColor: "rgba(255,255,255,.95)",
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
    fontWeight: "500",
    transition: "all 0.5s",
    "&:hover": {
      color: "#fb4226",
      cursor: "pointer",
    },
  },
  username: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Header() {

  const [userLogin, setUserLogin] = useState(null);
  const classes = useStyles();
  //Breakpoints
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();
  const maLoaiNguoiDung = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));

  const handleLogout = () => {
    localStorage.clear();
    setUserLogin(null);
    history.push("/");
  };

  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };

  const hideDropdown = (e) => {
    setShow(false);
  };
  const changeInfoPage = () => {
    history.push("/personalInfo");
  };
  const changeAdminPage = () => {
    history.push("/admin");
  };

  useEffect(() => {
    let user = null;
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
    }
    setUserLogin(user);
  }, []);
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
                  to="cinemaGroup"
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
                  to="application"
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
                {userLogin ? (
                  <>
                    <NavDropdown
                      title={userLogin.hoTen}
                      show={show}
                      onMouseEnter={showDropdown}
                      onMouseLeave={hideDropdown}
                    >
                      {maLoaiNguoiDung === "QuanTri" ? (
                        <NavDropdown.Item onClick={changeAdminPage}>
                          Admin
                        </NavDropdown.Item>
                      ) : null}
                      <NavDropdown.Item onClick={changeInfoPage}>
                        {" "}
                        My account
                      </NavDropdown.Item>

                      <NavDropdown.Item onClick={handleLogout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </Toolbar>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

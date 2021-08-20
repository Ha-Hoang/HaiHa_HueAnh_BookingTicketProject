import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar, Button, CardMedia } from "@material-ui/core";
import logo from "../../../../assets/images/web-logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-scroll";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  media: {
    height: 50,
    width: 50,
    marginRight: 150,
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 20,
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
    fontSize: "16px",
  },
}));

export default function HeaderResponsive() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const username = JSON.parse(localStorage.getItem("hoTen"));
  const maLoaiNguoiDung = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <NavLink to="/" exact>
              <CardMedia
                image={logo}
                component="img"
                className={classes.media}
              />
            </NavLink>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          { username? (
            <> 
            <Typography>{username}</Typography>
            </>
          ):(
            <>
            <NavLink to="/signin" exact className={classes.textNavLink}>
            <Button color="inherit" className={classes.textButton}>
              <Avatar src="/broken-image.jpg" className={classes.avatar} />
              Đăng Nhập
            </Button>
          </NavLink>
          <NavLink to="/signup" exact className={classes.textNavLink}>
            <Button color="inherit" className={classes.textButton}>
              <Avatar src="/broken-image.jpg" className={classes.avatar} />
              Đăng ký
            </Button>
          </NavLink>
            </>
          )
            
          }
        </div>
        <Divider />
        <List>
        {username? (<>
          {maLoaiNguoiDung === "QuanTri"? (
              <>
              <NavLink to ="/admin"><ListItem button>Admin</ListItem></NavLink></> 
            ):null}
            <NavLink to ="/personalInfo"><ListItem button>My profile</ListItem></NavLink>
            <NavLink to ="/signin" onClick={handleLogout}><ListItem button>Logout</ListItem></NavLink>
             </>
        ): null}
          <Link
            activeClass="active"
            to="movieList"
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button key="Lịch chiếu">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Lịch chiếu" />
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="cinemaGroup"
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button key="Cụm rạp">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Cụm rạp" />
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button key="Tin tức">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Tin tức" />
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="application"
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button key="Ứng dụng">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Ứng dụng" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MovieIcon from "@material-ui/icons/Movie";
import TheatersIcon from "@material-ui/icons/Theaters";
import { CardMedia, Divider } from "@material-ui/core";
import tix from "../../assets/images/web-logo.png";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import { signInAction } from "../../store/actions/auth.action";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(10, 32, 41)",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconSideBar: {
    color: "#bbb",
  },
  textSideBar: {
    color: "#bbb",
    "&:hover": {
      color: "#ff8664",
      textDecoration: "none",
    },
  },
  activeColor: {
    color: "#fa5238",
  },
}));

function AdminTemplate(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{ padding: "15px" }}>
        <img src={tix} alt="tix" style={{ width: "50px", height: "50px" }} />
        <NavLink to="/admin">
          <span style={{ fontSize: "23px", color: "white", padding: "0 10px" }}>
            Dashboard
          </span>
        </NavLink>
      </div>
      <Divider style={{ backgroundColor: "white" }} />
      <List className={classes.mainSideBar}>
        <ListItem>
          <ListItemIcon className={classes.iconSideBar}>
            <PersonOutlineIcon />
          </ListItemIcon>
          <NavLink
            to="/admin/user-management"
            exact
            className={classes.textSideBar}
            activeClassName={classes.activeColor}
          >
            Users
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.iconSideBar}>
            <MovieIcon />
          </ListItemIcon>
          <NavLink
            to="/admin/film-management"
            exact
            className={classes.textSideBar}
            activeClassName={classes.activeColor}
          >
            Films
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.iconSideBar}>
            <TheatersIcon />
          </ListItemIcon>
          <NavLink
            to="/admin/showtime-management"
            exact
            className={classes.textSideBar}
            activeClassName={classes.activeColor}
          >
            Showtime
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <NavLink to="/signin">
            <Button>Đăng nhập</Button>
          </NavLink>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Hi,
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

AdminTemplate.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminTemplate;

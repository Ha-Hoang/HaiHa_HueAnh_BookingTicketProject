import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ShowingFilm from "./showingFilm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: "940px",
    margin: "auto",
    paddingTop: "72px",
  },
  textTab: {
    fontSize: "22px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#000",
    backgroundColor: "#fff",
    transition: "all 0.5s",
    "&:focus": {
      outline: "none",
      fontSize: "26px",
    },
    "&:hover": {
      fontSize: "26px",
    },
  },
  fixAppBar: {
    boxShadow: "none",
    maxWidth: "376px",
    margin: "auto",
  },
}));

export default function MovieList() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root} id="movieList">
      <AppBar position="static" color="default" className={classes.fixAppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.textTabs}
        >
          <Tab
            label="Đang Chiếu"
            {...a11yProps(0)}
            className={classes.textTab}
          />
          <Tab
            label="Sắp Chiếu"
            {...a11yProps(1)}
            className={classes.textTab}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ShowingFilm />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ShowingFilm />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slider from "react-slick";
import { getMovieListAction } from "../../../../store/actions/movie.action";
import ShowingFilm from "./showingFilm";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading.component";

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
    paddingTop: "100px",
  },
  textTab: {
    fontSize: "22px",
    textTransform: "capitalize",
    color: "#000",
    backgroundColor: "#fff",
    transition: "all 0.2s",
    "&:focus": {
      outline: "none",
      fontSize: "24px",
    },
    "&:hover": {
      fontSize: "24px",
    },
  },
  fixAppBar: {
    boxShadow: "none",
    maxWidth: "330px",
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

  const settings = {
    rows: 2,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieListAction());
  }, [dispatch]);

  const movieList = useSelector((state) => state.movie.movieList);
  const loading = useSelector((state) => state.common.loading);

  const renderMovieList = () => {
    return movieList.map((movie, index) => {
      return <ShowingFilm movie={movie} key={index} />;
    });
  };

  if (loading) {
    return <Loading />;
  }
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
            disableRipple={true}
          />
          <Tab
            label="Sắp Chiếu"
            {...a11yProps(1)}
            className={classes.textTab}
            disableRipple={true}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Slider {...settings}>{renderMovieList()}</Slider>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Slider {...settings}>{renderMovieList()}</Slider>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

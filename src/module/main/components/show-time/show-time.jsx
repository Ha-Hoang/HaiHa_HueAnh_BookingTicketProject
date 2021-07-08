import React from "react";
import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  Avatar,
  ListItemAvatar,
  Tab,
  AppBar,
} from "@material-ui/core";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import bhd from "../../../../assets/images/BHD.png";
import bhdstar from "../../../../assets/images/bhd-star-vincom-le-van-viet.png";
import { useSelector } from "react-redux";
import "./show-time.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootList: {
    width: "100%",
    maxWidth: "36ch",
  },
  container: {
    maxWidth: "915px",
    float: "none",
    margin: "auto",
    clear: "both",
  },
  row: {
    border: "1px solid #8080804f",
    borderRadius: "6px",
    backgroundColor: "#fff",
  },
  col2: {
    maxWidth: "74.666667%",
  },
  divider: {
    marginLeft: "15px",
    marginRight: "0px",
    width: "190px",
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  boxRoot: {
    width: "646px",
  },
  listItem: {
    opacity: "0.5",
    transition: "all 0.2s",
    "&:hover": {
      opacity: "1",
      cursor: "pointer",
    },
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  imgTheater: {
    marginRight: "10px",
  },
  address: {
    color: "grey",
    fontSize: "13px",
  },
  showDetail: {
    padding: "18px",
    overflowY: "scroll",
    height: "450px",
  },
}));

export default function ShowTime() {
  useSelector((state) => {
    return state.movie.movieDetail.lichChieu;
  });
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.container}>
      <Grid container className={classes.row}>
        <Grid item lg={3} md={3} sm={2} xs={12} className={classes.col1}>
          <List className={classes.rootList}>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt="bhd" src={bhd} />
              </ListItemAvatar>
              <Typography variant="span">BHD Star Cineplex</Typography>
            </ListItem>

            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt="bhd" src={bhd} />
              </ListItemAvatar>
              <Typography variant="span">BHD Star Cineplex</Typography>
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt="bhd" src={bhd} />
              </ListItemAvatar>
              <Typography variant="span">BHD Star Cineplex</Typography>
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt="bhd" src={bhd} />
              </ListItemAvatar>
              <Typography variant="span">BHD Star Cineplex</Typography>
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt="bhd" src={bhd} />
              </ListItemAvatar>
              <Typography variant="span">BHD Star Cineplex</Typography>
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt="bhd" src={bhd} />
              </ListItemAvatar>
              <Typography variant="span">BHD Star Cineplex</Typography>
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt="bhd" src={bhd} />
              </ListItemAvatar>
              <Typography variant="span">BHD Star Cineplex</Typography>
            </ListItem>
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item lg={9} md={9} sm={10} xs={12} className={classes.col2}>
          <div className={classes.root}>
            <TabContext value={value}>
              <AppBar position="static">
                <TabList
                  onChange={handleChange}
                  indicatorColor="none"
                  textColor="secondary"
                  className={classes.tabList}
                >
                  <Tab label="Thứ 2 5" value="1" disableRipple="true" />
                  <Tab label="Thứ 3 6" value="2" disableRipple="true" />
                  <Tab label="Thứ 4 7" value="3" disableRipple="true" />
                  <Tab label="Thứ 5 8" value="4" disableRipple="true" />
                  <Tab label="Thứ 6 9" value="5" disableRipple="true" />
                  <Tab label="Thứ 7 10" value="6" disableRipple="true" />
                  <Tab label="Chủ Nhật 11" value="7" disableRipple="true" />
                </TabList>
              </AppBar>

              <TabPanel value="1" className={classes.showDetail}>
                <div>
                  <Grid container>
                    <Grid item lg={1} className={classes.imgTheater}>
                      <img src={bhdstar} alt="bhd" className={classes.logo} />
                    </Grid>
                    <Grid item lg={7}>
                      <Typography variant="h6">GLX-Nguyễn Du</Typography>
                      <Typography variant="span" className={classes.address}>
                        116 Nguyễn Du, Q1
                      </Typography>
                    </Grid>
                  </Grid>
                  <div className="typeTiming">
                    <div>
                      <Typography variant="span">2D Digital</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                    <div>
                      <Typography variant="span">2D Lồng Tiếng</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                  </div>
                </div>
                <Divider />
                <div>
                  <Grid container>
                    <Grid item lg={1} className={classes.imgTheater}>
                      <img src={bhdstar} alt="bhd" className={classes.logo} />
                    </Grid>
                    <Grid item lg={7}>
                      <Typography variant="h6">GLX-Nguyễn Du</Typography>
                      <Typography variant="span" className={classes.address}>
                        116 Nguyễn Du, Q1
                      </Typography>
                    </Grid>
                  </Grid>
                  <div className="typeTiming">
                    <div>
                      <Typography variant="span">2D Digital</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                    <div>
                      <Typography variant="span">2D Lồng Tiếng</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                  </div>
                </div>
                <Divider />
                <div>
                  <Grid container>
                    <Grid item lg={1} className={classes.imgTheater}>
                      <img src={bhdstar} alt="bhd" className={classes.logo} />
                    </Grid>
                    <Grid item lg={7}>
                      <Typography variant="h6">GLX-Nguyễn Du</Typography>
                      <Typography variant="span" className={classes.address}>
                        116 Nguyễn Du, Q1
                      </Typography>
                    </Grid>
                  </Grid>
                  <div className="typeTiming">
                    <div>
                      <Typography variant="span">2D Digital</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                    <div>
                      <Typography variant="span">2D Lồng Tiếng</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                  </div>
                </div>
                <Divider />
                <div>
                  <Grid container>
                    <Grid item lg={1} className={classes.imgTheater}>
                      <img src={bhdstar} alt="bhd" className={classes.logo} />
                    </Grid>
                    <Grid item lg={7}>
                      <Typography variant="h6">GLX-Nguyễn Du</Typography>
                      <Typography variant="span" className={classes.address}>
                        116 Nguyễn Du, Q1
                      </Typography>
                    </Grid>
                  </Grid>
                  <div className="typeTiming">
                    <div>
                      <Typography variant="span">2D Digital</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                    <div>
                      <Typography variant="span">2D Lồng Tiếng</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                  </div>
                </div>
                <Divider />
                <div>
                  <Grid container>
                    <Grid item lg={1} className={classes.imgTheater}>
                      <img src={bhdstar} alt="bhd" className={classes.logo} />
                    </Grid>
                    <Grid item lg={7}>
                      <Typography variant="h6">GLX-Nguyễn Du</Typography>
                      <Typography variant="span" className={classes.address}>
                        116 Nguyễn Du, Q1
                      </Typography>
                    </Grid>
                  </Grid>
                  <div className="typeTiming">
                    <div>
                      <Typography variant="span">2D Digital</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                    <div>
                      <Typography variant="span">2D Lồng Tiếng</Typography>
                      <a href="/">
                        <span className="start-time">13:00</span>
                      </a>
                      <a href="/">
                        <span className="start-time">16:55</span>
                      </a>
                      <a href="/">
                        <span className="start-time">21:05</span>
                      </a>
                    </div>
                  </div>
                </div>
                <Divider />
              </TabPanel>

              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
              <TabPanel value="4">Item Four</TabPanel>
              <TabPanel value="5">Item Five</TabPanel>
              <TabPanel value="6">Item Six</TabPanel>
              <TabPanel value="7">Item Six</TabPanel>
            </TabContext>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

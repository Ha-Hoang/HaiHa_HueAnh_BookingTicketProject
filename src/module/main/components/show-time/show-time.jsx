import React, { Component } from "react";
import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  Avatar,
  ListItemAvatar,
  Box,
  Tab,
} from "@material-ui/core";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { withStyles } from "@material-ui/styles";
import { style } from "./show-time.style";
import bhd from "../../../../assets/images/BHD.png";
import bhdstar from "../../../../assets/images/bhd-star-vincom-le-van-viet.png";

class ShowTime extends Component {
  state = {
    value: "1",
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    const { classes } = this.props;
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
          <Grid item lg={8} md={8} sm={9} xs={12}>
            <Box className={classes.boxRoot}>
              <TabContext value={this.state.value}>
                <Box>
                  <TabList
                    onChange={this.handleChange}
                    indicatorColor="none"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    <Tab label="Thứ 2 5" value="1" />
                    <Tab label="Thứ 3 6" value="2" />
                    <Tab label="Thứ 4 7" value="3" />
                    <Tab label="Thứ 5 8" value="4" />
                    <Tab label="Thứ 6 9" value="5" />
                    <Tab label="Thứ 7 10" value="6" />
                    <Tab label="Chủ Nhật 11" value="7" />
                  </TabList>
                </Box>
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
                </TabPanel>

                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item Four</TabPanel>
                <TabPanel value="5">Item Five</TabPanel>
                <TabPanel value="6">Item Six</TabPanel>
                <TabPanel value="7">Item Six</TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(style)(ShowTime);

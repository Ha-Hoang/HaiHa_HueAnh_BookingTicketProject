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
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import bhd from "../../../../assets/images/BHD.png";
import bhdstar from "../../../../assets/images/bhd-star-vincom-le-van-viet.png";
import { useSelector } from "react-redux";

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
    height: "713px",
    "@media (max-width: 768px)": {
      height: "1300px",
    },
  },
  col2: {
    maxWidth: "74.666667%",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },
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
    height: "667px",
  },
  tabList: {
    // padding: "10px 0",
  },
  tab: {
    width: "100%",
    flexShrink: "1",
    padding: "0",
    fontSize: "16px",
    color: "black",
    textTransform: "capitalize",
    "&:focus": {
      outline: "none",
    },
  },
  table: {
    width: "250px",
  },
  tableCell: {
    border: "none",
    padding: "5px",
  },
  time: {
    padding: "10px",
  },
  textTime: {
    color: "#43a047",
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
              <AppBar position="static" style={{ boxShadow: "none" }}>
                <TabList
                  onChange={handleChange}
                  indicatorColor="none"
                  textColor="secondary"
                  className={classes.tabList}
                  variant="scrollable"
                >
                  <Tab
                    className={classes.tab}
                    label="Thứ 2 5"
                    value="1"
                    disableRipple="true"
                    wrapped={true}
                  />
                  <Tab
                    className={classes.tab}
                    label="Thứ 3 6"
                    value="2"
                    disableRipple="true"
                  />
                  <Tab
                    className={classes.tab}
                    label="Thứ 4 7"
                    value="3"
                    disableRipple="true"
                  />
                  <Tab
                    className={classes.tab}
                    label="Thứ 5 8"
                    value="4"
                    disableRipple="true"
                  />
                  <Tab
                    className={classes.tab}
                    label="Thứ 6 9"
                    value="5"
                    disableRipple="true"
                  />
                  <Tab
                    className={classes.tab}
                    wrapped
                    label="Thứ 7 10"
                    value="6"
                    disableRipple="true"
                  />
                  <Tab
                    className={classes.tab}
                    label="Chủ Nhật 11"
                    value="7"
                    disableRipple="true"
                  />
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
                  <div className={classes.time}>
                    <Table className={classes.table}>
                      <TableBody>
                        <TableRow>
                          <TableCell className={classes.tableCell}>
                            2D DIGITAL
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            <Typography
                              className={classes.textTime}
                              variant="h5"
                            >
                              13:00
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            <Typography
                              className={classes.textTime}
                              variant="h5"
                            >
                              13:00
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            <Typography
                              className={classes.textTime}
                              variant="h5"
                            >
                              13:00
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            <Typography
                              className={classes.textTime}
                              variant="h5"
                            >
                              13:00
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.tableCell}>
                            2D L.TIẾNG
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            <Typography
                              className={classes.textTime}
                              variant="h5"
                            >
                              13:00
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            <Typography
                              className={classes.textTime}
                              variant="h5"
                            >
                              13:00
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            <Typography
                              className={classes.textTime}
                              variant="h5"
                            >
                              13:00
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            <Typography
                              className={classes.textTime}
                              variant="h5"
                            >
                              13:00
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
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

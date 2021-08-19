import React, { useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { Button, FormControl, Select,Typography,} from "@material-ui/core";
import { IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TablePagination from '@material-ui/core/TablePagination'
import { getListUserAdminAction } from "../../../../store/actions/userAdmin.action";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles((theme) => ({
  rootSearch: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "20px 0",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  table: {
    minWidth: 700,
  },
  container: {
    maxHeight: 500,
  },
  rootSearch: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "20px 0",
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));




export default function UserManagement() {
  const classes = useStyles();
  
  const dispatch = useDispatch();
  
  const row = useSelector((state) => {
    return state.userAdmin.listUser;
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const [maNhom, setMaNhom] = useState("GP01");
  const handleChange = (event) => {
    setMaNhom(event.target.value);
    dispatch(getListUserAdminAction(event.target.value));
  };
  useEffect(() => {
    dispatch(getListUserAdminAction("GP01"));
  }, []);

  const renderListUser = () => {
    return row?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => {
      return (
        <StyledTableRow key={index}>
          <StyledTableCell align="center">{index + 1}</StyledTableCell>
          
            <StyledTableCell align="center">{user.taiKhoan}</StyledTableCell>
         
          <StyledTableCell align="center">
            {user.matKhau}
          </StyledTableCell>
          <StyledTableCell align="center">
            {user.hoTen}
          </StyledTableCell>
          <StyledTableCell align="center">
            {user.email}
          </StyledTableCell>
          
          <StyledTableCell align="center">
              {user.soDt  
              }
          </StyledTableCell>
          <StyledTableCell >
          <div style={{display: "flex", alignItem:"center", justifyContent:"center"}}>
              <NavLink to={`/admin/user-management/edit-user/${user.taiKhoan}`} style={{padding: "0"}}>
              <EditIcon />
              </NavLink>
              <Button style={{padding: "0"}}><DeleteIcon/></Button>
              </div>
          </StyledTableCell>
        </StyledTableRow>
      );
    }); 
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <h5>Quản lý người dùng</h5>
      <NavLink to ="/admin/user-management/add-user">
        <Button>+Thêm người dùng</Button>
      </NavLink>
      <Paper component="form" className={classes.rootSearch}>
        <InputBase className={classes.input} placeholder="Tìm kiếm.." />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Typography style={{ paddingRight: "20px" }}>Mã nhóm</Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            native
            value={maNhom.value}
            onChange={handleChange}
          >
            <option value="GP01" >GP01</option>
            <option value="GP02">GP02</option>
            <option value="GP03">GP03</option>
            <option value="GP04">GP04</option>
            <option value="GP05">GP05</option>
            <option value="GP06">GP06</option>
            <option value="GP07">GP07</option>
            <option value="GP08">GP08</option>
            <option value="GP09">GP09</option>
            <option value="GP010">GP10</option>
          </Select>
        </FormControl>
        </div>
      <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Số thứ tự</StyledTableCell>
            <StyledTableCell align="center">Tài khoản</StyledTableCell>
            <StyledTableCell align="center">Mật khẩu</StyledTableCell>
            <StyledTableCell align="center">Họ tên</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">SDT</StyledTableCell>
            <StyledTableCell align="center">Tác vụ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderListUser()}</TableBody>
      </Table>
    </TableContainer>
    <TablePagination

        component="div"
         count={row.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

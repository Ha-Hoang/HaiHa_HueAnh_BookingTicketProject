import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { NavLink } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Typography,
} from "@material-ui/core";
import { IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListUserAdmin } from "../../../../store/actions/userAdmin.action";
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
}));
const columns = [
  { field: "id", headerName: "STT", width: 110 },

  {
    field: "taiKhoan",
    headerName: "Tài Khoản",
    width: 180,
    editable: true,
  },
  {
    field: "matKhau",
    headerName: "Mật khẩu",
    width: 180,
    editable: true,
  },
  {
    field: "hoTen",
    headerName: "Họ tên",
    width: 180,
    editable: true,
  },
  {
    field: "soDT",
    headerName: "SDT",
    width: 180,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
    editable: true,
  },
  {
    field: "-",
    headerName: "",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <>
          <NavLink style={{ color: "black" }}>
            {" "}
            <EditIcon />
          </NavLink>
          <span
            key={2}
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => {
              if (window.confirm("Bạn có chắc muốn xóa" + params.row.tenPhim)) {
                //gọi action
              }
            }}
          >
            {" "}
            <DeleteIcon />
          </span>
        </>
      );
    },
  },
];

const rows = [];

export default function UserManagement() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUserAdmin());
  }, []);
  const classes = useStyles();
  return (
    <div style={{ height: 400, width: "100%" }}>
      <h5>Quản lý người dùng</h5>
      <NavLink to="/admin/user-management/add-user">
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
            // value={state.age}
            // onChange={handleChange}
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
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Button, TextField } from "@material-ui/core";
import { getMovieListAction } from "../../../../store/actions/movie.action";
import { deleteFilmInfoAction } from "../../../../store/actions/filmAdmin.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Format from "date-format";
import { NavLink } from "react-router-dom";
import EventIcon from "@material-ui/icons/Event";

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

export default function FilmManagement() {
  const classes = useStyles();
  const columns = [
    {
      field: "maPhim",
      headerName: "Mã Phim",
      width: 130,
    },
    {
      field: "tenPhim",
      headerName: "Tên Phim",
      width: 150,
      editable: true,
    },
    {
      field: "hinhAnh",
      headerName: "Hình Ảnh",
      width: 130,
      editable: true,
      renderCell: (params, index) => (
        <img
          src={params.value}
          alt="hinhAnh"
          width={50}
          height={50}
          onError={(e) => {
            e.target.onError = null;
            e.target.src = "https://picsum.photos/50/50";
          }}
        />
      ),
    },
    {
      field: "moTa",
      headerName: "Mô Tả",
      width: 200,
      editable: true,
    },
    {
      field: "maNhom",
      headerName: "Mã nhóm",
      width: 140,
      editable: true,
    },
    {
      field: "ngayKhoiChieu",
      headerName: "Ngày Khởi Chiếu",
      type: "date",
      valueFormatter: (params) => {
        return Format("dd/MM/yyyy", new Date(params.value));
      },
      width: 180,
      editable: true,
    },
    {
      field: "-",
      headerName: "",
      sortable: false,
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <NavLink
              key={1}
              to={`/admin/film-management/edit-film/${params?.row.maPhim}`}
              style={{ color: "blue" }}
            >
              {" "}
              <EditIcon />
            </NavLink>
            <span
              key={2}
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa phim" + params.row.tenPhim
                  )
                ) {
                  //gọi action
                  dispatch(deleteFilmInfoAction(params.row.maPhim));
                }
              }}
            >
              {" "}
              <DeleteIcon />
            </span>
            <NavLink key={3} to={`/admin/film-management/show-time/${params?.row.maPhim}`} style={{ color: "red" }}>
              <EventIcon />
            </NavLink>
          </>
        );
      },
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieListAction());
  }, []);
  const rows = useSelector((state) => state.movie.movieList);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h5>Quản lý phim</h5>
      <NavLink to="/admin/film-management/add-film">
        <Button>+Thêm phim</Button>
      </NavLink>
      <Paper component="form" className={classes.rootSearch}>
        <TextField className={classes.input} type="search" placeholder="Nhập tên phim..." />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <DataGrid
        rows={rows}
        getRowId={(row) => row.maPhim}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
      />
    </div>
  );
}

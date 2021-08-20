import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

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


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    maxHeight: 440,
  },
});

export default function BookingHistoryList() {
  const classes = useStyles();

  const bookingHistoryList = useSelector((state) => {
    return state.personal.personalInfo.thongTinDatVe;
  });

  const renderBookingHistory = () => {
    return bookingHistoryList?.map((bookingHistory, index) => {
      return (
        <StyledTableRow key={index}>
          <StyledTableCell align="center">{index + 1}</StyledTableCell>
          
            <StyledTableCell align="center">{bookingHistory.danhSachGhe[0].tenHeThongRap}</StyledTableCell>
         
          <StyledTableCell align="center">
            {bookingHistory.tenPhim}
          </StyledTableCell>
          <StyledTableCell align="center">
            {bookingHistory.ngayDat}
          </StyledTableCell>
          <StyledTableCell align="center">
            {bookingHistory.giaVe}
          </StyledTableCell>
          {/* tên ghế */}
          <StyledTableCell align="center">
              {bookingHistory.danhSachGhe.length    
              }
          </StyledTableCell>
          <StyledTableCell align="center">{bookingHistory.danhSachGhe.map((ghe,index)=>{
              return <span> {ghe.tenGhe}</span>
          })}</StyledTableCell>
        </StyledTableRow>
      );
    }); 
  };

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Số thứ tự</StyledTableCell>
            <StyledTableCell align="center">Tên cụm rạp</StyledTableCell>
            <StyledTableCell align="center">Tên phim</StyledTableCell>
            <StyledTableCell align="center">Ngày đặt</StyledTableCell>
            <StyledTableCell align="center">Giá vé</StyledTableCell>
            <StyledTableCell align="center">Số lượng</StyledTableCell>
            <StyledTableCell align="center">Tên ghế</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderBookingHistory()}</TableBody>
      </Table>
      
    </TableContainer>
  );
}

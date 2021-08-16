import axios from "axios";
import { baseUrl, GET, POST } from "../configs/api";

export const getListBookingAPI = (maLichChieu) => {
  return axios({
    url: `${baseUrl}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    method: GET,
  });
};

export const postBookingInfoAPI = (maLichChieu, danhSachVe) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));
  return axios({
    url: `${baseUrl}/QuanLyDatVe/DatVe`,
    method: POST,
    data: {
      maLichChieu,
      danhSachVe,
      taiKhoanNguoiDung: taiKhoan,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

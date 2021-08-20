import axios from "axios";
import { baseUrl, GET } from "../configs/api";

export const getListMovieAPI = (tenPhim = "") => {
  if (tenPhim.trim() !== "") {
    return axios({
      url: `${baseUrl}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`,
      method: GET,
    });
  }
  return axios({
    url: `${baseUrl}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: GET,
  });
};

export const getMovieDetailAPI = (maPhim) => {
  return axios({
    url: `${baseUrl}/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
    method: GET,
  });
};

export const getScheduleInfoAPI = (maPhim) => {
  return axios({
    url: `${baseUrl}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    method: GET,
  });
};
import axios from "axios";
import { baseUrl, GET } from "../configs/api";

export const getListMovieAPI = () => {
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

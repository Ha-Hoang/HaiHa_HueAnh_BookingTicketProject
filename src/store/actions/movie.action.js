import axios from "axios";
import { GET_MOVIE_DETAIL, GET_MOVIE_LIST } from "../constants/movie.const";

export const getMovieListAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      dispatch({
        type: GET_MOVIE_LIST,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieDetailAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

import {
  postFilmInfoApi,
  UpdateFilmInfoApi,
  deleteFilmInfoApi,
  showTimeApi,
} from "../../api/filmAdmin.api";
import { getMovieListAction } from "./movie.action";
import { history } from "../../App";

export const postFilmInfoAction = (formData) => {
  return async (dispatch) => {
    try {
      const res = await postFilmInfoApi(formData);
      alert("Thêm Phim Thành Công !");
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const updateFilmInfoAction = (formData) => {
  return async (dispatch) => {
    try {
      const res = await UpdateFilmInfoApi(formData);
      console.log(res.data);
      alert("Cập nhật phim thành công !");

      dispatch(getMovieListAction());
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

export const deleteFilmInfoAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await deleteFilmInfoApi(maPhim);
      console.log(res.data);
      alert("Xóa phim thành công !");

      //sau khi xóa lấy lại ds phim mới
      dispatch(getMovieListAction());
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

export const showTimeAction = (thongTinLichChieu) => {
  return async (dispatch) => {
    try {
      const res = await showTimeApi(thongTinLichChieu);
      alert(res.data);

    } catch (err) {
      console.log(err);
    }
  }
}
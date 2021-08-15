import { postFilmInfoApi, UpdateFilmInfoApi } from "../../api/filmAdmin.api";
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
      alert("Cập nhật phim thành công !");
      console.log(res.data);

      // dispatch(getMovieListAction());
      // history.push("/admin/film-management");
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

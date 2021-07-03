import { getListMovieAPI, getMovieDetailAPI } from "../../api/movie.api";
import { GET_MOVIE_DETAIL, GET_MOVIE_LIST } from "../constants/movie.const";

export const getMovieListAction = () => {
  return async (dispatch) => {
    try {
      const res = await getListMovieAPI();
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
      const res = await getMovieDetailAPI(maPhim);
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

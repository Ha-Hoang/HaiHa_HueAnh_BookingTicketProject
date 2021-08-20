import { getListMovieAPI, getMovieDetailAPI } from "../../api/movie.api";
import { GET_MOVIE_DETAIL, GET_MOVIE_LIST } from "../constants/movie.const";
import { startLoadingAction, stopLoadingAction } from "./common.action";

export const getMovieListAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingAction());

      const res = await getListMovieAPI(tenPhim);
      dispatch({
        type: GET_MOVIE_LIST,
        payload: res.data,
      });

      dispatch(stopLoadingAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieDetailAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //start loading
      dispatch(startLoadingAction());

      //tác vụ mất tgian
      const res = await getMovieDetailAPI(maPhim);
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: res.data,
      });

      //stop loading
      dispatch(stopLoadingAction());
    } catch (err) {
      console.log(err);
    }
  };
};


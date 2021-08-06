import {
  getCinemaDetailAPI,
  getCinemaGroupAPI,
  getCinemaListAPI,
} from "../../api/cinema.api";
import {
  GET_CINEMA_DETAIL,
  GET_CINEMA_GROUP,
  GET_CINEMA_LIST,
} from "../constants/cinema.const";

export const getCinemaListAction = () => {
  return async (dispatch) => {
    try {
      const res = await getCinemaListAPI();
      dispatch({
        type: GET_CINEMA_LIST,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCinemaGroupAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const res = await getCinemaGroupAPI(maHeThongRap);
      dispatch({
        type: GET_CINEMA_GROUP,
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCinemaDetailAction = () => {
  return async (dispatch) => {
    try {
      const res = await getCinemaDetailAPI();
      dispatch({
        type: GET_CINEMA_DETAIL,
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

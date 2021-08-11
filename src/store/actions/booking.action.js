import { getListBookingAPI } from "../../api/booking.api";
import {
  CHOICE_CHAIR,
  GET_BOOKING_LIST,
  GET_CHAIR_LIST,
} from "../constants/booking.const";
import { startLoadingAction, stopLoadingAction } from "./common.action";

export const getBookingTicketAction = (bookingcode) => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingAction());

      const res = await getListBookingAPI(bookingcode);
      dispatch({
        type: GET_BOOKING_LIST,
        payload: res.data.thongTinPhim,
      });

      dispatch(stopLoadingAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export const getChairListAction = (bookingcode) => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingAction());

      const res = await getListBookingAPI(bookingcode);
      dispatch({
        type: GET_CHAIR_LIST,
        payload: res.data.danhSachGhe,
      });

      dispatch(stopLoadingAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export const choiceChairAction = (chair) => {
  return {
    type: CHOICE_CHAIR,
    payload: chair,
  };
};

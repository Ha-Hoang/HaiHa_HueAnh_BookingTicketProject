import { getListBookingAPI } from "../../api/booking.api";
import { GET_BOOKING_LIST } from "../constants/booking.const";
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

import { GET_BOOKING_LIST } from "../constants/booking.const";

const initialState = {
  bookingList: {},
};

export const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKING_LIST: {
      state.bookingList = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

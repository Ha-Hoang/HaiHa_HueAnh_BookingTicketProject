import {
  CHOICE_CHAIR,
  GET_BOOKING_LIST,
  GET_CHAIR_LIST,
} from "../constants/booking.const";

const initialState = {
  bookingList: {},
  listChair: [],
};

export const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKING_LIST: {
      state.bookingList = payload;
      return { ...state };
    }
    case GET_CHAIR_LIST: {
      state.listChair = payload;
      return { ...state };
    }
    case CHOICE_CHAIR: {
      let listChair = [...state.listChair];
      const index = listChair.findIndex(
        (chair) => chair.maGhe === payload.maGhe
      );
      if (index !== -1) {
        let oldChair = listChair[index];
        let newChair = { ...oldChair, dangChon: !oldChair.dangChon };
        listChair[index] = newChair;
        state.listChair = listChair;
      }
      return { ...state };
    }
    default:
      return state;
  }
};

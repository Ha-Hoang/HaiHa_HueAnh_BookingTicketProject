import { GET_CINEMA_GROUP, GET_CINEMA_LIST } from "../constants/cinema.const";

const initialState = {
  cinemaList: [],
  cinemaGroup: [],
};

export const cinemaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CINEMA_LIST: {
      state.cinemaList = payload;
      return { ...state };
    }
    case GET_CINEMA_GROUP: {
      state.cinemaGroup = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

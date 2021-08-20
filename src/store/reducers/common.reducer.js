import { GET_INFO_USER_LOGIN, START_LOADING, STOP_LOADING } from "../constants/common.const";

const initialState = {
  loading: false,
};

export const CommonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING: {
      state.loading = true;
      return { ...state };
    }
    case STOP_LOADING: {
      state.loading = false;
      return { ...state };
    }
    case GET_INFO_USER_LOGIN:{
      
    }
    default:
      return state;
  }
};



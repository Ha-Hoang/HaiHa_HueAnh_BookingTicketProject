import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_LIST,
  GET_SCHEDULE_INFO,
} from "../constants/movie.const";

const initialState = {
  movieList: [],
  movieDetail: {},
  scheduleInfo: {},
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST: {
      state.movieList = payload;
      return { ...state };
    }
    case GET_MOVIE_DETAIL: {
      state.movieDetail = payload;
      return { ...state };
    }
    case GET_SCHEDULE_INFO: {
      state.scheduleInfo = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

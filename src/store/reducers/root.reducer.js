import { combineReducers } from "redux";
import { cinemaReducer } from "./cinema.reducer";
import { CommonReducer } from "./common.reducer";
import { movieReducer } from "./movie.reducer";

export const rootReducer = combineReducers({
  movie: movieReducer,
  common: CommonReducer,
  cinema: cinemaReducer,
});

import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { bookingReducer } from "./booking.reducer";
import { cinemaReducer } from "./cinema.reducer";
import { CommonReducer } from "./common.reducer";
import { movieReducer } from "./movie.reducer";
import { personalInfoReducer} from "./personal-info.reducer";
import { userAdminReducer } from "./userAdmin.reducer";

export const rootReducer = combineReducers({
  movie: movieReducer,
  common: CommonReducer,
  cinema: cinemaReducer,
  auth: authReducer,
  personal: personalInfoReducer,
  booking: bookingReducer,
  userAdmin: userAdminReducer,
});

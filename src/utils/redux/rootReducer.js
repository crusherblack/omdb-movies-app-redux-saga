import { combineReducers } from "redux";
import movies from "../../pages/home/redux/reducers";

const rootReducer = combineReducers({
  movies: movies,
});

export default rootReducer;

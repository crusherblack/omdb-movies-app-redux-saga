import { combineReducers } from "redux";
import movies from "pages/movie/redux/reducers";

const rootReducer = combineReducers({
  movies: movies,
});

export default rootReducer;

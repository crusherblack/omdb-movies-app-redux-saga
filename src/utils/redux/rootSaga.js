import { all } from "redux-saga/effects";
import movieSaga from "pages/movie/redux/sagas";

export default function* rootSaga() {
  yield all([movieSaga()]);
}

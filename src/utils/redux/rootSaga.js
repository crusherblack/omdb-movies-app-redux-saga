import { all } from "redux-saga/effects";
import movieSaga from "../../pages/home/redux/sagas";

export default function* rootSaga() {
  yield all([movieSaga()]);
}

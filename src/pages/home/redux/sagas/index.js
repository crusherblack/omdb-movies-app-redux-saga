import { call, put, takeLatest, takeEvery, delay } from "redux-saga/effects";

import * as type from "../types";
import { api, apiKey } from "../../../../utils/api";

async function getApi(payload, type) {
  try {
    let url = `?apikey=${apiKey}&s=${payload.search}&page=${payload.page}`;

    if (type === "DETAIL") {
      url = `?apikey=${apiKey}&i=${payload.search}`;
    }

    const response = await api(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function* getMovies(action) {
  try {
    yield delay(500);
    const movies = yield call(getApi, action.payload, "SEARCH");

    yield put({
      type: type.GET_MOVIES_SUCCESS,
      movies: movies.Search,
      total: movies.totalResults,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: type.GET_MOVIES_FAILED, message: error.message });
  }
}

function* getLoadMoreMovies(action) {
  try {
    yield delay(500);
    const movies = yield call(getApi, action.payload, "SEARCH");

    yield put({
      type: type.GET_MORE_MOVIES_SUCCESS,
      movies: movies.Search,
      total: movies.totalResults,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: type.GET_MORE_MOVIES_FAILED, message: error.message });
  }
}

function* getMovie(action) {
  console.log("get movie", action);
  try {
    const movie = yield call(getApi, action.payload, "DETAIL");

    yield put({
      type: type.GET_MOVIE_SUCCESS,
      movie,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: type.GET_MOVIE_FAILED, message: error.message });
  }
}

function* userSaga() {
  yield takeLatest(type.GET_MOVIES_REQUESTED, getMovies);
  yield takeLatest(type.GET_MORE_MOVIES_REQUESTED, getLoadMoreMovies);
  yield takeEvery(type.GET_MOVIE_REQUESTED, getMovie);
}

export default userSaga;

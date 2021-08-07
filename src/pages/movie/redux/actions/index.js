import * as type from "../types";

export function getMovies(payload) {
  return {
    type: type.GET_MOVIES_REQUESTED,
    payload,
  };
}

export function getLoadMoreMovies(payload) {
  return {
    type: type.GET_MORE_MOVIES_REQUESTED,
    payload,
  };
}

export function getMovie(payload) {
  return {
    type: type.GET_MOVIE_REQUESTED,
    payload,
  };
}

export function clearMovie() {
  return {
    type: type.CLEAR_MOVIE,
  };
}

export function changeSearchValue(payload) {
  return {
    type: type.CHANGE_SEARCH_VALUE,
    payload,
  };
}

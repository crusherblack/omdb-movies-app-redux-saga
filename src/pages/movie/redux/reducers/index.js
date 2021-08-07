import * as type from "../types";

const initialState = {
  movies: [],
  loading: false,
  error: null,
  search: "batman",
  total: 0,
  movie: null,
  movieLoading: false,
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case type.GET_MOVIES_REQUESTED:
    case type.GET_MORE_MOVIES_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.GET_MOVIE_REQUESTED:
      return {
        ...state,
        movieLoading: true,
      };

    case type.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies || [],
        total: +action.total,
      };

    case type.GET_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.movie || null,
      };

    case type.GET_MORE_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.movies],
        total: +action.total,
      };

    case type.CHANGE_SEARCH_VALUE:
      return {
        ...state,
        search: action.payload,
      };

    case type.GET_MOVIES_FAILED:
    case type.GET_MORE_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.CLEAR_MOVIE:
      return {
        ...state,
        movie: null,
      };

    case type.GET_MOVIE_FAILED:
      return {
        ...state,
        movieLoading: false,
        error: action.message,
      };

    default:
      return state;
  }
}

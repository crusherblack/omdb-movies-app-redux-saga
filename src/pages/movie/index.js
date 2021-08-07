import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getMovies,
  getLoadMoreMovies,
  getMovie,
  clearMovie,
  changeSearchValue,
} from "./redux/actions";

import Search from "pages/movie/component/search";
import List from "pages/movie/component/list";
import Alert from "pages/movie/component/alert";
import Error from "pages/movie/component/error";
import LoadMore from "pages/movie/component/loadmore";
import Modal from "pages/movie/component/modal";
import Loading from "components/loading";

import "./style/style.css";

const Movie = () => {
  const dispatch = useDispatch();

  //define local state, to handle state refersh every time change page
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  //get all state from movies reducer
  const { movies, loading, error, search, total, movie } = useSelector(
    (state) => state.movies
  );

  //fetch for the first time and listen to state change, if state change fire action
  useEffect(() => {
    setPage(1);
    setIsLastPage(false);
    dispatch(
      getMovies({
        search,
        page,
      })
    );
  }, [search]);

  useEffect(() => {
    if (!movie) return;

    setIsModalVisible(true);
  }, [movie]);

  //show movie poster modal
  const getMovieById = (id) => {
    dispatch(
      getMovie({
        search: id,
      })
    );
  };

  const searchMovie = (value) => {
    dispatch(changeSearchValue(value));
  };

  const closeModal = () => {
    dispatch(clearMovie());
    setIsModalVisible(false);
  };

  //handle load more infinity scroll
  const loadMoreMovies = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (page >= 2) {
      dispatch(
        getLoadMoreMovies({
          search,
          page,
        })
      );
    }
  }, [page]);

  //handle infinity scroll
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (Math.ceil(total / 10) <= page) {
        setIsLastPage(true);
      }
      if (isLastPage || loading) return;
      loadMoreMovies();
      setIsLastPage(false);
    }
  };

  return (
    <div className="bg-dark movies-container">
      <div className="container px-5 py-5 ">
        <div className="row gy-5 gx-5">
          <Search search={search} searchMovie={searchMovie} />
          {loading && <Loading />}
          <List movies={movies} getMovieById={getMovieById} />
          <Alert movies={movies} loading={loading} error={error} />
          <Error error={error} loading={loading} />
          <LoadMore movies={movies} loading={loading} isLastPage={isLastPage} />
          {movie && (
            <Modal
              isModalVisible={isModalVisible}
              closeModal={closeModal}
              movie={movie}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;

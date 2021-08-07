import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getMovies,
  getLoadMoreMovies,
  getMovie,
  clearMovie,
} from "./redux/actions";

import Card from "pages/home/component/card";
import Search from "pages/home/component/search";
import Modal from "pages/home/component/modal";

import "./style/style.css";

const Home = () => {
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

  //handle load more infinity scroll
  const loadMoreMovies = () => {
    setPage((prev) => prev + 1);

    dispatch(
      getLoadMoreMovies({
        search,
        page,
      })
    );
  };

  //show movie poster modal
  const getMovieById = (id) => {
    dispatch(
      getMovie({
        search: id,
      })
    );
  };

  const closeModal = () => {
    dispatch(clearMovie());
    setIsModalVisible(false);
  };

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
    <div
      className="bg-dark"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="container px-5 py-5 ">
        <div className="row gy-5 gx-5">
          <Search />
          {loading && (
            <div className="d-flex justify-content-center align-items-center ">
              <span
                className="spinner-border spinner-border-sm bg-white"
                role="status"
                aria-hidden="true"
              ></span>
            </div>
          )}
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <div
                className="col-sm-3"
                key={movie.imdbID + movie.Title + index}
                onClick={() => {
                  getMovieById(movie.imdbID);
                }}
              >
                <Card movie={movie} />
              </div>
            ))}
          {movies.length === 0 && !loading && (
            <p className="text-white ">No Movies Available!</p>
          )}
          {error && !loading && <p>{error}</p>}
          {movies.length > 0 && (
            <button
              className="btn btn-primary btn-block"
              onClick={loadMoreMovies}
              disabled={true}
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              {isLastPage ? "End Of Page" : " Load More"}{" "}
            </button>
          )}
        </div>
      </div>
      {movie && (
        <Modal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          movie={movie}
        />
      )}
    </div>
  );
};

export default Home;

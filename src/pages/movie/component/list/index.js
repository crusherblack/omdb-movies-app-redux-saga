import React from "react";

import PropTypes from "prop-types";

import Card from "pages/movie/component/card";

const List = ({ movies, getMovieById }) => {
  return (
    movies.length > 0 &&
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
    ))
  );
};

List.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovieById: PropTypes.func.isRequired,
};

export default List;

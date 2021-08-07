import React from "react";

import PropTypes from "prop-types";

const LoadMore = ({ movies, loading, isLastPage }) => {
  return (
    movies.length > 0 && (
      <button className="btn btn-primary btn-block" disabled={true}>
        {loading && (
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        )}
        {isLastPage ? "End Of Page" : " Load More"}{" "}
      </button>
    )
  );
};

LoadMore.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
};

export default LoadMore;

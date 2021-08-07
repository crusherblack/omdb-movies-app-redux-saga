import React from "react";

import PropTypes from "prop-types";

const Alert = ({ movies, loading, error }) => {
  return (
    movies.length === 0 &&
    !loading &&
    !error && (
      <div>
        <div className="alert alert-primary" role="alert">
          <b> No Movies Available!</b>
        </div>
      </div>
    )
  );
};

Alert.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Alert;

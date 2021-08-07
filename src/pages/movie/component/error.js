import React from "react";

import PropTypes from "prop-types";

const Error = ({ error, loading }) => {
  return (
    error &&
    !loading && (
      <div>
        <div className="alert alert-danger" role="alert">
          <b> {error}</b>
        </div>
      </div>
    )
  );
};

Error.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Error;

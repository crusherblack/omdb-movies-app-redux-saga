import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center ">
        <span
          className="spinner-border spinner-border-sm bg-white"
          role="status"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  );
};

export default Loading;

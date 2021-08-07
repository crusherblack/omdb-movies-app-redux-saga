import React from "react";

import { useHistory } from "react-router-dom";

import "./style/style.css";

const Home = () => {
  const history = useHistory();

  return (
    <div className="home-container">
      <h1 className="text-white mb-3">OMDb Apps</h1>
      <button
        className="btn-warning btn-lg"
        onClick={() => history.push("/movies")}
      >
        <b>Start Now</b>
      </button>
    </div>
  );
};

export default Home;

import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card px-0 py-0 movie-card">
      <div className="card-body  movie-card-body bg-dark  ">
        <img src={movie.Poster} alt={movie.Title} className="card-image " />
        <h5 className="card-title mt-3 text-white text-truncate">
          {movie.Title}
        </h5>
        <p className="card-text text-secondary">{movie.Year}</p>
      </div>
    </div>
  );
};

export default Card;

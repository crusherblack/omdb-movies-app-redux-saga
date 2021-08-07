import React from "react";

import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomText = ({ content, title, center }) => {
  return (
    <div className={`custom-text-container ${center && "text-center"}`}>
      <p>{content}</p>
      <span className="text-secondary">{title}</span>
    </div>
  );
};

const DetailMovieModal = ({ isModalVisible, closeModal, movie }) => {
  const {
    Poster,
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    imdbRating,
    imdbVotes,
    Language,
  } = movie;

  return (
    <Modal
      size="lg"
      show={isModalVisible}
      onHide={closeModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Body className="bg-dark text-white">
        <div className="row">
          <div className="col-sm-4">
            <img src={Poster} alt={Title} className="card-image " />
            <div className="d-flex justify-content-evenly mt-3">
              <CustomText content={imdbRating} title="IMDB Rating" center />
              <CustomText content={imdbVotes} title="IMDB Votes" center />
            </div>
          </div>
          <div className="col-sm-8">
            <h3>{Title}</h3>
            <h4 className="text-secondary mb-4">{Year}</h4>
            <CustomText content={Released} title="Released Date" />
            <CustomText content={Genre} title="Genre" />
            <CustomText content={Runtime} title="Runtime" />
            <CustomText content={Director} title="Director" />
            <CustomText content={Writer} title="Writer" />
            <CustomText content={Actors} title="Actors" />
            <CustomText content={Language} title="Language" />
          </div>
        </div>
        <div className="row mt-3 divider">
          <p>{Plot}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

DetailMovieModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

export default DetailMovieModal;

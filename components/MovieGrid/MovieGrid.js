import { useState } from "react";
import PropTypes from "prop-types";

import MovieCard from "../MovieCard/MovieCard";
import DeleteForm from "../../forms/DeleteForm";
import Modal from "../Modal";

import styles from "./MovieGrid.module.scss";

const MovieGrid = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(props.movies[0]);

  return (
    <>
      <div className={styles["movieGrid__container"]}>
        {props.movies.map((movie) => (
          <MovieCard {...movie} setId={setSelectedId} setOpen={setIsOpen} key={movie.id}/>
        ))}
      </div>
      {isOpen && (
        <Modal setOpen={setIsOpen}>
          <DeleteForm id={selectedId}/>
        </Modal>
      )}
    </>
  );
};

export default MovieGrid;

MovieGrid.PropType = {
  movies: PropTypes.arrayOf({
    id: PropTypes.string,
    imgURL: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genres: PropTypes.string,
  }),
};

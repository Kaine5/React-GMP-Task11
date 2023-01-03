import PropTypes from "prop-types";

import styles from "./MovieCard.module.scss";

const MovieCard = (props) => {
  return (
    <div className={styles["movieCard__gridContainer"]}>
      <div className={styles["movieCard__thumbnail"]}>
        <img
          className={styles["movieCard__picture"]}
          src={props.imgURL}
          alt={props.imgAlt}
        />
        <img
          className={styles["movieCard__moreButton"]}
          src="/img/more button.svg"
          alt="more"
          onClick={() => {
            props.setOpen(true);
            props.setId(props.id);
          }}
        />
      </div>
      <div className={styles["movieCard__title"]}>{props.title}</div>
      <div className={styles["movieCard__releaseDate"]}>
        {props.releaseDate}
      </div>
      <div className={styles["movieCard__genres"]}>{props.genres}</div>
    </div>
  );
};

export default MovieCard;

MovieCard.PropType = {
  id: PropTypes.string,
  imgURL: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  genres: PropTypes.string,
  setId: PropTypes.func,
  setOpen: PropTypes.func,
};

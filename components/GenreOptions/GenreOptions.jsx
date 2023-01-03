import { useState } from "react";
import clsx from "clsx";
import styles from "./GenreOptions.module.scss";

const genres = [
  {
    name: "All",
    id: 1,
  },
  {
    name: "Documentary",
    id: 2,
  },
  {
    name: "Comedy",
    id: 3,
  },
  {
    name: "Horror",
    id: 4,
  },
  {
    name: "Crime",
    id: 5,
  },
];

const GenreOptions = (props) => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0].id);

  const handleGenreSelect = (id) => {
    setSelectedGenre(id);
  };

  return (
    <div className={styles["genreOptions__list"]}>
      {genres.map((genre) => (
        //doing some css on here to show which item is the active one
        <div
          className={clsx(
            styles["genreOptions__item"],
            genre.id === selectedGenre ? styles["active"] : ""
          )}
          key={genre.id}
          onClick={() => handleGenreSelect(genre.id)}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default GenreOptions;

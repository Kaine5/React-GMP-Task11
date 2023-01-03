import GenreOptions from "../GenreOptions";
import SortDropdown from "../SortDropdown";
import MovieGrid from "../MovieGrid/MovieGrid";

import styles from "./MovieList.module.scss";

const MovieList = () => {

  return (
    <div className={styles["movieList"]}>
      <div className={styles["movieListOptions"]}>
        <GenreOptions />
        <SortDropdown />
      </div>
      <MovieGrid movies={mockedData} />
    </div>
  );

};

export default MovieList;

const mockedData = [
  {
    id: '1',
    imgURL:
      "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg",
    imgAlt: "Lua",
    title: "Lua",
    releaseDate: "2022",
    genres: "cash game",
  },
  {
    id: '2',
    imgURL:
      "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg",
    imgAlt: "Lua",
    title: "Lua",
    releaseDate: "2022",
    genres: "cash game",
  },
  {
    id: '3',
    imgURL:
      "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg",
    imgAlt: "Lua",
    title: "Lua",
    releaseDate: "2022",
    genres: "cash game",
  },
  {
    id: '4',
    imgURL:
      "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg",
    imgAlt: "Lua",
    title: "Lua",
    releaseDate: "2022",
    genres: "cash game",
  },
  {
    id: '5',
    imgURL:
      "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg",
    imgAlt: "Lua",
    title: "Lua",
    releaseDate: "2022",
    genres: "cash game",
  },
  {
    id: '6',
    imgURL:
      "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg",
    imgAlt: "Lua",
    title: "Lua",
    releaseDate: "2022",
    genres: "cash game",
  },
];

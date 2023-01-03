import { useState } from "react";
import SearchForm from "../SearchForm";
import Modal from "../Modal";
import MovieForm from "../../forms/MovieForm";

import styles from "./Banner.module.scss";

const Banner = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles["banner__container"]}>
      <div className={styles["banner__header"]}>
        <img src="/img/netflixroulette.svg" alt="netflixRoulette" />
        <button className={styles["banner__button"]} onClick={() => setOpen(true)}>+ Add Movie</button>
      </div>
      <div className={styles["banner__content"]}>
        <h2>FIND YOUR MOVIE</h2>
        <SearchForm />
      </div>
      {open && (
        <Modal setOpen={setOpen}>
          <MovieForm />
        </Modal>
      )}
    </header>
  );
};

export default Banner;

import styles from './MovieForm.module.scss';

const MovieForm = () => {
    return (
      <div>
        <h1 className="movieForm__heading">ADD MOVIE</h1>
        <form className={styles["form__container"]}>
          <label htmlFor="title">Title</label>
          <input id="title" name="title"></input>
   
          <label htmlFor="date">Release Date</label>
          <input type="date" id="date" name="date"></input>
   
          <label htmlFor="movie-url">Movie Url</label>
          <input id="movie-url" name="movie-url" placeholder="https://" />
   
          <label htmlFor="rating">Rating</label>
          <input id="rating" name="rating"></input>
   
          <label htmlFor="genre">Genre</label>
          <select id="genre" name="genre"></select>
   
          <label htmlFor="runtime">Runtime</label>
          <input id="runtime" name="runtime"></input>
   
          <label htmlFor="overview">Overview</label>
          <input type="textarea" id="overview" name="overview"></input>
   
          <button>RESET</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
   
  export default MovieForm;
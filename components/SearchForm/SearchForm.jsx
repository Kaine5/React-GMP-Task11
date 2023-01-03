import { useState } from 'react';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState("No movie found");

    const handleFormSubmit = (e, input) => {
        e.preventDefault();
        setSearchResult(`Here are the movie list with the name ${input} included`);
    }
    return (
        <>
            <form className={styles["searchForm"]} onSubmit={(e) => handleFormSubmit(e, query)}>
                <input className={styles["searchForm__input"]} placeholder="What do you want to watch?" value={query} onChange={e => setQuery(e.target.value)}/>
                <button className={styles["searchForm__button"]} type="submit">SEARCH</button>
            </form>
        </>
    )
}

export default SearchForm;
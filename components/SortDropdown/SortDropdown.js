import styles from './SortDropdown.module.scss'; 

const SortDropdown = (props) => {
    return (
        <div>
            <label htmlFor='sort-options' className={styles["sortOptions__label"]}>
                SORT BY
            </label>
            <select name='sort-options' id='sort-options' className={styles["sortOptions__select"]} {...props}>
                <option value="release-date">RELEASE DATE</option>
                <option value="name-asc">NAME (A-Z)</option>
                <option value="name-des">NAME (Z-A)</option>
                <option value="added-date">ADDED DATE</option>
                <option value="release-date">RELEASE DATE</option>
            </select>
        </div>
    )
}

export default SortDropdown;
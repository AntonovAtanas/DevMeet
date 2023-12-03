import styles from './Searchbar.module.css';

export default function Searchbar() {
    return (
        <form className={styles.searchBar}>
            <input
                className="default-input"
                type="search"
                placeholder="Search event"
                name="search"
            />
            <a className={styles.searchButton} type="submit">
                <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: '#33a394', fontSize: '24px' }}
                ></i>
            </a>
        </form>
    );
}

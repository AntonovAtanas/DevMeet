import { useContext } from 'react';
import styles from './Searchbar.module.css';
import SearchContext from '../../../contexts/searchContext';
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {
    const navigate = useNavigate();
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    function setSearchTermInContext(e) {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
    }

    function onSearchHandler(e) {
        e.preventDefault();
        navigate('/search');
    }

    return (
        <form className={styles.searchBar} onSubmit={onSearchHandler}>
            <input
                className="default-input"
                type="search"
                placeholder="Search event"
                name="search"
                value={searchTerm}
                onChange={setSearchTermInContext}
            />
            <button className={styles.searchButton} type="submit">
                <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: '#33a394', fontSize: '24px' }}
                ></i>
            </button>
        </form>
    );
}

import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './ResultsContainer.module.css';

import SearchContext from '../../../contexts/searchContext';
import EventCard from '../../../shared/EventCard/EventCard';
import eventsService from '../../../services/events-service';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';

export default function SearchResults() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    // const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        eventsService
            .searchEvent(searchTerm)
            .then(({ data }) => {
                setSearchResults(data);
                setIsLoaded(true);
            })
            .catch((error) => setError(error.message));
    }, [searchTerm]);

    // cleanup the search bar when the user navigates outside the search page
    useEffect(() => {
        return () => {
            setSearchTerm('');
        };
    }, [location.pathname]);

    if (!isLoaded) {
        return (
            <div style={{ display: 'flex' }}>
                <LoadingSpinner />
            </div>
        );
    }

    if (searchResults.length < 1) {
        return <h1 style={{ textAlign: 'center' }}>No results found!</h1>;
    }

    return (
        <div className={styles.resultsContainer}>
            <h1 className="allEventsHeading">Results</h1>
            <div className="allEventsWrapper">
                {searchResults.map((event) => (
                    <EventCard event={event} key={event.id} />
                ))}
            </div>
        </div>
    );
}

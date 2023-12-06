import { useContext, useEffect, useState } from 'react';

import styles from './ResultsContainer.module.css';

import SearchContext from '../../../contexts/searchContext';
import EventCard from '../../../shared/EventCard/EventCard';
import eventsService from '../../../services/events-service';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';

export default function SearchResults() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { searchTerm } = useContext(SearchContext);

    useEffect(() => {
        eventsService
            .searchEvent(searchTerm)
            .then(({ data }) => {
                setSearchResults(data);
                setIsLoaded(true);
            })
            .catch((error) => setError(error.message));
    }, [searchTerm]);

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

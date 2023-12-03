import { useEffect, useState } from 'react';
import styles from './AllEvents.module.css';

import EventCard from '../../../shared/EventCard/EventCard';
import eventsService from '../../../services/events-service';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';

export default function AllEvents() {
    const [allEvents, setAllEvents] = useState([]);
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // get all events
    useEffect(() => {
        eventsService
            .getAllEvents()
            .then((events) => {
                setAllEvents(events.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    return (
        <div className={styles.allEventsWrapper}>
            {isLoading && <LoadingSpinner />}
            {!isLoading && allEvents.length < 1 && (
                <p>There are no events yet</p>
            )}
            {allEvents.map((event) => (
                <EventCard event={event} key={event.id} />
            ))}
        </div>
    );
}

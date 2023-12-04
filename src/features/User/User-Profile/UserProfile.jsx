import { useContext, useEffect, useState } from 'react';

import styles from './UserProfile.module.css';

import AuthContext from '../../../contexts/authContext';
import eventsService from '../../../services/events-service';

import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import EventCard from '../../../shared/EventCard/EventCard';

export default function UserProfile() {
    const [goingEvents, setGoingEvents] = useState([]);
    const [error, setError] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { userId } = useContext(AuthContext);

    useEffect(() => {
        eventsService
            .userGoingEvents(userId)
            .then(({ events }) => {
                setGoingEvents(events.data);
                setIsLoaded(true);
            })
            .catch(({ error }) => setError(error));
    }, []);

    return (
        <div className={styles.profileContainer}>
            <h1 className="allEventsHeading">Attending events</h1>
            <div className="allEventsWrapper">
                {!isLoaded && <LoadingSpinner />}
                {isLoaded &&
                    goingEvents.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
            </div>
        </div>
    );
}

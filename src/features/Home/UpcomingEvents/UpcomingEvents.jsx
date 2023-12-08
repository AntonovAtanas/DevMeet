import { useEffect, useState } from "react";

import styles from "./UpcomingEvents.module.css";

import EventCard from "../../../shared/EventCard/EventCard";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import eventsService from "../../../services/events-service";

export default function UpcomingEvents() {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // get upcoming 5 events
    useEffect(() => {
        eventsService
            .getUpcomingFiveEvents()
            .then(({ data }) => {
                setUpcomingEvents(data);
                setIsLoading(false);
            })
            .catch(({ error }) => setError(error));
    }, []);

    return (
        <div className={styles.upcomingEvents}>
            <h2 className="heading-main">Upcoming Events</h2>
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
                <div className={styles.upcomingEventsCardsWrapper}>
                    {upcomingEvents.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

import { useEffect, useState } from "react";

import EventCard from "../../../shared/EventCard/EventCard";
import eventsService from "../../../services/events-service";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";

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
        <>
            <h1 className="allEventsHeading">All events</h1>
            {isLoading && (
                <div style={isLoading ? { display: "flex" } : ""}>
                    <LoadingSpinner />
                </div>
            )}
            <div className="allEventsWrapper allEventsWrapperMedia">
                {!isLoading && allEvents.length < 1 && (
                    <p>There are no events yet</p>
                )}
                {allEvents.map((event) => (
                    <EventCard event={event} key={event.id} />
                ))}
            </div>
        </>
    );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './eventDetails.css';

import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import eventsService from '../../../services/events-service';

export default function EventDetails() {
    const [event, setEvent] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { eventId } = useParams();

    useEffect(() => {
        eventsService
            .getEvent(eventId)
            .then(({ data }) => {
                setEvent(data[0]);
                setIsLoading(false);
            })
            .catch(({ error }) => setError(error.message));
    }, []);

    // early return if not loaded event
    if (isLoading) {
        return (
            <div className="event-container">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="event-container">
            <div className="event-image">
                <img src={event.imageUrl} alt="" />
            </div>
        </div>
    );
}

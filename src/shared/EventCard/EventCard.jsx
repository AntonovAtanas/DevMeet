import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './EventCard.module.css';

import dateTransform from '../utils/date-transform';
import eventsService from '../../services/events-service';

export default function EventCard({ event }) {
    const [goingPeople, setGoingPeople] = useState(0);
    const [error, setError] = useState(null);
    const formattedDate = dateTransform(event.date);

    useEffect(() => {
        eventsService
            .goingPeopleToEvent(event.id)
            .then(({ data }) => {
                setGoingPeople(data.length);
            })
            .catch(({ error }) => setError(error));
    }, []);

    return (
        <Link className={styles.cardWrapper} to={`/events/${event.id}`}>
            <div className={styles.eventCard}>
                <span className={styles.cardImageWrapper}>
                    <img src={event.imageUrl} alt={event.eventTitle} />
                </span>
                <h3>{event.title}</h3>
                <span>
                    <i
                        className="fa-solid fa-location-dot"
                        style={{ color: '#cfcfcf' }}
                    ></i>
                    <p>{event.location}</p>
                </span>
                <span>
                    <i
                        className="fa-regular fa-calendar"
                        style={{ color: '#cfcfcf' }}
                    ></i>
                    <p>{formattedDate}</p>
                </span>
                <div className={styles.goingPriceWrapper}>
                    <span>
                        <i
                            className="fa-solid fa-check"
                            style={{ color: '#cfcfcf' }}
                        ></i>
                        <p>{goingPeople} going</p>
                    </span>
                    <span>
                        <i
                            className="fa-solid fa-ticket"
                            style={{ color: '#cfcfcf' }}
                        ></i>
                        <p>
                            {event.ticketPrice == 0
                                ? 'FREE'
                                : `${event.ticketPrice} BGN`}
                        </p>
                    </span>
                </div>
            </div>
        </Link>
    );
}

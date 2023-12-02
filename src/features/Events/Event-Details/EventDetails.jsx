import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './eventDetails.css';

import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import eventsService from '../../../services/events-service';
import dateTransform from '../../../shared/utils/date-transform';
import AuthContext from '../../../contexts/authContext';

export default function EventDetails() {
    const [event, setEvent] = useState({});
    const [goingPeople, setGoingPeople] = useState(0);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isGoing, setIsGoind] = useState(false);

    const { userId } = useContext(AuthContext);
    const { eventId } = useParams();

    useEffect(() => {
        // get event details
        eventsService
            .getEvent(eventId)
            .then(({ data }) => {
                setEvent(data[0]);
            })
            .catch(({ error }) => setError(error));

        // get going people
        eventsService
            .goingPeopleToEvent(eventId)
            .then(({ data }) => {
                setGoingPeople(data);
                setIsLoading(false);
            })
            .catch(({ error }) => setError(error));

        eventsService
            .isUserGoing(eventId, userId)
            .then(({ data }) => {
                console.log(data);
                setIsGoind(data.length > 0);
            })
            .catch(({ error }) => setError(error));
    }, []);

    // early return if not loaded event
    if (isLoading) {
        return (
            <div className="event-container">
                <LoadingSpinner />
            </div>
        );
    }
    const formattedDate = dateTransform(event.date);

    return (
        <div className="event-container">
            <div className="event-image">
                <img src={event.imageUrl} alt={event.title} />
            </div>

            <div className="event-details">
                <div className="event-title">
                    <h1 className="heading-main">{event.title}</h1>
                </div>

                <div className="event-date">
                    <i
                        className="fa-regular fa-calendar"
                        style={{ color: '#33A394' }}
                    ></i>
                    <p>{formattedDate}</p>
                </div>

                {/* show only if there are less than 10 tickets left */}
                {event.capacity - goingPeople.length < 10 && (
                    <div className="event-tickets-left">
                        <p>Only {event.capacity - event.going} tickets left!</p>
                    </div>
                )}

                <div className="event-ticket-price">
                    <i
                        className="fa-solid fa-ticket"
                        style={{ color: '#33A394' }}
                    ></i>
                    <p>
                        {event.ticketPrice == 0
                            ? 'FREE'
                            : `${event.ticketPrice} BGN`}
                    </p>
                </div>

                <div className="event-going">
                    <i
                        className="fa-solid fa-check"
                        style={{ color: '#33A394' }}
                    ></i>
                    <p>{goingPeople.length} people going</p>
                </div>

                <div className="event-description">
                    <h2 className="event-headings">Description</h2>
                    <p>{event.description}</p>
                </div>

                <div className="event-location">
                    <h2 className="event-headings">Location</h2>
                    <p>{event.location}</p>
                </div>

                <div className="event-button">
                    {isGoing && userId && (
                        <a
                            className="button-main button-going"
                            onClick={() =>
                                eventsService.goToEvent(eventId, userId)
                            }
                        >
                            <i
                                className="fa-solid fa-x"
                                style={{ color: '#fff' }}
                            ></i>
                            Not going
                        </a>
                    )}
                    {!isGoing && userId && (
                        <a
                            className="button-main button-going"
                            onClick={() =>
                                eventsService.goToEvent(eventId, userId)
                            }
                        >
                            <i
                                className="fa-solid fa-check"
                                style={{ color: '#fff' }}
                            ></i>
                            Going
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

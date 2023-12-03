import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styles from './EventDetails.module.css';

import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import eventsService from '../../../services/events-service';
import dateTransform from '../../../shared/utils/date-transform';
import AuthContext from '../../../contexts/authContext';
import popUpWindow from '../../../shared/utils/pop-up-window';

export default function EventDetails() {
    const [event, setEvent] = useState({});
    const [goingPeople, setGoingPeople] = useState(0);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isGoing, setIsGoind] = useState(false);

    const { userId } = useContext(AuthContext);
    const { eventId } = useParams();
    const navigate = useNavigate();

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
                setGoingPeople(data.length);
                setIsLoading(false);
            })
            .catch(({ error }) => setError(error));

        eventsService
            .isUserGoing(eventId, userId)
            .then(({ data }) => {
                setIsGoind(data.length > 0);
            })
            .catch(({ error }) => setError(error));
    }, []);

    // early return if not loaded event
    if (isLoading) {
        return (
            <div className={styles.eventContainer}>
                <LoadingSpinner />
            </div>
        );
    }

    const formattedDate = dateTransform(event.date);
    const deleteMessage = 'Are you sure you want to delete this event?';
    const isOwner = userId === event.ownerId;

    //  go to event handler
    async function goToEventHandler() {
        try {
            await eventsService.goToEvent(eventId, userId);
            setGoingPeople((goingPeople) => (goingPeople += 1));
            setIsGoind(true);
        } catch (error) {
            setError(error);
        }
    }

    // not go to event handler
    async function notGoToEventHandler() {
        try {
            await eventsService.notGoToEvent(eventId, userId);
            setGoingPeople((goingPeople) => (goingPeople -= 1));
            setIsGoind(false);
        } catch (error) {
            setError(error);
        }
    }

    // delete event handler
    async function deleteEventHandler() {
        const hasConfirmed = popUpWindow(deleteMessage);

        if (hasConfirmed) {
            try {
                await eventsService.deleteEvent(event.id);
                navigate('/events');
            } catch (error) {
                setError(error);
            }
        }
    }

    return (
        <div className={styles.eventContainer}>
            <div className={styles.eventImage}>
                <img src={event.imageUrl} alt={event.title} />
            </div>

            <div className={styles.eventDetails}>
                <div>
                    <h1 className="heading-main">{event.title}</h1>
                </div>

                <div className={styles.eventDate}>
                    <i
                        className="fa-regular fa-calendar"
                        style={{ color: '#33A394' }}
                    ></i>
                    <p>{formattedDate}</p>
                </div>

                {/* show only if there are less than 10 tickets left */}
                {event.capacity - goingPeople < 10 && (
                    <div className={styles.eventTicketsLeft}>
                        <p>Only {event.capacity - event.going} tickets left!</p>
                    </div>
                )}

                <div className={styles.eventTicketPrice}>
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

                <div className={styles.eventGoing}>
                    <i
                        className="fa-solid fa-check"
                        style={{ color: '#33A394' }}
                    ></i>
                    <p>{goingPeople} people going</p>
                </div>

                <div className={styles.eventDescription}>
                    <h2 className={styles.eventHeadings}>Description</h2>
                    <p>{event.description}</p>
                </div>

                <div className={styles.eventLocation}>
                    <h2 className={styles.eventHeadings}>Location</h2>
                    <p>{event.location}</p>
                </div>

                {/* action buttons */}
                <div className={styles.eventButton}>
                    {isGoing && userId && !isOwner && (
                        <a
                            className={`${styles.buttonAction} button-main`}
                            onClick={() => notGoToEventHandler()}
                        >
                            <i
                                className="fa-solid fa-x"
                                style={{ color: '#fff' }}
                            ></i>
                            Not going
                        </a>
                    )}
                    {!isGoing && userId && !isOwner && (
                        <a
                            className={`${styles.buttonAction} button-main`}
                            onClick={() => goToEventHandler()}
                        >
                            <i
                                className="fa-solid fa-check"
                                style={{ color: '#fff' }}
                            ></i>
                            Going
                        </a>
                    )}
                    {isOwner && (
                        <>
                            <Link
                                to={'edit'}
                                className={`${styles.buttonAction} button-main`}
                            >
                                <i
                                    className="fa-solid fa-pen-to-square"
                                    style={{ color: '#fff' }}
                                ></i>
                                Edit
                            </Link>
                            <a
                                className={`${styles.buttonAction} button-main`}
                                onClick={() => deleteEventHandler()}
                            >
                                <i
                                    className="fa-solid fa-trash"
                                    style={{ color: '#fff' }}
                                ></i>
                                Delete
                            </a>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

import { Link } from 'react-router-dom';
import './eventCard.css';

export default function EventCard({ event }) {
    return (
        <Link to={`/events/${event.id}`}>
            <div className="event-card">
                <span className="card-image-wrapper">
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
                    <p>{event.date}</p>
                </span>
                <div className="going-price-wrapper">
                    <span>
                        <i
                            className="fa-solid fa-check"
                            style={{ color: '#cfcfcf' }}
                        ></i>
                        <p>{event.going} going</p>
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

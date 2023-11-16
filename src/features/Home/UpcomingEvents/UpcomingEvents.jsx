import EventCard from '../../../shared/EventCard/EventCard';
import './upcomingEvents.css';

export default function UpcomingEvents() {
    return (
        <div className="upcoming-events">
            <h2 className="heading-main">Upcoming Events</h2>
            <div className="upcoming-events-cards-wrapper">
                <EventCard />
            </div>
        </div>
    );
}

import EventCard from '../../../shared/EventCard/EventCard';
import './upcomingEvents.css';

const tempDB = [
    {
        title: 'How does the QA role fit into an engineering team?',
        location: 'John Atanasoff Forum, Sofia Tech Park',
        date: 'Wednesday, November 22',
        capacity: 100,
        going: 43,
        ticketPrice: 0,
        imageUrl:
            'https://secure.meetupstatic.com/photos/event/1/b/8/5/600_517027045.webp?w=384',
        id: 2,
    },
    {
        title: 'How does the QA role fit into an engineering team?',
        location: 'John Atanasoff Forum, Sofia Tech Park',
        date: 'Wednesday, November 22',
        capacity: 100,
        going: 43,
        ticketPrice: 0,
        imageUrl:
            'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F634685629%2F48457224674%2F1%2Foriginal.jpg?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C23%2C2000%2C1000&s=67b99a99b6700c23e0ac37b39b64f731',
        id: 3,
    },
    {
        title: 'How does the QA role fit into an engineering team?',
        location: 'John Atanasoff Forum, Sofia Tech Park',
        date: 'Wednesday, November 22',
        capacity: 100,
        going: 43,
        ticketPrice: 0,
        imageUrl:
            'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F589553999%2F48457224674%2F1%2Foriginal.20210922-151559?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=38%2C0%2C364%2C182&s=89750f32a702b78d84a2d24813905161',
        id: 4,
    },
    {
        title: 'How does the QA role fit into an engineering team?',
        location: 'John Atanasoff Forum, Sofia Tech Park',
        date: 'Wednesday, November 22',
        capacity: 100,
        going: 43,
        ticketPrice: 0,
        imageUrl:
            'https://secure.meetupstatic.com/photos/event/1/b/8/5/600_517027045.webp?w=384',
        id: 5,
    },
    {
        title: 'How does the QA role fit into an engineering team?',
        location: 'John Atanasoff Forum, Sofia Tech Park',
        date: 'Wednesday, November 22',
        capacity: 100,
        going: 43,
        ticketPrice: 0,
        imageUrl:
            'https://venngage-wordpress.s3.amazonaws.com/uploads/2023/06/pink-and-blue-recycle-event-volunteer-poster-791x1024.png',
        id: 21,
    },
];

export default function UpcomingEvents() {
    return (
        <div className="upcoming-events">
            <h2 className="heading-main">Upcoming Events</h2>
            <div className="upcoming-events-cards-wrapper">
                {tempDB.map((event) => (
                    <EventCard event={event} key={event.id} />
                ))}
            </div>
        </div>
    );
}

import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';

export default function EventDetails() {
    const { eventId } = useParams();

    console.log(eventId);

    return <div className="event-container"></div>;
}

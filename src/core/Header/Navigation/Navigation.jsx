import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">All Events</Link>
                </li>
                <li>
                    <Link to="/events/create">Add an Event</Link>
                </li>
                <li>
                    <Link to="/user/login">Login</Link>
                </li>
                <li>
                    <Link to="/user/logout">Logout</Link>
                </li>
            </ul>
        </nav>
    );
}

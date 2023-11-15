import './navigation.css';

export default function Navigation() {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">All Events</a>
                </li>
                <li>
                    <a href="#">Add an Event</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    );
}

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './navigation.css';

import AuthContext from '../../../contexts/authContext';

export default function Navigation() {
    const { userId } = useContext(AuthContext);

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
                {userId ? (
                    <>
                        <li>
                            <Link to="/user/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/user/logout">Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/user/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/user/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

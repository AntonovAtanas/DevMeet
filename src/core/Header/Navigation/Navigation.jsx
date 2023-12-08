import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import styles from "./Navigation.module.css";

import AuthContext from "../../../contexts/authContext";

export default function Navigation() {
    const { userId } = useContext(AuthContext);
    const [isHamburgerMenuShown, setHamburgerMenuShown] = useState(false);

    function hamburgerMenuToggle() {
        isHamburgerMenuShown
            ? setHamburgerMenuShown(false)
            : setHamburgerMenuShown(true);
    }

    function toggleHamburgerMenu() {
        isHamburgerMenuShown ? setHamburgerMenuShown(false) : "";
    }

    return (
        <>
            {/* hamburger menu */}
            <a
                onClick={hamburgerMenuToggle}
                className={styles.burgerMenuToggle}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>

            <ul
                className={
                    isHamburgerMenuShown
                        ? `${styles.active} ${styles.navigation}`
                        : styles.navigation
                }
                onClick={toggleHamburgerMenu}
            >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">All Events</Link>
                </li>

                {userId ? (
                    <>
                        <li>
                            <Link to="/events/create">Add an Event</Link>
                        </li>
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
        </>
    );
}

import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import logo from "../../assets/devMeet-logo.png";

import Navigation from "./Navigation/Navigation";
import Searchbar from "./Searchbar/Searchbar";

export default function Header() {
    return (
        <header>
            <div className={styles.logoSearchWrapper}>
                <div className={styles.logoWrapper}>
                    <Link to="/">
                        <img src={logo} alt="devmeet-logo" />
                    </Link>
                </div>
                <Searchbar />
            </div>
            <Navigation />
        </header>
    );
}

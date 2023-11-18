import './header.css';
import { Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Searchbar from './Searchbar/Searchbar';

export default function Header() {
    return (
        <header>
            <div className="logo-search-wrapper">
                <div className="logo-wrapper">
                    <Link to="">
                        <img
                            src="/src/assets/devMeet-logo.png"
                            alt="devmeet-logo"
                        />
                    </Link>
                </div>
                <Searchbar />
            </div>
            <Navigation />
        </header>
    );
}

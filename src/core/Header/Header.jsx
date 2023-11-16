import './header.css';
import Navigation from './Navigation/Navigation';

import Searchbar from './Searchbar/Searchbar';

export default function Header() {
    return (
        <header>
            <div className="logo-search-wrapper">
                <div className="logo-wrapper">
                    <a href="#">
                        <img
                            src="/src/assets/devMeet-logo.png"
                            alt="devmeet-logo"
                        />
                    </a>
                </div>
                <Searchbar />
            </div>
            <Navigation />
        </header>
    );
}

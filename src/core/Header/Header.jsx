import './header.css';
import Navigation from './Navigation/Navigation';

import Searchbar from './Searchbar/Searchbar';

export default function Header() {
    return (
        <header>
            <div className="logo-search-wrapper">
                <div className="logo-wrapper">
                    <img
                        src="/src/assets/devmeet-temp-logo.jpg"
                        alt="devmeet-logo"
                    />
                </div>
                <Searchbar />
            </div>
            <Navigation />
        </header>
    );
}

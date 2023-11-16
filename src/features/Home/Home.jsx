import Hero from './Hero/Hero';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import './home.css';

export default function Home() {
    return (
        <div className="home-wrapper">
            <Hero />
            <UpcomingEvents />
        </div>
    );
}

import Hero from './Hero/Hero';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.homeWrapper}>
            <Hero />
            <UpcomingEvents />
        </div>
    );
}

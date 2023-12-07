import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroMain}>
                    Scripting Success: Transforming Code into Connections
                </h1>
                <p>
                    Unlock the social dimension of coding with devMeet, where
                    events catalyze friendships, creating a dynamic network of
                    collaborative developers.
                </p>
                <Link
                    to="/events"
                    className={`${styles.buttonHero} button-main`}
                >
                    Find your next event
                </Link>
            </div>
            <div className={styles.heroImage}>
                    <img
                        src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="conference-hero-img"
                    />
            </div>
        </div>
    );
}

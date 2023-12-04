import { Link } from 'react-router-dom';

import styles from './PageNotFound.module.css';

export default function PageNotFound() {
    return (
        <div className={styles.mainbox}>
            <div className={styles.err}>404</div>
            <div className={styles.msg}>
                Page not found!
                <p>
                    Let's go <Link to={'/'}>home</Link> and try from there.
                </p>
            </div>
        </div>
    );
}

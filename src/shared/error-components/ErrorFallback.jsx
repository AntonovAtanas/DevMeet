import styles from './ErrorFallback.module.css';

export default function ErrorFallback() {
    function onReset() {
        window.location.replace('/');
    }
    return (
        <div className={styles.mainbox}>
            <div className={styles.err}>Something went wrong!</div>
            <div className={styles.msg}>
                <p>
                    Let's go{' '}
                    <span className={styles.fallbackReset} onClick={onReset}>
                        home
                    </span>{' '}
                    and try from there.
                </p>
            </div>
        </div>
    );
}

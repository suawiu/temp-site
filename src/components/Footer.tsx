import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Antigravity. All rights reserved.
                </p>
                <div className={styles.links}>
                    {/* Social links will go here */}
                </div>
            </div>
        </footer>
    );
}

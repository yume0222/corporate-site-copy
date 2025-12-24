import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/news" className={styles.navLink}>
              news
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/service" className={styles.navLink}>
              service
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/>works" className={styles.navLink}>
              works
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/company" className={styles.navLink}>
              company
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/recruit" className={styles.navLink}>
              recruit
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.copyright}>
        <Link href="/" className={styles.copyrightLink}>
          &copy;PON DESIGN
        </Link>
      </div>
    </footer>
  );
}

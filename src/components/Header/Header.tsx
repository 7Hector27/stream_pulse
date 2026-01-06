import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>StreamPulse</h1>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Streams
          </Link>
          <Link href="/analytics" className={styles.link}>
            Analytics
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

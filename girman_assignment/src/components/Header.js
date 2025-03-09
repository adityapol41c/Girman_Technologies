import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.brand}>
          <span className={styles.brandName}>Girman</span>
          <span className={styles.brandSub}>TECHNOLOGIES</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <Link href="/search" className={styles.navLink}>SEARCH</Link>
        <Link href="/" className={styles.navLink}>WEBSITE</Link>
        <Link href="https://www.linkedin.com/company/girmantech/" className={styles.navLink}>LINKEDIN</Link>
        <Link href="/contact" className={styles.navLink}>CONTACT</Link>
      </nav>
    </header>
  );
}
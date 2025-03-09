import styles from '../styles/Home.module.css';

export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.centerContent}>
        <div className={styles.logoContainer}>
          <img src="/images/logo1.png" alt="Logo" className={styles.logo_1} />
        </div>
        <div className={styles.brand_1}>
          <span className={styles.brandName_1}>Girman</span>
        </div>
      </div>
      <input type="text" placeholder="Search" className={styles.searchInput} />
    </div>
  );
}
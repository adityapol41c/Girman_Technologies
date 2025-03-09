import Head from 'next/head';
import Header from '../components/Header';
import Search from '../components/Search';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GIRMAN</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Search />
      </main>
    </div>
  );
}
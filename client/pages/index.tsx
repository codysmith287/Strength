import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { HomePageHero } from '../components/HomePage/Hero/HomePageHero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Strength</title>
        <meta name="description" content="Build Strength" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav></nav>

      <main className={styles.main}>
        <HomePageHero />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

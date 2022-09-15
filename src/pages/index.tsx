import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundTransparency}>
        <Head>
          <title>TurisTere</title>
        </Head>

        <main className={styles.main}>
          <h1>Main</h1>
        </main>

        <footer className={styles.footer}>Footer</footer>
      </div>
    </div>
  );
}

export default Home

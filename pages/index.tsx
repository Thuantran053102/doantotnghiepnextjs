import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>hlo</h1>
      </main>

      <footer className={styles.footer}>
        <h1>hlo</h1>
      </footer>
    </div>
  )
}

export default Home

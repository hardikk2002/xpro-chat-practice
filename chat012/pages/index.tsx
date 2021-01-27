import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Join from './src/Join/Join'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Join />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

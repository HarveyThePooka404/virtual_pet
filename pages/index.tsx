import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

//components 
import { Button } from '@mantine/core'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Virtual Pet</title>
        <meta name="description" content="Create and help grow a Virtual Pet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Welcome to Virtual Pet
        </h1>

        <div className="button_container">
          <Button> Get Started </Button>
          <Link href="/about">
            <Button variant="outline"> Learn More </Button>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* add that personal branding shit */}
      </footer>

    <style global jsx>{`
    .button_container {
      display: flex;
      max-width: 300px;
    }

    .button_container > button:last-child {
      margin-left: 10px;
    }
    `

    }
    </style>
    </div>
  )
}

export default Home

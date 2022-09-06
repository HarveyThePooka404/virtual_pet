import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

//components
import { Button } from '@mantine/core';


function YourPet() {
    return (
        <div>

        <Head>
            <title>Your Pet</title>
        </Head>

        <main className={`${styles.main} justify-center`} >
            <Image src="/assets/pet.png" alt="Picture of your pet" height="300px" width="275px"/>
            <Button.Group className="button_container">
                <Button> Feed </Button>
                <Button> Clean </Button>
                <Button> Play </Button>
            </Button.Group>
        </main>

        <style global jsx> {`
        .button_container{
            margin-top: 20px;
        }
        .justify-center {
            justify-content: center
        }`}
        </style>
        </div>
    )
}

export default YourPet
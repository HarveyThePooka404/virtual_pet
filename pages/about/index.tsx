import styles from '../../styles/Home.module.css'
import Head from 'next/head'

//components
import { Breadcrumbs, Anchor } from '@mantine/core';


//data
const items = [
    {title: 'Home', href:"/"}, 
    {title: 'About', href:"/about"},
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));


function About() {
    return (
        <div>

        <Head>
            <title>About</title>
        </Head>

        <main className={styles.main}>
            <Breadcrumbs> {items} </Breadcrumbs>
            <h3> What is "Your Virtual Pet"?</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Cras eu semper dolor. Praesent feugiat metus turpis, sed sodales justo imperdiet id. </p>

            <h3> How to get started?</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Cras eu semper dolor. Praesent feugiat metus turpis, sed sodales justo imperdiet id. </p>

            <h3> What's the purpose ? </h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Cras eu semper dolor. Praesent feugiat metus turpis, sed sodales justo imperdiet id. </p>
        </main>

        </div>
    )
}

export default About
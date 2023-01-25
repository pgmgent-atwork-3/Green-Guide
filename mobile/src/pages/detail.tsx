import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'

import styles from '../../styles/Home.module.scss'
import Navbar from '../components/Navbar'
// import Header from '../components/Header'
// import Card from '../components/Card'

const Detail = () => {
    const container = useRef(null);
    const iconDimensions = {
        width: 70,
        height: 70,
    }

return (
    <div className={styles.app_container} ref={container}>
        <Navbar />
        <div className={styles.detail_container}>
            <Image className={`${styles.img} ${styles.open}`} src="/svg/arrow-round.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
            <div className={styles.detail_card}>
                <h2 className={styles.h2_title}>Ohne</h2>               
                <p className={styles.subtitle}>Steendam 68, 9000 Gent</p>
                <p className={styles.text_block}>Vegetarian and vegan finger foods and dishes. Try the perfect vegetarian version of all the classics: burgers, pasta, rice, salads and wraps.</p>
                <p className={`${styles.text_block} ${styles.bold_text}`}>We deliver your shopping package-free to your door in Ghent, Sint-Amandsberg, Ledeberg, Gentbrugge, Mariakerke & Wondelgem.</p>
                <p className={styles.text_block}>Your packaging-free groceries delivered to your door with Cargo Velo Bicycle courier cargovelo brings the filled jars to you. Prefer to collect them yourself in one of the Ghent shops? Thats also possible!</p>
            </div>

            <div className={styles.detail_card}>
                <h2 className={styles.h2_title}>Opening hours</h2>  
                <ul>
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>Tue - Thurs: </span>
                        10 am - 7 pm
                    </li>
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>Fri - Sat: </span>
                        10 am - 6 pm
                    </li>
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>Mon, Sun & public holidays: </span>
                        closed
                    </li>
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>Summer rest: </span>
                        Closed from 3/07 to 3/08, reopening on Thursday 4/08
                    </li>             
                </ul>
            </div>

            <div className={styles.detail_card}>
                <h2 className={styles.h2_title}>Contact us</h2> 
                <p className={styles.text_block}>E-mail: gent@ohne.be <br />
                Tel: 0485 53 80 29 <br />
                BTW: BE 0597 709 347
                </p>              
            </div>
        </div>
    </div>
)
}

export default Detail
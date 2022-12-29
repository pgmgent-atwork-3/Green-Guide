import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import Header from '../components/Header'

const score = () => {
    const container = useRef(null);
    const logoDimensions = {
        width: 98,
        height: 98,
    }

    const [width, setWidth] = useState(480);
    const [height, setHeight] = useState(800 / 5.3);

    // useEffect(() => {
    //     if (container.current !== null){
    //         setWidth(container.current.offsetWidth);
    //         setHeight(container.current.offsetHeight/5.3);
    //     }
    // }, []);

return (
    <div className={styles.app_container} ref={container}>
        <Header />
        <Navbar />

        <div className={styles.content_container}>
            
            {/* this card need to become a component with type = info-card */}
            <div className={styles.info_card}>
                <p>How it works: When you visit a vendor you can collect loyalty points and earn amazing rewards.</p>
            </div>

            {/* this card need to become a component with type = reward-card */}
            <div className={styles.reward_card}>
                <p className={styles.subtitle}>You collected <span>72</span> points at</p>
                <h2 className={styles.title}>Ohne</h2>            
            </div>

            <div className={styles.reward_card}>
                <p className={styles.subtitle}>You collected <span>15</span> points at</p>
                <h2 className={styles.title}>Tasty World</h2>            
            </div>

            <div className={styles.reward_card}>
                <p className={styles.subtitle}>You collected <span>10</span> points at</p>
                <h2 className={styles.title}>Appelier</h2>            
            </div>
            
            
                <ol>            
                    <li>details of the rewards</li>
                </ol>
            
        </div>
    </div>
)
}

export default score
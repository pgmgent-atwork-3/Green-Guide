import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import Header from '../components/Header'

const search = () => {
    const container = useRef(null);
    const logoDimensions = {
        width: 20,
        height: 20,
    }

    const mapDimensions = {
        width: 400,
        height: 200,
    }


return (
    <div className={styles.app_container} ref={container}>
        <Header />
        <Navbar />
        
        <div className={styles.content_container}>

            <div className={styles.search_field}>
                {/* filter */}
                <div className={styles.filter}>
                    <div className={styles.filter_icon}>
                        <Image className={styles.filter_item} src='/svg/filter.svg' width={logoDimensions.width} height={logoDimensions.height} alt='Filter'/>
                    </div>
                </div>

                {/* search bar */}
                <div className={styles.search_bar}>
                    <input type="text" placeholder="Search for a vendor" className={styles.search_input}/>
                    <button className={styles.search_button}>
                        <Image src='/svg/search-glass.svg' width={logoDimensions.width} height={logoDimensions.height} alt='Search'/>
                    </button>
                </div>
            </div>

            {/* map */}
            <div className={styles.map}>
                <Image src='/svg/map.svg' width={mapDimensions.width} height={mapDimensions.height} alt='Map'/>
            </div>

            {/* vendor addresses */}
            <div className={styles.reward_card}>
                <a href="/vendor-detail">
                    <h2 className={styles.title}>Ohne</h2>            
                    <p className={styles.subtitle}>Steendam 68, 9000 Gent</p>
                </a>
            </div>

            <div className={styles.reward_card}>
                <a href="/vendor-detail">
                    <h2 className={styles.title}>Tasty World</h2>            
                    <p className={styles.subtitle}>Reep 14B, 9000 Gent</p>
                </a>
            </div>

            <div className={styles.reward_card}>
                <a href="/vendor-detail">
                    <h2 className={styles.title}>Appelier</h2>            
                    <p className={styles.subtitle}>Oude Houtlei 122, 9000 Gent</p>
                </a>
            </div>
        </div>
    </div>
)
}

export default search
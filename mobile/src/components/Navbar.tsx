import React from 'react'
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'

const Navbar = () => {
    const iconDimensions = {
        width: 30,
        height: 30,
    }
return (
    <div>
        <ul className={styles.navbar}>
            <li className={styles.nav_item}>
                <Image src='/svg/start.svg' width={iconDimensions.width} height={iconDimensions.height} alt='start-icon' className={styles.nav_icon}/>
                <a className={styles.nav_link} href="/start">start</a>
            </li>
            <li className={styles.nav_item}>
                <Image src='/svg/score.svg' width={iconDimensions.width} height={iconDimensions.height} alt='score-icon' className={styles.nav_icon}/>
                <a className={styles.nav_link} href="/score">score</a>
            </li>
            <li className={`${styles.nav_item} ${styles.green_icon}`}>
                <Image src='/svg/scan.svg' width={iconDimensions.width} height={iconDimensions.height} alt='scan-icon' className={styles.nav_icon}/>
                <a className={styles.nav_link} href="/scan">scan</a>
            </li>
            <li className={styles.nav_item}>
                <Image src='/svg/search.svg' width={iconDimensions.width} height={iconDimensions.height} alt='search-icon' className={styles.nav_icon}/>
                <a className={styles.nav_link} href="/search">search</a>
            </li>
            <li className={styles.nav_item}>
                <Image src='/svg/profile.svg' width={iconDimensions.width} height={iconDimensions.height} alt='profile-icon' className={styles.nav_icon}/>
                <a className={styles.nav_link} href="/profile">profile</a>
            </li>
        </ul>
    </div>
    )
}

export default Navbar
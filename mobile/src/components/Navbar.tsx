import React from 'react'
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const iconDimensions = {
        width: 30,
        height: 30,
    }
return (
    <div>
        <ul className={styles.navbar}>
            <Link className={styles.nav_link} href="/start">
                <li className={styles.nav_item}>
                    <Image src='/svg/start.svg' width={iconDimensions.width} height={iconDimensions.height} alt='start-icon' className={styles.nav_icon}/>
                    start
                </li>
            </Link>

            <Link className={styles.nav_link} href="/score">
                <li className={styles.nav_item}>
                    <Image src='/svg/score.svg' width={iconDimensions.width} height={iconDimensions.height} alt='score-icon' className={styles.nav_icon}/>
                    score
                </li>
            </Link>

            <Link className={styles.nav_link} href="/scan">
                <li className={`${styles.nav_item} ${styles.green_icon}`}>
                    <Image src='/svg/scan.svg' width={iconDimensions.width} height={iconDimensions.height} alt='scan-icon' className={styles.nav_icon}/>
                </li>
            </Link>

            <Link className={styles.nav_link} href="/search">
                <li className={styles.nav_item}>
                    <Image src='/svg/search.svg' width={iconDimensions.width} height={iconDimensions.height} alt='search-icon' className={styles.nav_icon}/>
                    search
                </li>
            </Link>

            <Link className={styles.nav_link} href="/profile">
                <li className={styles.nav_item}>
                    <Image src='/svg/profile.svg' width={iconDimensions.width} height={iconDimensions.height} alt='profile-icon' className={styles.nav_icon}/>
                    profile
                </li>
            </Link>
        </ul>
    </div>
    )
}

export default Navbar
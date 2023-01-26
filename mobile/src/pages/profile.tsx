import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import Header from '../components/Header'
import Link from 'next/link'

const Profile = () => {
    const container = useRef(null);
    const profileDimensions = {
        width: 80,
        height: 80,
    }

    const iconDimensions = {
        width: 15,
        height: 15,
    }

return (
    <div className={styles.app_container} ref={container}>
        <Header />    
        <Navbar />
        
        <div className={styles.content_container}>

            <div className={styles.profile_header}>
                <Image className={styles.profile_image} src="/svg/profile.svg" width={profileDimensions.width} height={profileDimensions.height} alt="profile-img"/>
                <h1 className={styles.h2_title}>Jane Doe</h1>
            </div>

            {/* this card needs to become a component with type = settings-card */}
            <div className={styles.detail_card}>
                <ul>
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>Firstname: </span>
                        Eva
                    </li>
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>Lastname: </span>
                        Leaves
                    </li>
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>E-mail: </span>
                        Leava@gmail.com
                    </li>
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>Birth date: </span>
                        10 / 03 / 1997
                    </li>  
                    <li className={styles.text_block}>
                        <span className={styles.bold_text}>Telephone: </span>
                        +32 464 663 918
                    </li>   
                </ul>

                <hr className={styles.line}/>

                <Link href="/settings" className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Notifications</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </Link>
                <Link href="/settings" className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Settings</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </Link>
                <Link href="/settings" className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Help</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </Link>
            </div>

            {/* sign off button */}
            <button className={`${styles.btn} ${styles.btn_primary}`}>Sign off</button>
        </div>
    </div>
)
}

export default Profile
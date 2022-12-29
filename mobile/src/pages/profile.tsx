import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import Header from '../components/Header'

const profile = () => {
    const container = useRef(null);
    const profileDimensions = {
        width: 60,
        height: 60,
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
                <h1 className={styles.title}>Jane Doe</h1>
            </div>

            {/* this card needs to become a component with type = settings-card */}
            <div className={styles.settings_card}>
                <div className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Profile details</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </div>
                <div className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>My reviews</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </div>
                <div className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Favorite vendors</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </div>
                <div className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Settings</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </div>
            </div>

            {/* sign off button */}
            <button className={`${styles.btn} ${styles.btn_primary}`}>Sign off</button>
        </div>
    </div>
)
}

export default profile
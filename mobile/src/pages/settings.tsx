import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Header from '../components/Header'
import Link from 'next/link'

const settings = () => {
    const iconDimensions = {
        width: 15,
        height: 15,
    }

    const logoDimensions = {
        width: 20,
        height: 20,
    };

return (
    <div className={styles.app_container}>
        <Header />    
        <Navbar />
        
        <div className={styles.content_container}>

{/* search bar */}
<div className={styles.search_bar}>
                    <input
                    type="text"
                    placeholder="I'm looking for..."
                    className={styles.search_input}
                    />
                    <button className={styles.search_button}>
                    <Image
                        src="/svg/search-glass.svg"
                        width={logoDimensions.width}
                        height={logoDimensions.height}
                        alt="Search"
                    />
                    </button>
                </div>
            {/* this card needs to become a component with type = settings-card */}
            <div className={styles.detail_card}>
                <Link href="/settings" className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Privacy</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </Link>
                <Link href="/settings" className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Language</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </Link>
                <Link href="/settings" className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>Security</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </Link>
                <Link href="/settings" className={styles.profile_settings_item}>
                    <h2 className={styles.subtitle}>About Green Guide</h2>
                    <Image className={styles.profile_settings_icon} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </Link>
            </div>
        </div>
    </div>
)
}

export default settings
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import Header from '../components/Header'

const scan = () => {
    const container = useRef(null);
    const imgDimensions = {
        width: 310,
        height: 310,
    }


return (
    <div className={styles.app_container} ref={container}>
        <Header />
        <Navbar />
        <div className={styles.content_container}>
            
            {/* this card need to become a component with type = info-card */}
            <div className={styles.info_card}>
                <p>How it works: This is your qr-code, let the vendor scan this code to collect your points.</p>
            </div>

            <Image src='/svg/qr-placeholder.svg' width={imgDimensions.width} height={imgDimensions.height} alt='QR placeholder'/>

        
        </div>
    </div>

)
}

export default scan
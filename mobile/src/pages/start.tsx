import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import styles from '../../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

const Start = () => {
    const container = useRef(null);
    const logoDimensions = {
        width: 68,
        height: 68,
    }

    const iconDimensions = {
        width: 30,
        height: 30,
    }

    const [width, setWidth] = useState(480);
    const [height, setHeight] = useState(550 / 5.3);

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
        <Card/>
        <h2 className={styles.title}>Popular Green vendors</h2>
        <p className={styles.subtitle}>Give them some love from us!</p>
        <Carousel/>
        <Card/>
        <h2 className={styles.title}>Newest Green vendors</h2>
        <p className={styles.subtitle}>Give them a warm welcome from us!</p>
        <Carousel/>
        {/* this card need to become a component with type = info-card */}
        <div className={`${styles.info_card} ${styles.flex_row}`}>
            <Image className={styles.img} src="/svg/socials/fb.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
            <Image className={styles.img} src="/svg/socials/msg.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
            <Image className={styles.img} src="/svg/socials/ig.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
            <Image className={styles.img} src="/svg/socials/tt.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
            <Image className={styles.img} src="/svg/socials/sc.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
        </div>
    </div>
</div>
)
};


export default Start
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'

const Home = () => {
    const container = useRef(null);
    const logoDimensions = {
        width: 98,
        height: 98,
    }

    const [width, setWidth] = useState(380);
    const [height, setHeight] = useState(800 / 5.3);

    // useEffect(() => {
    //     if (container.current !== null){
    //         setWidth(container.current.offsetWidth);
    //         setHeight(container.current.offsetHeight/5.3);
    //     }
    // }, []);

    return (
        <div className={styles.app_container} ref={container}>
            <Image src='/Blob.png' width={width} height={height} alt='A decorative background' className={styles.blob}/>
            <Image src='/Logo.png' width={logoDimensions.width} height={logoDimensions.height} alt='Green Guide logo' className={styles.logo} style={{ marginTop: height-76, marginLeft: (width-logoDimensions.width)/2 }}/>
            
            <div className={`${styles.content_container} ${styles.spaced}`}>
                <h1 className={styles.large_title}>Welcome</h1>
                <div className={styles.btn_group}>
                    <button className={`${styles.btn} ${styles.btn_primary}`}><a className={styles.link} href="/login">Login</a></button>
                    <button className={`${styles.btn} ${styles.btn_secondary}`}><a className={styles.link} href="/register">Register</a></button>
                </div>
            </div>
        </div>
    )
}

export default Home;
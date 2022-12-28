import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'

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
        <Image src='/Blob.png' width={width} height={height} alt='A decorative background' className={styles.blob}/>
        <Image src='/Logo.png' width={logoDimensions.width} height={logoDimensions.height} alt='Green Guide logo' className={styles.logo} style={{ marginTop: height-76, marginLeft: (width-logoDimensions.width)/2 }}/>
        
        <Navbar />
        <div className={styles.content_container}>
            <h1 className={styles.title}>Score</h1>
            
            <div className={styles.btn_group}>
                <ol>            
                    <li>header</li>
                    <li>intro text</li>
                    <li>points collected from vendors - DB</li>
                    <li>details of the rewards</li>
                </ol>
            </div>
        </div>
    </div>
)
}

export default score
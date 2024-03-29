import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'

const Header = () => {
    const container = useRef(null);
    const logoDimensions = {
        width: 60,
        height: 60,
    }

    const [width, setWidth] = useState(480);
    const [height, setHeight] = useState(560 / 5.3);

return (
    <div>
        <div className={styles.header_text}>
            <span className={styles.intro}>Welcome to</span>
            <h1 className={styles.title}>The Green Guide</h1>
        </div>
        <Image src='/Blob.png' width={width} height={height} alt='A decorative background' className={styles.blob}/>
        <Image src='/Logo.png' width={logoDimensions.width} height={logoDimensions.height} alt='Green Guide logo' className={styles.logo_left}/>
    </div>
)
}

export default Header
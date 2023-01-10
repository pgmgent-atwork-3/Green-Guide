import Navbar from '../components/Navbar'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../../styles/Home.module.scss'
import Header from '../components/Header'
import QRCode from "react-qr-code";

const Scan = () => {
    const container = useRef(null);
    const imgDimension = 310;

    const qrCode = JSON.stringify({
        user: "Chantal"
    })

    return (
        <div className={styles.app_container} ref={container}>
            <Header />
            <Navbar />
            <div className={styles.content_container}>
                
                {/* this card need to become a component with type = info-card */}
                <div className={styles.info_card}>
                    <p>How it works: This is your qr-code, let the vendor scan this code to collect your points.</p>
                </div>

                <QRCode value={qrCode} level='Q' size={imgDimension}/>
                {/* <Image src='/svg/qr-placeholder.svg' width={imgDimension} height={imgDimension} alt='QR code placeholder'/> */}

            </div>
        </div>

    )
}

export default Scan
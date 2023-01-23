import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../../styles/Home.module.scss'
import Header from '../components/Header'
import Model from '../components/Model'

const Score = () => {
    const container = useRef(null);
    const iconDimensions = {
        width: 15,
        height: 15,
    }
return (
    <div className={styles.app_container} ref={container}>
        <Header />
        <Navbar />

        <div className={styles.content_container}>
            
        {/* <Model /> */}
            
            {/* this card need to become a component with type = info-card */}
            <div className={styles.info_card}>
                <p>How it works: When you visit a vendor you can collect loyalty points and earn amazing rewards.</p>
            </div>            

            {/* this card need to become a component with type = reward-card */}
            <div className={styles.reward_card}>
                <div className={styles.reward_header}>
                    <div className={styles.header}>
                        <p className={styles.subtitle}>You collected <span className={styles.accent_color}>72</span> points at</p>
                        <h2 className={styles.h2_title}>Ohne</h2>   
                    </div>
                    <Image className={`${styles.img} ${styles.open}`} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </div>
                <div className={styles.flex_row}>
                    <h3 className={styles.h3}>Collect rewards</h3>
                    <Image src="/svg/info.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </div>
                <div className={styles.rewards}>
                    <div className={styles.reward}>
                        <div className={styles.points_bubble}>
                            <p className={styles.points}>10 <br /> pnts</p>
                        </div>
                        <p className={styles.point_name}>Tote bag</p>
                    </div>
                    <div className={styles.reward}>
                        <div className={styles.points_bubble}>
                            <p className={styles.points}>50 <br /> pnts</p>
                        </div>
                        <p className={styles.point_name}>Free coffee</p>
                    </div>
                    <div className={styles.reward}>
                        <div className={styles.points_bubble}>
                            <p className={styles.points}>125 <br /> pnts</p>
                        </div>
                        <p className={styles.point_name}>Dessert</p>
                    </div>
                    <div className={styles.reward}>
                        <div className={styles.points_bubble}>
                            <p className={styles.points}>200 <br /> pnts</p>
                        </div>
                        <p className={styles.point_name}>Tote bag</p>
                    </div>
                    <div className={styles.reward}>
                        <div className={styles.points_bubble}>
                            <p className={styles.points}>250 <br /> pnts</p>
                        </div>
                        <p className={styles.point_name}>Free coffee</p>
                    </div>
                    <div className={styles.reward}>
                        <div className={styles.points_bubble}>
                            <p className={styles.points}>350 <br /> pnts</p>
                        </div>
                        <p className={styles.point_name}>Dessert</p>
                    </div>
                </div>
                <p className={styles.grey_text}>Show more rewards</p>
            </div>

            <div className={styles.reward_card}>
                <div className={styles.reward_header}>
                    <div className={styles.header}>
                        <p className={styles.subtitle}>You collected <span className={styles.accent_color}>15</span> points at</p>
                        <h2 className={styles.h2_title}>Tasty World</h2>  
                    </div>
                    <Image className={styles.img} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </div>
            </div>

            <div className={styles.reward_card}>
                <div className={styles.reward_header}>
                    <div className={styles.header}>
                        <p className={styles.subtitle}>You collected <span className={styles.accent_color}>10</span> points at</p>
                        <h2 className={styles.h2_title}>Appelier</h2>   
                    </div>
                    <Image className={styles.img} src="/svg/arrow.svg" width={iconDimensions.width} height={iconDimensions.height} alt="profile-img"/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Score
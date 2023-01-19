import React from 'react'
import styles from '../../styles/Home.module.scss'

const Model = () => {
return (
<div className={styles.model}>
    <div className={styles.model_card}>
        <h1 className={styles.title}>Rewards at Ohne</h1>

        <div className={styles.rewards}>
            <div className={styles.reward}>
                <div className={styles.points_bubble_line}>
                    <p className={styles.points}>10 <br /> pnts</p>
                </div>
                <p className={styles.point_name}>Tote bag</p>
            </div>
            <p className={styles.text}>You can choose a tote bag the next time you visit!</p>

            <div className={styles.reward}>
                <div className={styles.points_bubble_line}>
                    <p className={styles.points}>50 <br /> pnts</p>
                </div>
                <p className={styles.point_name}>Free drink</p>
            </div>
            <p className={styles.text}>You can order a free drink the next time you visit!</p>
        
            <div className={styles.reward}>
                <div className={styles.points_bubble_line}>
                    <p className={styles.points}>125 <br /> pnts</p>
                </div>
                <p className={styles.point_name}>Dessert</p>
            </div>
            <p className={styles.text}>You can order a free dessert the next time you visit!</p>
            
            <div className={styles.reward}>
                <div className={styles.points_bubble_line}>
                    <p className={styles.points}>200 <br /> pnts</p>
                </div>
                <p className={styles.point_name}>Aperitif</p>
            </div>
            <p className={styles.text}>You can order a free aperitif the next time you visit!</p>

            <div className={styles.reward}>
                <div className={styles.points_bubble_line}>
                    <p className={styles.points}>250 <br /> pnts</p>
                </div>
                <p className={styles.point_name}>Appetizer</p>
            </div>
            <p className={styles.text}>You can order a free appetizer the next time you visit!</p>


            <div className={styles.reward}>
                <div className={styles.points_bubble_line}>
                    <p className={styles.points}>350 <br /> pnts</p>
                </div>
                <p className={styles.point_name}>50% sale</p>
            </div>
            <p className={styles.text}>You get a 50% sale on your next visit here!</p>
        </div>
    </div>

    <div className={styles.overlay}></div>
</div>
)
}

export default Model
import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'

const Carousel = () => {
return (
    <div className={styles.carousel}>
        <div className={styles.carousel_item}>
            <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
            <h3 className={styles.carousel_title}>Name</h3>
        </div>
        <div className={styles.carousel__item}>
            <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
            <h3 className={styles.carousel_title}>Name</h3>
        </div>
        <div className={styles.carousel_item}>
            <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
            <h3 className={styles.carousel_title}>Name</h3>
        </div>
        <div className={styles.carousel__item}>
            <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
            <h3 className={styles.carousel_title}>Name</h3>
        </div>
        <div className={styles.carousel_item}>
            <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
            <h3 className={styles.carousel_title}>Name</h3>
        </div>
        <div className={styles.carousel__item}>
            <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
            <h3 className={styles.carousel_title}>Name</h3>
        </div>
        <div className={styles.carousel_item}>
            <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
            <h3 className={styles.carousel_title}>Name</h3>
        </div>
        <div className={styles.carousel__item}>
            <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
            <h3 className={styles.carousel_title}>Name</h3>
        </div>
    </div>
)
}

export default Carousel
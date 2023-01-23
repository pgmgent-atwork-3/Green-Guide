import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'

const Carousel = () => {
return (
    <ul className={styles.carousel}>
        <li className={styles.carousel_item}>
            <a href="" className={styles.carousel_link}>
                <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </a>
        </li>
        <li className={styles.carousel__item}>
            <a href="" className={styles.carousel_link}>
                <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
                <span className={styles.carousel_name}>Longer Name</span>
            </a>
        </li>
        <li className={styles.carousel_item}>
            <a href="" className={styles.carousel_link}>
                <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </a>
        </li>
        <li className={styles.carousel__item}>
            <a href="" className={styles.carousel_link}>
                <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
                <span className={styles.carousel_name}>Longer Name</span>
            </a>
        </li>
        <li className={styles.carousel_item}>
            <a href="" className={styles.carousel_link}>
                <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </a>
        </li>
        <li className={styles.carousel__item}>
            <a href="" className={styles.carousel_link}>
                <Image className={styles.img} width={40} height={40} src="/logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </a>
        </li>
    </ul>
)
}

export default Carousel
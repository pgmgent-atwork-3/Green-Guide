import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

const Carousel = () => {
return (
    <ul className={styles.carousel}>
        <li className={styles.carousel_item}>
            <Link className={styles.carousel_link} href="/detail">
                <Image className={styles.img} width={40} height={40} src="/Logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </Link>
        </li>
        <li className={styles.carousel__item}>
            <Link className={styles.carousel_link} href="/detail">
                <Image className={styles.img} width={40} height={40} src="/Logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </Link>
        </li>
        <li className={styles.carousel_item}>
            <Link className={styles.carousel_link} href="/detail">
                <Image className={styles.img} width={40} height={40} src="/Logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </Link>
        </li>
        <li className={styles.carousel__item}>
            <Link className={styles.carousel_link} href="/detail">
                <Image className={styles.img} width={40} height={40} src="/Logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </Link>
        </li>
        <li className={styles.carousel_item}>
            <Link className={styles.carousel_link} href="/detail">
                <Image className={styles.img} width={40} height={40} src="/Logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </Link>
        </li>
        <li className={styles.carousel__item}>
            <Link className={styles.carousel_link} href="/detail">
                <Image className={styles.img} width={40} height={40} src="/Logo.png" alt="alt" />
                <span className={styles.carousel_name}>Name</span>
            </Link>
        </li>
    </ul>
)
}

export default Carousel
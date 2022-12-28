import React from 'react'
import styles from '../../styles/Home.module.scss'

const Navbar = () => {
return (
    <div>
        <ul className={styles.navbar}>
            <li  className={styles.nav_item}><a className={styles.nav_link} href="/start">start</a></li>
            <li  className={styles.nav_item}><a className={styles.nav_link} href="/score">score</a></li>
            <li  className={styles.nav_item}><a className={styles.nav_link} href="/scan">scan</a></li>
            <li  className={styles.nav_item}><a className={styles.nav_link} href="/search">search</a></li>
            <li  className={styles.nav_item}><a className={styles.nav_link} href="/profile">profile</a></li>
        </ul>
    </div>
    )
}

export default Navbar
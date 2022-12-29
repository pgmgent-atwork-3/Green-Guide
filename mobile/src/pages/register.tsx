import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'
const Register = () => {
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
                <h1 className={styles.title}>Register</h1>
                <form className={styles.form} action="">

                    <label htmlFor="">First name</label>
                    <input className={styles.input_field} type="text" name="text" id="firstName" placeholder="First name"/>

                    <label htmlFor="">Last name</label>
                    <input className={styles.input_field} type="text" name="text" id="lastName" placeholder="Last name"/>

                    <label htmlFor="">E-mail</label>
                    <input className={styles.input_field} type="email" name="email" id="email" placeholder="E-mail"/>

                    <label htmlFor="">Password</label>
                    <input className={styles.input_field} type="password" name="password" id="password" placeholder="Password"/>

                    <label htmlFor="">Birth date</label>
                    <input  className={styles.input_field} type="date" name="date" id="date" placeholder="Date"/>

                    <label htmlFor="">Phone number</label>
                    <input  className={styles.input_field} type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone number"/>

                    <div className="form_row">
                        <input className={styles.checkbox} type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <button className={`${styles.btn} ${styles.btn_secondary}`}>Register with Google</button>

                    <button className={`${styles.btn} ${styles.btn_primary}`}>Register</button>
                </form>
                <span className={styles.grey_text}>Already have an account yet?</span>
                <button className={`${styles.btn} ${styles.btn_secondary}`}><a className={styles.link} href="/login">Login</a></button>
            </div>
        </div>
    )
}

export default Register
import { Formik, Form, Field } from 'formik'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.scss'

const Login = () => {
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
                <h1 className={styles.title}>Login</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        remember: false,
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        await fetch("http://localhost:3001/auth/login", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          credentials: "include",
                          body: JSON.stringify(values),
                        })
                          .then((res) => res.json())
                          .catch((err) => console.error(err));
                        setSubmitting(false);
                      }}
                >
                    <Form className={styles.form} action="">
                        <label htmlFor="email">E-mail</label>
                        <Field className={styles.input_field} type="email" name="email" id="email" placeholder="E-mail"/>

                        <label htmlFor="password">Password</label>
                        <Field className={styles.input_field} type="password" name="password" id="password" placeholder="Password"/>

                        <div className="form_row">
                            <Field className={styles.checkbox} type="checkbox" name="remember" id="remember"/>
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <span  className={styles.grey_text}>Forgot your password?</span>
                        <button className={`${styles.btn} ${styles.btn_secondary}`}> <a href="/start">Login with Google</a> </button>

                        <button type="submit" className={`${styles.btn} ${styles.btn_primary}`}>Login</button>
                    </Form>
                </Formik>
                <span className={styles.grey_text}>Dont have an account?</span>
                <button className={`${styles.btn} ${styles.btn_secondary}`}><a className={styles.link} href="/register">Register</a></button>
            </div>
        </div>
    )
}

export default Login
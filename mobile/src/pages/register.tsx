import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react';

const Register = () => {
    const container = useRef(null);
    const logoDimensions = {
        width: 98,
        height: 98,
    }

    const [width, setWidth] = useState(480);
    const [height, setHeight] = useState(800 / 5.3);

    return (
        <div className='app-container' ref={container}>
            <Image src='/Blob.png' width={width} height={height} alt='A decorative background' className='blob'/>
            <Image src='/Logo.png' width={logoDimensions.width} height={logoDimensions.height} alt='Green Guide logo' className='logo' style={{ marginTop: height-76, marginLeft: (width-logoDimensions.width)/2 }}/>
            
            <div className='content-container'>
                <h1>Register</h1>
                <form action="">
                    <label htmlFor="">First name</label>
                    <input type="text" name="text" id="firstName" placeholder="First name"/>

                    <label htmlFor="">Last name</label>
                    <input type="text" name="text" id="lastName" placeholder="Last name"/>

                    <label htmlFor="">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="E-mail"/>

                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password"/>

                    <label htmlFor="">Birth date</label>
                    <input type="date" name="date" id="date" placeholder="Date"/>

                    <label htmlFor="">Phone number</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone number"/>

                    <button className='btn btn-primary'>Register</button>
                </form>
                <span>Already have an account?</span>
                <button className='btn btn-secondary'><a href="/login">Login</a></button>
            </div>
        </div>
    )
}

export default Register
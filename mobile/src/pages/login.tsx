import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react';

const Login = () => {
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
                <h1>Login</h1>
                <form action="">
                    <label htmlFor="">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="E-mail"/>

                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password"/>

                    <input type="checkbox" name="remember" id="remember"/>
                    <label htmlFor="remember">Remember me</label>

                    <span>Forgot your password?</span>
                    <button>Sign in with Google</button>

                    <button className='btn btn-primary'>Login</button>
                </form>
                <span>Dont have an account yet?</span>
                <button className='btn btn-secondary'><a href="/register">Register</a></button>
            </div>
        </div>
    )
}

export default Login
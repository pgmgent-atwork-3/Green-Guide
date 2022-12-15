import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {
    const container = useRef(null);
    const logoDimensions = {
        width: 98,
        height: 98,
    }

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(container.current.offsetWidth);
        setHeight(container.current.offsetHeight/5.3);
    }, []);

  return (
    <div className='app-container' ref={container}>
        <Image src='/Blob.png' width={width} height={height} alt='A decorative background' className='blob'/>
        <Image src='/Logo.png' width={logoDimensions.width} height={logoDimensions.height} alt='Green Guide logo' className='logo' style={{ marginTop: height-76, marginLeft: (width-logoDimensions.width)/2 }}/>
        <h1>Welcome</h1>
        <button>Login</button>
        <button>Register</button>
    </div>
  )
}

export default Home;
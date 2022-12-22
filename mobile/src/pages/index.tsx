import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'

const Home = () => {
    const container = useRef(null);
    const logoDimensions = {
        width: 98,
        height: 98,
    }

    const [width, setWidth] = useState(480);
    const [height, setHeight] = useState(800 / 5.3);

    // useEffect(() => {
    //     if (container.current !== null){
    //         setWidth(container.current.offsetWidth);
    //         setHeight(container.current.offsetHeight/5.3);
    //     }
    // }, []);

    return (
        <div className='app-container' ref={container}>
            <Image src='/Blob.png' width={width} height={height} alt='A decorative background' className='blob'/>
            <Image src='/Logo.png' width={logoDimensions.width} height={logoDimensions.height} alt='Green Guide logo' className='logo' style={{ marginTop: height-76, marginLeft: (width-logoDimensions.width)/2 }}/>
            
            <div className='content-container'>
                <h1>Welcome</h1>
                <div className="btn-group">
                    <button className='btn btn-primary'><a href="/login">Login</a></button>
                    <button className='btn btn-secondary'><a href="/register">Register</a></button>
                </div>
            </div>
        </div>
    )
}

export default Home;
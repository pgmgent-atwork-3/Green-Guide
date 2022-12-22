import React from 'react'
import Navbar from '../components/Navbar'

const score = () => {
return (
    <div>
        <h1>Score</h1>
        <Navbar />
        <hr />
        <ol>            
            <li>header</li>
            <li>intro text</li>
            <li>points collected from vendors - DB</li>
            <li>details of the rewards</li>
        </ol>
    </div>  
    )
}

export default score
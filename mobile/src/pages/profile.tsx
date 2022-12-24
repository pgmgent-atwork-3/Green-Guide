import React from 'react'
import Navbar from '../components/Navbar'

const profile = () => {
  return (
    <div>
        <h1>Profile</h1>
        <Navbar />
        <hr />
        <ol>
            <li>header</li>
            <li>profile image and name</li>
            <li>settings block</li>
            <li>sign off button</li>
        </ol>
    </div>
  )
}

export default profile
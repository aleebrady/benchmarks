import React from 'react'
import Logo from '../logo.svg'

const Home = () => {
    return (
        <div className="container">
            <p>Welcome to a page that hopefully works</p>
            <img src={Logo} width="500" alt="logo" />
            <img src={process.env.PUBLIC_URL + "/pr.png"} width="192" alt="second logo" />
        </div>
    )
}

export default Home
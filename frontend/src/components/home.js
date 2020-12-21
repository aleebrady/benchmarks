import React from 'react'

const Home = () => {
    return (
        <div className="container">
            <p>Welcome to a page that hopefully works</p>
            <img src={process.env.PUBLIC_URL + "/recordlogo.png"} width="300" alt="logo" /> 
            <p><strong>Sponsored by:</strong></p>
            <img src={process.env.PUBLIC_URL + "/jordan.png"} width="200" alt="second logo" />
        </div>
    )
}

export default Home
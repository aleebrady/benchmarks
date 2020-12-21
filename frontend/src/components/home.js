import React from 'react'

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to Your Personal Fitness Tracker</h1>
            <img src={process.env.PUBLIC_URL + "/recordlogo.png"} width="300" alt="logo" />
            <p><strong>Sponsored by:</strong></p>
            <img src={process.env.PUBLIC_URL + "/cf.png"} width="200" alt="second logo" /><br></br>
            <img src={process.env.PUBLIC_URL + "/jordan.png"} width="200" alt="third logo" />
        </div>
    )
}

export default Home
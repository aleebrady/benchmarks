import React from 'react'

const About = () => {
    return (
        <div className="container">
            <h1>Track YOUR Progress</h1>
            <p>A wise person once said, 'In order to know where you're going, you have to know where you are'</p>
            <p>This App is used by top athletes</p>
            <p>Start tracking your progress today!</p>
            <img src={process.env.PUBLIC_URL + "/track.png"} width="700" alt="track" />
        </div>
    )
}

export default About
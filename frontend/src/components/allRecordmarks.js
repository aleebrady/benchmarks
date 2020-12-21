import React from 'react'
import Recordmarks from './recordmarks'

const AllRecordmarks = (props) => {
    return (
        <div className="container">
            <h1>All Personal Records</h1>
            <img src={process.env.PUBLIC_URL + "/little.png"} width="200" alt="logo" /><br></br>
            {props.workouts.map(workout =>
                <Recordmarks recordmarks={workout.recordmarks} />
                )}
        </div>
    )
}

export default AllRecordmarks
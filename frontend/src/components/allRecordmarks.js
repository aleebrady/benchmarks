import React from 'react'
import Recordmarks from './recordmarks'

const AllRecordmarks = (props) => {
    return (
        <div className="container">
            {props.workouts.map(workout =>
                <Recordmarks recordmarks={workout.recordmarks} />
                )}
        </div>
    )
}

export default AllRecordmarks
import React from 'react'
import {Link} from 'react-router-dom'
import {Button, ListGroup} from 'react-bootstrap'
import {deleteWorkout} from '../actions/deleteWorkout'
import {connect} from 'react-redux'

const Workouts = (props) => {

    const handleDelete = (workout) => {
        props.deleteWorkout(workout.id)
    }

    return( 
        <div className="container">
            {props.workouts.map(workout =>
            <ListGroup>
                <ListGroup.Item>
                    <h5><Link to={`/workouts/${workout.id}`}>{workout.name}</Link></h5>
                    <h6>{workout ? workout.recordmarks.length === 1 ? `${workout.recordmarks.length} Recordmark` : `${workout.recordmarks.length} Recordmarks` : null}</h6>
                    <p><i>{workout.description}</i></p>
                    <Button variant="danger" onClick={e =>
                    window.confirm('Delete workout and all associated benchmarks?') &&
                    handleDelete(workout)
                    } type="submit">Delete Workout
                    </Button>
                </ListGroup.Item>
                <br />
            </ListGroup>
            )}
        </div>
    )

}

export default connect(null, {deleteWorkout})(Workouts)
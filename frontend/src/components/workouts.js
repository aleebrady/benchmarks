import React from 'react'
import {Link} from 'react-router-dom'
import {Button, ListGroup} from 'react-bootstrap'
import {deleteWorkout} from '../actions/deleteWorkout'
import {connect} from 'react-redux'

/*
    1. react functional components
    2. react hooks
    3. react context api = kinda redux 
    
*/

const Workouts = ({ workouts, deleteWorkout }) => {

    const handleDelete = ({ id }) => {
        deleteWorkout(id)
    }

    return( 
        <div className="container">
            <h1>All Workouts</h1>
            <img src={process.env.PUBLIC_URL + "/barbell.png"} width="200" alt="logo" /><br></br>
            {workouts.map(workout =>
            <ListGroup>
                <ListGroup.Item>
                    <h5><Link to={`/workouts/${workout.id}`}>{workout.name}</Link></h5>
                    <h6>{workout ? workout.recordmarks.length === 1 ? `${workout.recordmarks.length} Recordmark` : `${workout.recordmarks.length} Recordmarks` : null}</h6>
                    <p><i><strong>Focus:</strong> {workout.focus}</i></p>
                    <p><i><strong>Description:</strong> {workout.description}</i></p>
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
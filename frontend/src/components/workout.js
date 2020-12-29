import React from 'react'
import {deleteWorkout} from '../actions/deleteWorkout'
import {connect} from 'react-redux'
import {Row, Col, ListGroup} from 'react-bootstrap'
import RecordmarksContainer from '../containers/recordmarksContainer'

const Workout = (props) => {
    // eslint-disable-next-line
    let workout = props.workouts.filter(workout => workout.id == props.match.params.id)[0]
    
    return (
    <React.Fragment>
        <Row>
            <Col>
                <ListGroup>
                    <ListGroup.Item>
                        <h5><strong>{workout ? workout.name : null}</strong></h5>
                        <h6>{workout ? workout.recordmarks.length === 1 ? `${workout.recordmarks.length} Recordmark` : `${workout.recordmarks.length} Recordmarks` : null}</h6>
                        <p><i>{workout ? workout.focus : null}</i></p>
                        <p><i>{workout ? workout.description : null}</i></p>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        <RecordmarksContainer workout={workout} />
    </React.Fragment>
    )
}

export default connect(null, {deleteWorkout})(Workout)
import React from 'react'
import {connect} from 'react-redux'
import {deleteRecordmark} from '../actions/deleteRecordmark'
import {Button, ListGroup} from 'react-bootstrap'

const Recordmarks = (props) => {

    const handleDelete = (recordmark) => {
        props.deleteRecordmark(recordmark.id, recordmark.workout.id)
    }

    return (
        <div>
            {props.recordmarks && props.recordmarks.map(recordmark =>
                <div>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>{recordmark.name}</strong><br />
                            <a href={recordmark.link} target="_blank" rel="noopener noreferrer">Link</a><br />
                            <p><i>{recordmark.notes}</i></p>
                            <Button variant="danger" onClick={e =>
                                window.confirm('Delete recordmark?') &&
                                handleDelete(recordmark)
                                }
                            >Delete</Button>
                        </ListGroup.Item>
                    </ListGroup>
                    <br/>
                </div>
            )}
        </div>
    )

}

export default connect(null, {deleteRecordmark})(Recordmarks)
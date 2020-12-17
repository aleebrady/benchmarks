import React from 'react'
import {connect} from 'react-redux'
import {addRecordmark} from '../actions/addRecordmark'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class RecordmarkInput extends React.Component {

    state = {name: "", link: "", notes: ""}

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addRecordmark(this.state, this.props.workout.id)
        this.setState({name: "", link: "", notes: ""})
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group>
                    <ListGroup>
                    <ListGroup.Item><strong>Add a New Recordmark</strong></ListGroup.Item><br />
                        </ListGroup>
   <Form.Control type="text" name="name" onChange={this.handleOnChange} placeholder="Name" value={this.state.name}/><br/>
                        <Form.Control type="text" name="link" onChange={this.handleOnChange} placeholder="Link" value={this.state.link}/><br/>
                        <Form.Control as="textarea" rows="3" name="notes" onChange={this.handleOnChange} placeholder="Notes" value={this.state.notes}/><br/>
                        <Button variant="primary" type="submit">
                            Add Recordmark
                        </Button>

                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default connect(null, {addRecordmark})(RecordmarkInput)
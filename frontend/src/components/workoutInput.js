import React from 'react'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class WorkoutInput extends React.Component {

    state = {name: ""}

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addWorkout(this.state)
        this.setState({name: "", focus: "", description: ""})
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><h1>Create a New Workout</h1></Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleOnChange} placeholder="Workout Name" value={this.state.name}/><br />
                        <Form.Control type="text" name="focus" onChange={this.handleOnChange} placeholder="focus" value={this.state.focus}/><br />
                        <Form.Control as="textarea" rows="3" name="description" onChange={this.handleOnChange} placeholder="Workout Description" value={this.state.description}/>
                    </Form.Group>
                    <h4>Recommended Challenge:</h4>
                    <img src={process.env.PUBLIC_URL + "/murph.png"} width="300" alt="logo" /><br></br>
                    <Button variant="primary" type="submit">
                        Submit New Workout
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {addWorkout})(WorkoutInput)
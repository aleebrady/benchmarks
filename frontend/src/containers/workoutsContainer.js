import React from 'react'
import Workouts from '../components/workouts'
import {Route, Switch} from 'react-router-dom'
import WorkoutInput from '../components/workoutInput'
import Workout from '../components/workout'
import {fetchWorkouts} from '../actions/fetchWorkouts'
import {connect} from 'react-redux'

class WorkoutsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchWorkouts()
    }

    render() {
        return( 
            <Switch>
                <Route exact path="/workouts/new" component={WorkoutInput}/>
                <Route path="/workouts/:id" render={(routerProps) => <Workout {...routerProps} workouts={this.props.workouts}/>} />
                <Route exact path="/workouts" render={() => <Workouts workouts={this.props.workouts}/>} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        workouts: state.workouts
    }
}

export default connect(mapStateToProps, {fetchWorkouts})(WorkoutsContainer)
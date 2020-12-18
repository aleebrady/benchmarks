import React from 'react'
import RecordmarkInput from '../components/recordmarkInput'
import Recordmarks from '../components/recordmarks'
import {Row, Col, Container} from "react-bootstrap";
import {Route, Switch} from 'react-router-dom'
import AllRecordmarks from '../components/allRecordmarks'
import {connect} from 'react-redux';
import {fetchWorkouts} from '../actions/fetchWorkouts'

class RecordmarksContainer extends React.Component {

    componentDidMount() {
        this.props.fetchWorkouts()
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/recordmarks" render={() => <AllRecordmarks workouts={this.props.workouts}/>}/>
                    <Route exact path="/workouts/:id" render={(routerProps) =>
                        <React.Fragment>
                            <Row>
                                <Col>
                                    <RecordmarkInput {...routerProps} workout={this.props.workout}/>
                                </Col>
                                <Col>
                                    <Container>
                                        <Recordmarks {...routerProps} recordmarks={this.props.workout && this.props.workout.recordmarks}/>
                                    </Container>
                                </Col>
                            </Row>
                        </React.Fragment>}
                    />
                </Switch>
                </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        workouts: state.workouts
    }
}

export default connect(mapStateToProps, {fetchWorkouts})(RecordmarksContainer)
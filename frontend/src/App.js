import React from 'react'
import WorkoutsContainer from './containers/workoutsContainer'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, Nav} from "react-bootstrap"
import About from './components/about'
import Home from './components/home'
import RecordmarksContainer from './containers/recordmarksContainer'
import './App.css'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/workouts"><strong>My Workouts</strong></Nav.Link>
            <Nav.Link as={Link} to="/workouts/new"><strong>Create a Workout</strong></Nav.Link>
            <Nav.Link as={Link} to="/recordmarks"><strong>All Recordmarks</strong></Nav.Link>
            <Nav.Link as={Link} to="/about"><strong>About</strong></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar><br />
        <Route path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
        <WorkoutsContainer />
        <Route exact path="/recordmarks" component={RecordmarksContainer}/>
        </Router>
      </div>
    )
  }
}

export default App;
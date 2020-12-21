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
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/workouts">My Workouts</Nav.Link>
            <Nav.Link as={Link} to="/workouts/new">Create a Workout</Nav.Link>
            <Nav.Link as={Link} to="/recordmarks">All Recordmarks</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
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

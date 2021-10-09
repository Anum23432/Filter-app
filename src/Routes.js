import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog";
import Details from "./components/Details";
import Navbar from 'react-bootstrap/Navbar';
import Home from "./components/Home";
import './App.css';






function Routes() {
  
  return (
    <>
      
      <Router>
      <Navbar bg="dark" fixed="top">
          <div className="nav">
            <Navbar.Brand className="heading" style={{ color: 'white' }} as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Brand className="heading" style={{ color: 'white' }} as={Link} to="/Blog">Let's Start</Navbar.Brand>
          </div>
        </Navbar>
        
        <Switch>
        <Route path="/blog">

          <Blog />
        </Route>
        <Route path="/details/:id" render={props => (<Details {...props}
        />)
        }>

        </Route>
        <Route path="/"><Home/></Route>
        </Switch>
      </Router>
   
      
    </>
  )
}

export default Routes;
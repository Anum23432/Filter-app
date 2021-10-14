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
import { useHistory } from "react-router";






function Routes() {
   let history = useHistory();
  
  return (
    <>
      
      <Router>
      <Navbar bg="dark" fixed="top" className="justify-content-center ">
          <div className="nav">
            <Navbar.Brand className="navbtn" style={{ color: 'white',fontSize:'25px' }} onClick={() => history.push("/Home")}>Home</Navbar.Brand>
            <Navbar.Brand className="navbtn" style={{ color: 'white',fontSize:'24px' }} onClick={() => history.push("/Blog")}> Mobiles </Navbar.Brand>
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

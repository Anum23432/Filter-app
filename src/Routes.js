import React from "react";
import {
  Switch,
  Route 
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog";
import Details from "./components/Details";
import Navbar from 'react-bootstrap/Navbar';
import Home from "./components/Home";
import './App.css';
import {useHistory} from 'react-router-dom';






function Routes() {
  let history = useHistory();
  
  return (
    <>
      
      
      <Navbar bg="dark" fixed="top" className="justify-content-center ">
          <div className="nav">
            <Navbar.Brand className="navbtn" style={{ color: 'white' }} onClick={() => history.push("/Home")}>Home</Navbar.Brand>
            <Navbar.Brand className="navbtn" style={{ color: 'white' }} onClick={() => history.push("/blog")}> Mobiles </Navbar.Brand>
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
      
   
      
    </>
  )
}

export default Routes;

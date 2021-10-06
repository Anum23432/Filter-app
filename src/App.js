import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog";
import Details from "./components/Details";


function App() {
  return (
    <>
      <h1 className='text-center text-info mt-3'>dynamic routing</h1>
      <Router>
        <Link to="/blog">go to blog</Link>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/details/:id" render={props => (<Details {...props}
        />)
        }>

        </Route>



      </Router>
    </>
  )
}

export default App;

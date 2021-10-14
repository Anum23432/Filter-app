import React from "react";
import './App.css';
import Routes from './Routes';
import { HashRouter } from "react-router-dom";





function App() {

  return (
    <>
      <HashRouter>
        <Routes />
      </HashRouter>
    </>
  )
}

export default App;

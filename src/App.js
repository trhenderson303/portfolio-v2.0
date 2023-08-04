import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes" ;
import './styles/main.css';
import React, { useEffect } from 'react';
import Granim from 'granim';
import {AnimatePresence} from 'framer-motion';

const logo = require('./assets/trh.png')

function App() {
  useEffect(() => {
    new Granim({
      element: ".home-canvas",
      direction: "top-bottom",
      opacity: [0.5, 1],
      states: {
        "default-state": {
          gradients: [
            ["#010c14", "#092e4a", "#3B94C4"],
            [ "#092e4a", "#3B94C4", "#010c14"],
            [ "#3B94C4", "#010c14", "#092e4a"],
            // ["#A65140", "#C07B32"],
          ],
          transitionSpeed: 10000,
        }
      }
    })
  });
  return (
    <>     
      <Router>
        <div className='home-canvas-wrapper'>
          <canvas className="home-canvas" />
          <img src={logo} className="logo" alt="TRH-logo"></img>
        <AnimatedRoutes/ >
      </div>
    </Router >
    </> 
      
  );

}

export default App;

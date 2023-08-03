import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {

  const skyline = require('../assets/skyline.png')
  const portrait = require('../assets/portrait.png')

  return (

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        exit={{y: window.innerHeight}}> 
      <div className="home-container">
        <div className='split-box'> 
        <motion.div
          animate={{x: 0, y: 0, scale: 1 }}
          initial={{x: -1000, y: -1000, scale: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 50 }}
          
        > <Link to={"/portfolio"} className="home-item">
        <h1> Portfolio </h1>
      </Link> </motion.div>
      
      <motion.div
          animate={{x: 0, y: 0, scale: 1 }}
          initial={{x: -1000, y: -1000, scale: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 40 }}
          
        ><Link to={"/about"} className="home-item">
        <h1> About </h1>
          </Link>
        </motion.div>


        <motion.div
          animate={{x: 0, y: 0, scale: 1 }}
          initial={{x: -1000, y: -1000, scale: 0 }}
          transition={{ type: "spring", damping: 8, stiffness: 30 }}
          
        ><Link to={"/contact"} className="home-item">
        <h1> Contact </h1>
          </Link>
        </motion.div>
      
      
        </div>
        <div className='portrait-box'>
          <motion.div
          animate={{scale: 1 }}
          initial={{ scale: 0 }}> 
            <img src={portrait} className="portrait"></img>
            </motion.div>
        </div>
        <motion.div
          className="skyline"
          animate={{rotateX: 0, y: 0, duration: 4 }}
          initial={{ rotateX: -100 }}
          transition={{ type: "tween" }}
          exit={{ y: -10000, duration: 0}}
        > <img src={skyline} className="skyline"></img> </motion.div>
        </div>
    </motion.div>
    
  );
}


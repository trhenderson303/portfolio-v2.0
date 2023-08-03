import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
export default function Contact() {

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight }}
    >
      <div className="page-container">
        <h1 id="page-header"> Contact </h1>
        <div className="body-box">
          <div className="nav-box">
            <Nav />
          </div>
          
          </div>
        </div>
    </motion.div>
  );
}

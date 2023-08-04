import * as React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export default function About() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight }}
    >
      <div className="page-container">
        <h1 id="page-header"> About Me </h1>
        <div class="body-box">
          <div className="nav-box">
            <Nav />
          </div>
          <div className="content-container-b">
            <p>
              {" "}
              Hello, reader! My name is Thomas Henderson and I'm a 28-year old
              from Denver, Colorado.{" "}
            </p>
            <p>
              {" "}
              I graduated from the University of Colorado, Boulder in 2018,
              where I earned a degree in International Affairs, while getting my
              feet wet in web development with a certificate in Technology, Arts
              and Media.{" "}
            </p>
            <p>
              {" "}
              In 2023, I decided to unertake a new challenge and enroll in the
              University of Denver's full-stack development program and look to
              jump start a career in web development. My journey has been a bit
              unique. From working in public and media relations for
              professional sports teams, to teaching English in Madrid, Spain, I
              have been incredibly fortunate to gain a distinct skillset and
              perspective.
            </p>

            <Button
              href="https://docs.google.com/document/d/e/2PACX-1vSP3KiFCg8FYpvGLfNqNLE-Je-5mrjJC-ZkfNgODrXsvUNZw29XYRjbmWG0fDY6Yf0oaV_ZwcsHmHtO/pub
                      "
              target="_blank"
              size="small"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

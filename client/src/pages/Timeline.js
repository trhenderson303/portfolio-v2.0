import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const customContent = [
    <div className="timeline-card">
      <h3> 2023 </h3>
      <h4> University of Denver </h4>
      <p>Full-Stack Development Bootcamp</p>
      <Button className="timeline-btn" onClick={handleOpen}>
        {" "}
        Click
      </Button>
    </div>,
    <div className="timeline-card">
      <h3> 2022 </h3>
      <h4> Universidad Alcala de Heranes </h4>
      <p>Master's of International Education</p>
      <Button className="timeline-btn" onClick={handleOpen}>
        {" "}
        Click
      </Button>
    </div>,
    <div className="timeline-card">
      <h3> 2018 </h3>
      <h4> University of Colorado </h4>
      <p>Bachelor's of International Affair </p>
      <p>Certificate in Technology, Arts & Media </p>
      <Button className="timeline-btn" onClick={handleOpen}>
        {" "}
        Click
      </Button>
    </div>,
  ];

  const items = [
    {
      key: 1,
    },
    {
      key: 2,
    },
    {
      key: 3,
    },
  ];

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight }}
    >
      <div className="home-container">
        <h1 id="page-header"> Contact </h1>
        <div className="body-box">
          <div className="nav-box">
            <Nav />
          </div>
          <div className="timeline-container">
            <Chrono items={items} mode="VERTICAL" flipLayout cardHeight={200}>
              {customContent}
            </Chrono>
          </div>
          <div className="modal-container">
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

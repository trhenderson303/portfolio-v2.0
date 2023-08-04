import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Contact() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight }}
    >
      <div className="page-container">
        <h1 id="page-header"> Contact </h1>
        <div class="body-box">
          <div className="nav-box">
            <Nav />
          </div>

          <div className="content-container-b">
          <div className="connect-box">
            <h6> Connect with me!</h6>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" size="large" aria-label="github" href="https://github.com/trhenderson303" target="blank">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" size="large" aria-label="linkedin" href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" size="large" aria-label="twitter" href="https://twitter.com/t_r_henderson" target="_blank">
                <TwitterIcon />
              </IconButton>
            </Stack>
            </div>
            <div class="form-box"> 
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: "0.3rem",
                backgroundColor: "#ffffff80",
                padding: "1rem",
              }}
              component="form"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField required fullWidth label="First Name" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField required fullWidth label="Last Name" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="email"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Phone"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="outlined-multiline-flexible, fullWidth"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00000080",
                  marginY: 1,
                }}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
              </Box>
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

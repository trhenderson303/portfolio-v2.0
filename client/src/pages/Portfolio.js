import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Nav from "../components/Nav";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%", duration: 1 }}
      exit={{ y: window.innerHeight, delay: 1 }}
    >
      
      <div className="page-container">
        <h1 id="page-header"> Portfolio </h1>
        <div class="body-box">
          <div className="nav-box">
            <Nav />
          </div>
          <div className="content-container">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    title="fruit"
                  />
                  <CardContent>
                    <Typography gutterBottom id="custom-card-title">
                      Cache Money Records
                    </Typography>
                    <Typography id="custom-card-caption">
                      A personal assistant app to help budget responsibly
                      (coming Aug. 3)
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="custom-button"
                      href="#"
                      target="_blank"
                      size="small"
                    >
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    title="fruit"
                  />
                  <CardContent>
                    <Typography gutterBottom id="custom-card-title">
                      Fruit Finder
                    </Typography>
                    <Typography id="custom-card-caption">
                      A Social Media App for fruit lovers!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="custom-button"
                      href="https://fruit-finder-f298ed9223ea.herokuapp.com/"
                      target="_blank"
                      size="small"
                    >
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://images.unsplash.com/photo-1594499468121-f45e83e30df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80"
                    title="dog and human"
                  />
                  <CardContent>
                    <Typography gutterBottom id="custom-card-title">
                      PelPal
                    </Typography>
                    <Typography id="custom-card-caption">
                      A personal assistant app to help manage all of your pet's
                      needs
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="custom-button"
                      href="https://outlawdisco.github.io/Pet-Pal/"
                      target="_blank"
                      size="small"
                    >
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://media.istockphoto.com/id/610666864/vector/global-warming-headline-newspaper-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=u9oHQFinPoFLz1FYYHzqSIj3hlKdS-c-J458PWMgsCQ="
                    title="Newspaper Weather Headline"
                  />
                  <CardContent>
                    <Typography gutterBottom id="custom-card-title">
                      Weather Times
                    </Typography>
                    <Typography id="custom-card-caption">
                      An old newspaper themed weather dashboard.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="custom-button"
                      href="https://trhenderson303.github.io/weather-app/"
                      target="_blank"
                      size="small"
                    >
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    title="Computers with Codes"
                  />
                  <CardContent>
                    <Typography gutterBottom id="custom-card-title">
                      JavaScript Quiz
                    </Typography>
                    <Typography id="custom-card-caption">
                      A basic JavaScript quiz game
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="custom-button"
                      href="https://trhenderson303.github.io/javascript-quiz/"
                      target="_blank"
                      size="small"
                    >
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} mb={5}>
                <Card sx={{ height: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                    title="Person taking notes"
                  />
                  <CardContent>
                    <Typography gutterBottom id="custom-card-title">
                      Note Taker App
                    </Typography>
                    <Typography id="custom-card-caption">
                      The only notepad application you need!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="custom-button"
                      href="https://note-taker-th303-6bd4ca78bae6.herokuapp.com/"
                      target="_blank"
                      size="small"
                    >
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

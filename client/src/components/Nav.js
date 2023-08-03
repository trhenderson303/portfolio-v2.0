import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="nav-list"
    >
      <List>
          <ListItem disablePadding>
            <ListItemButton>
            <Link to={"/"} className="nav-item" style={{ marginLeft: "2rem" }}>
            Home
            </Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <Link to={"/portfolio"} className="nav-item" style={{ marginLeft: "2rem" }}>
            Portfolio
            </Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <Link to={"/about"} className="nav-item" style={{ marginLeft: "2rem" }}>
            About
            </Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <Link to={"/contact"} className="nav-item" style={{ marginLeft: "2rem" }}>
            Contact
            </Link>
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} id="nav-key"> <ArrowRightIcon sx={{ color: "white", fontSize: 50 }} /> </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

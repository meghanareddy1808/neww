import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [contactAnchorEl, setContactAnchorEl] = React.useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);

  const handleContactClick = (event) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleAboutClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setContactAnchorEl(null);
    setAboutAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src="/path_to_your_logo.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
          Your Logo
        </Typography>
        <div>
          <Button color="inherit" onClick={handleContactClick}>
            Contact
          </Button>
          <Menu
            anchorEl={contactAnchorEl}
            open={Boolean(contactAnchorEl)}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'contact-button' }}
          >
            <MenuItem onClick={handleClose}>Contact Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Contact Option 2</MenuItem>
          </Menu>

          <Button color="inherit" onClick={handleAboutClick}>
            About
          </Button>
          <Menu
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'about-button' }}
          >
            <MenuItem onClick={handleClose}>About Option 1</MenuItem>
            <MenuItem onClick={handleClose}>About Option 2</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

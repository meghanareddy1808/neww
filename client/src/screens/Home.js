import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled('div')({
  display: 'flex',
});

const Sidebar = styled('div')(({ theme, collapsed }) => ({
  width: collapsed ? '80px' : '240px',
  transition: 'width 0.3s',
  backgroundColor: theme.palette.background.paper,
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  boxShadow: theme.shadows[5],
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const Content = styled('div')(({ theme, collapsed }) => ({
  marginLeft: collapsed ? '80px' : '240px',
  padding: theme.spacing(3),
  transition: 'margin-left 0.3s',
  width: 'calc(100% - 240px)',
  marginTop: theme.spacing(8), // Offset to account for the navbar
}));

const ToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: 1100,
}));

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const userMenu = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'Appointments', path: '/appointments', icon: <ListIcon /> },
    { name: 'Apply Doctor', path: '/apply-doctor', icon: <LocalHospitalIcon /> },
  ];

  const adminMenu = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'Forums', path: '/forums', icon: <ForumIcon /> },
    { name: 'Counselling', path: '/counselling', icon: <LocalHospitalIcon /> },
    { name: 'Login', path: '/login', icon: <PersonIcon /> },
  ];

  const user = { isAdmin: true }; // Example user object
  const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
    
      <Container>
        <Sidebar collapsed={collapsed}>
          <ToggleButton onClick={toggleSidebar}>
            <MenuIcon />
          </ToggleButton>
          <List>
            {menuToBeRendered.map((menu, index) => (
              <ListItem button component={Link} to={menu.path} key={index}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                {!collapsed && <ListItemText primary={menu.name} />}
              </ListItem>
            ))}
          </List>
        </Sidebar>
        <Content collapsed={collapsed}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the Dashboard
          </Typography>
          <Typography variant="body1">
            Here is some important content...
          </Typography>
        </Content>
      </Container>
    </>
  );
};

export default Home;

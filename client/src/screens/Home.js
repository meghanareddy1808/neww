import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Home.css';
import img1 from './1.jpeg'; // Import the image

function Home() {
  const [collapsed, setCollapsed] = useState(true);

  const userMenu = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-line'
    },
    {
      name: 'Appointments',
      path: '/appointments',
      icon: 'ri-file-list-line'
    },
    {
      name: 'Apply Doctor',
      path: '/apply-doctor',
      icon: 'ri-hospital-line'
    },
  ];

  const adminMenu = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-line'
    },
    {
      name: 'ContactUs',
      path: '/users',
      icon: 'ri-user-line',
    },
    {
      name: 'Counselling',
      path: '/counselling',
      icon: 'ri-doctor-line',
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: 'ri-user-line',
    },
  ];

  const user = { isAdmin: true }; // Example user object
  const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  

  return (
    <div className="container">
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="toggle-button" onClick={toggleSidebar}>
          {collapsed ? '>' : '<'}
        </div>
        <div className="menu">
          {menuToBeRendered.map((menu, index) => (
            <div key={index} className={`menu-item`}>
              <Link to={menu.path}>
                <i className={menu.icon}></i>
                {!collapsed && <span>{menu.name}</span>}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <div className="left">
          {/* Add your main content here */}
          <h1>Welcome to the Dashboard</h1>
          <p>Here is some important content...</p>
        </div>
        
      </div>
    </div>
  );
}

export default Home;


import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Typography, Drawer, List, Toolbar, AppBar, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, CssBaseline, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import LeftDrawer from './LeftDrawer';

const drawerWidth = 240;

const menuItems = [
  /*{ text: 'Home', icon: <HomeIcon />, path: '/home' },*/
  { text: 'Movie List', icon: <InfoIcon />, path: '/' },
  { text: 'Admin Area', icon: <SettingsIcon />, path: '/AdminArea' },
];


export default function Layout() {
  return (
    <Box sx={{ display: 'flex' }}> 
     <LeftDrawer drawerWidth={drawerWidth}/>
      <Box component="main" sx={{ flexGrow: 1, p: 5, width: `calc(100% - ${drawerWidth}px)` }}>
        <Outlet />
      </Box>
    </Box>
  );
}





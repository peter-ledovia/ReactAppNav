import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Typography, Drawer, List, Toolbar, AppBar, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, CssBaseline, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  /*{ text: 'Home', icon: <HomeIcon />, path: '/home' },*/
  { text: 'Movie List', icon: <InfoIcon />, path: '/' },
  { text: 'Admin Area', icon: <SettingsIcon />, path: '/AdminArea' },
];

const drawer = (
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                component={Link} 
                to={item.path}
                selected={location.pathname === item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

);

function LeftDrawer(props) {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <Box component="nav" sx={{ width: { md: props.drawerWidth }, flexShrink: { md: 0 } }}>
            <AppBar position="fixed" sx={{ width: { md: `calc(100% - ${props.drawerWidth}px)` }, ml: { md: `${props.drawerWidth}px` } }}>
                <Toolbar>
                <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: 'none' } }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Movie App !
                </Typography>
                </Toolbar>
            </AppBar>
            
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }} // Better open performance on mobile
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
                }}
                >
            {drawer}
            </Drawer>
        
        {/* This Drawer could be put in another component ! */}
        <Drawer
            variant="permanent"
            sx={{
             display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
            }}
            open
        >
            {drawer}
        </Drawer>
      </Box>
    )
  }


  export default LeftDrawer
import React from 'react';
import { Outlet  } from 'react-router-dom';
import { Box } from '@mui/material';
import LeftDrawer from './LeftDrawer';

const drawerWidth = 240;
const containerStyle = {
     display: 'flex'
}

export default function Layout() {
  return (
    <Box sx={containerStyle}> 
     <LeftDrawer drawerWidth={drawerWidth}/>
      <Box component="main" sx={{ flexGrow: 1, p: 5, width: `calc(100% - ${drawerWidth}px)` }}>
        <Outlet />
      </Box>
    </Box>
  );
}





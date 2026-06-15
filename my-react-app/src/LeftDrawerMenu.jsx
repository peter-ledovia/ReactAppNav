// import React, { useState } from 'react';
// import { Drawer, Button, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import MovieIcon from '@mui/icons-material/Movie';
// import { Outlet, Link } from 'react-router-dom';


// function LeftDrawerMenu() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//       const handleItemClick = ( id, e) => {
         
//         //alert('clicked ' + id);
//         //if (id == 'admin') {
//         //    localStorage.setItem('activeTab', 'adminArea');
//        // }
//         //if (id == 'movieList') {
//         //    localStorage.setItem('activeTab', 'movieList');
//        // }
//         //alert('activeTab set to ' + localStorage.getItem('activeTab'));

//         localStorage.setItem('activeTab', id); // Set activeTab in localStorage based on the clicked item
//         //navigate(`/${id}`);
//         navigate('/');

//         //e.preventDefault();
//     };

//   return (
//     <>

//       <Drawer 
//         variant="permanent"
//         anchor="left" open={open} onClose={toggleDrawer(false)}>
//             <Box sx={{ 
                
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center', // Centers the list vertically within this container
//                     alignItems: 'center',     // Centers the list horizontally
//                     height: '50vh',   

//                 }}>
//                <nav style={{ width: '250px', background: '#f4f4f4', height: '100vh' }}>
//                 <ul>
//                   <li><Link to="/">Home</Link></li>
//                   <li><Link to="/MovieDetails">Admin Area</Link></li>
//                   <li><Link to="/AdminArea">Movie List</Link></li>
//                 </ul>
//               </nav>
//            </Box>
//       </Drawer>
//     </>
//   );
// }


// export default LeftDrawerMenu;
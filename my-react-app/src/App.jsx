import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, CssBaseline } from '@mui/material';
import Layout from './Layout';
import { Outlet } from 'react-router-dom'
/*Custom Components*/
import MovieDetails from './MovieDetails'
import PageNotFound from './PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList'
import AdminArea from './AdminArea';
import theme from './Themes';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MovieList />} />
                    <Route path="MovieDetails/:id" element={<MovieDetails />} />
                    <Route path="AdminArea" element={<AdminArea />} />
                    <Route path="*" element={<PageNotFound />} /> 
                </Route>
            </Routes>
        </BrowserRouter>  
    </ThemeProvider>


    </>
  )
}

export default App

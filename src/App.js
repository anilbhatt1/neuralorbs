import React from 'react';
import './App.css';
import { MuiNavbar } from './components/MuiNavbar';
import Home from './pages/Home'; 
import Apps from './pages/Apps';
import Jnana from './pages/Appdetails/Jnana';
import Phi2dialoggen from './pages/Appdetails/Phi2dialoggen';
import Pythiadialoggen from './pages/Appdetails/Pythiadialoggen';
import Clipimagesearch from './pages/Appdetails/Clipimagesearch';
import Gptpassagegen from './pages/Appdetails/Gptpassagegen';
import Fastsamsegmenter from './pages/Appdetails/Fastsamsegmenter';
import Imagealchemy from './pages/Appdetails/Imagealchemy';
import Controlnet from './pages/Appdetails/Controlnet';
import BlogsAI from './pages/Blogs/BlogsAI';
import BlogsMLOps from './pages/Blogs/BlogsMLOps';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0000FF', // Modify for desired primary color
      },
      text: {
        primary: '#fff',
      },
      background: {
        default: '#222', // Modify for desired background color
      },
    },
  });


const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <MuiNavbar />     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/apps/jnana" element={<Jnana />} />
                <Route path="/apps/phi2dialoggen" element={<Phi2dialoggen />} />
                <Route path="/apps/pythiadialoggen" element={<Pythiadialoggen />} />
                <Route path="/apps/clipimagesearch" element={<Clipimagesearch />} />
                <Route path="/apps/gptpassagegen" element={<Gptpassagegen />} />
                <Route path="/apps/fastsamsegmenter" element={<Fastsamsegmenter />} />
                <Route path="/apps/imagealchemy" element={<Imagealchemy />} />  
                <Route path="/apps/controlnet" element={<Controlnet />} />                              
                <Route path="/blogs/AI" element={<BlogsAI />} />
                <Route path="/blogs/MLOps" element={<BlogsMLOps />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>  
        </Router>   
        </ThemeProvider>      
    );
};

export default App;
import React from 'react';
import './App.css';
import { MuiNavbar } from './components/MuiNavbar';
import Home from './pages/Home'; 
import Apps from './pages/Apps';
import Jnana from './pages/Appdetails/Jnana';
import BlogsAI from './pages/Blogs/BlogsAI';
import BlogsMLOps from './pages/Blogs/BlogsMLOps';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <MuiNavbar />     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/apps/jnana" element={<Jnana />} />
                <Route path="/blogs/AI" element={<BlogsAI />} />
                <Route path="/blogs/MLOps" element={<BlogsMLOps />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>  
        </Router>         
    );
};

export default App;
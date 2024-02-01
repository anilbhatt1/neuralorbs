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
                <Route path="/apps/phi2dialoggen" element={<Phi2dialoggen />} />
                <Route path="/apps/pythiadialoggen" element={<Pythiadialoggen />} />
                <Route path="/apps/clipimagesearch" element={<Clipimagesearch />} />
                <Route path="/apps/gptpassagegen" element={<Gptpassagegen />} />
                <Route path="/blogs/AI" element={<BlogsAI />} />
                <Route path="/blogs/MLOps" element={<BlogsMLOps />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>  
        </Router>         
    );
};

export default App;
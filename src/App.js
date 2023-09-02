import React from 'react';
import './App.css';
import { MuiNavbar } from './components/MuiNavbar';
import Home from './pages/Home'; 
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import IotUsers from './pages/Users/IotUsers';
import IotAccelero from './pages/IotApps/IotAccelero';
import IotGyro from './pages/IotApps/IotGyro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccelAdd from './pages/IotApps/AccelAdd';
import AccelGet from './pages/IotApps/AccelGet';

const App = () => {
    return (
        <Router>
            <MuiNavbar />     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<IotUsers />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/iotapps/accelero" element={<IotAccelero username={"anilbhatt1"}/>} />
                <Route path="/iotapps/accelero/get" 
                       element={<AccelGet username={"anilbhatt1"}/>} />
                <Route path="/iotapps/accelero/add" 
                       element={<AccelAdd username={"anilbhatt1"}/>} />                       
                <Route path="/iotapps/gyro" element={<IotGyro />} />
            </Routes>  
        </Router>         
    );
};

export default App;

// import React from 'react'

// export const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App;
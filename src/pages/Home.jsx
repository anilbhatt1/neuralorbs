import React from 'react';
import { Typography } from '@mui/material';

const Home = () => {
    return (
        <div>
            <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}}>
                <br />
                Welcome to Neural-Orbs !
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "Crimson Text, serif"}}>
                <br />
                I'm Anil Bhatt from India, technologist with a passion for exploring the frontiers of AI, IoT, and Robotics. My career spans over 16 years of navigating the landscape of technology domain while spearheading multi-million dollar projects for global clients. 
                <br />
                <br />
                This site is my bridge, connecting my technical expertise with the wider world. Here, I share my explorations and learnings in AI, Robotics, and MLOPs, through approachable blog posts and practical projects built on pytorch, cloud and edge devices like Raspberry Pi and Jetson Nano.
                <br />
                <br />
                Beyond the realm of technology, I'm an avid reader, an Arsenal fan and a trekking enthusiast. Please don't be a stranger & reach me at <span style={{ fontWeight: 'bold' }}>CONTACT</span>.
                <br />
                <br />                    
                Let's explore the world together ! 
                <br />
                <br />
            </Typography>
        </div>
    );
};

export default Home;
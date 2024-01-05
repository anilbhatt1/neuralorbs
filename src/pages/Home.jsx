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
                I'm Anil Bhatt, a seasoned technologist with a passion for exploring the frontiers of AI, IoT, and Robotics. Hailing from India, my journey spans over 16 years of navigating the landscape of technology and healthcare insurance domain while spearheading multi-million dollar projects for global clients. 
                <br />
                <br />
                This site is my bridge, connecting my technical expertise with the wider world. Here, I share my explorations and learnings in LLMs, Generative AI, Computer Vision, NLP, Robotics, and MLOPs, demystifying complex concepts through approachable blog posts and practical projects built on edge devices like Raspberry Pi and Jetson Nano.
                <br />
                <br />
                Beyond the realm of technology, I'm an avid reader, also an Arsenal fan. At times, I trade screens for slopes, traversing the beauty of India through the lens of trekking.
                <br />
                <br />                    
                Let's explore the world together !. 
                <br />
                <br />
                <span style={{ fontWeight: 'bold' }}> P.S. </span> Don't be a stranger & reach me at <span style={{ fontWeight: 'bold' }}>CONTACT</span> ! 
            </Typography>
        </div>
    );
};

export default Home;
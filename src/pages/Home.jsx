import React from 'react';
import { Typography } from '@mui/material';

const Home = () => {
    return (
        <div>
            <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}}>
                <br />
                Welcome to Neural-Orbs from Anil Bhatt !
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Crimson Text, serif"}}>
                <br />
                Greetings from India, where chai simmers and the spirit of innovation brews! I'm Anil Bhatt, a tech enthusiast with a passion for exploration, and I'm thrilled to invite you into my little corner of the internet.
            </Typography>
            <Typography variant="h4">
                <br />
                My mind's a melting pot of interests, a kaleidoscope of curiosity:
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Crimson Text, serif"}}>
                <ul>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>The world of AI: </span> 
                        I delve into the intricate realms of computer vision, where machines learn to see, the magic of NLP where words dance and reveal meaning, and the fascinating orchestration of MLOps that keeps the whole show running.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>The pulse of the IoT: </span> 
                        From tinkering with Raspberry Pis to unleashing the power of Jetson Nanos, I attempt building bridges between the physical and the digital.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>The spark of robotics: </span>
                        With Ros2 as my guide, I navigate the exciting world of robots, where bits and bytes take shape and movement.
                    </li>                    
                </ul>
                But when I'm not coding or tinkering, you'll find me cheering for Arsenal (Go Gunners!), nose deep in a gripping non-fiction book, or journeying through the pages of history and biography.
                <br />
                <br />
            </Typography>
            <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}}>
                Why am I here?
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Crimson Text, serif"}}>
                <br />
                Simply put, I want to share. To share my learnings, my stumbles, and the exhilarating "aha!" moments that come with pushing boundaries and exploring new frontiers. This blog is my canvas, where I'll paint stories with words, pixels, and code. I'll share the apps that I built that offer glimpses into the fascinating world of technology.
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "Crimson Text, serif"}}> 
                So, whether you're a seasoned techie, a curious newcomer, or simply someone who enjoys a good yarn, welcome! Grab a cup of chai, pull up a chair, and let's explore the world together, one byte, one pixel, one page at a time.
                <span style={{ fontWeight: 'bold' }}>
                    So...This is my curious corner, and I'd love for you to join me. 
                </span>    
                <br />
                <br />
                <span style={{ fontWeight: 'bold' }}> P.S. </span> And hey, Don't be a stranger! Hit me up (links in <span style={{ fontWeight: 'bold' }}>CONTACT</span>) for even more behind-the-scenes insights and updates. Also, did I mention I speak English, Hindi, Malayalam, and Konkani? Feel free to chat with me in any of these languages! 
            </Typography>
        </div>
    );
};

// const Home = () => { 
//     return (
//         <div>
//             <Typography variant="h1">h1 Heading</Typography>
//             <Typography variant="h2">h2 Heading</Typography>
//             <Typography variant="h3">h3 Heading</Typography>
//             <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
//             <Typography variant="h5">h5 Heading</Typography>
//             <Typography variant="h6">h6 Heading</Typography>   
//             <Typography variant="subtitle1">subtitle1 </Typography>
//             <Typography variant="subtitle2">subtitle2 </Typography>     
//             <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum excepturi deserunt. Distinctio quis quas doloremque dicta blanditiis, nisi obcaecati veritatis sint! Fugit, recusandae pariatur ut rerum quidem quo optio? </Typography>     
//             <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum excepturi deserunt. Distinctio quis quas doloremque dicta blanditiis, nisi obcaecati veritatis sint! Fugit, recusandae pariatur ut rerum quidem quo optio? </Typography>     
//         </div>
//     )
// };

export default Home;
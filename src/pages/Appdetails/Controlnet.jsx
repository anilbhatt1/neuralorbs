// Controlnet.jsx
import React from 'react';
import { Typography, Link, Avatar, Box} from '@mui/material';
const hfurl = "https://huggingface.co/spaces/neuralorbs/Controlnet-Stable-Diffusion";
const githuburl = "https://github.com/anilbhatt1/Deeplearning-E8P1/tree/master/Controlnet-canny";
const yturl = "https://youtu.be/S-MLOozCseQ";

const Controlnet = () => {
  return (
      <div >
          <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            Controlnet Canny Stable Diffusion
          </Typography>
          <Typography variant="h5" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
          ControlNet is a neural network structure to control diffusion models by adding extra conditions. ControlNet equips us with the ability to control SD and generate images in the way we desire by passing a control image and prompt. In this app, we will give a pattern image and a prompt. Model will detect the canny edges of the image and based on prompt will create a new image that matches the shape of control input image.
          </Typography>  
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/controlnet_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Try-out the app :  
                  <Link href={hfurl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Controlnet Stable Diffusion 
                  </Link> 
              </Typography>                
          </Box>     
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/github.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Check the code : 
                  <Link href={githuburl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Github
                  </Link> 
              </Typography>                
          </Box>    
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/controlnet_youtube.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  View youtube video demo : 
                  <Link href={yturl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Youtube Demo Video (0:41 secs)
                  </Link> 
              </Typography>                
          </Box>                                                   
      </div>                          
  );
};

export default Controlnet;
// Imagealchemy.jsx
import React from 'react';
import { Typography, Link, Avatar, Box} from '@mui/material';
const hfurl = "https://huggingface.co/spaces/anilbhatt1/ImageAlchemy-StableDiffusion";
const githuburl = "https://github.com/anilbhatt1/ERA1_S20_Stable_Diffusion";

const Imagealchemy = () => {
  return (
      <div >
          <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            Image Alchemy - Stable Diffusion
          </Typography>
          <Typography variant="h5" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            Image Alchemy is an image generation app built using Gradio and hosted on huggingface spaces. App will generates image that fits with 1. given text prompt 2. given reference image and 3. selected style. App uses stable diffusion model to generate the image. Stable Diffusion is a powerful and accessible deep learning model that can generate high-quality images from text descriptions.
          </Typography>  
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/imagealchemy_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Try-out the app :  
                  <Link href={hfurl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Image Alchemy - Stable Diffusion
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
      </div>                          
  );
};

export default Imagealchemy;
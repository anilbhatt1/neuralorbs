// Fastsamsegmenter.jsx
import React from 'react';
import { Typography, Link, Avatar, Box} from '@mui/material';
const hfurl = "https://huggingface.co/spaces/anilbhatt1/FastSAM-Segmenter";
const githuburl = "https://github.com/anilbhatt1/ERA1_S19_CLIP_FastSAM/tree/master/FastSAM";

const Fastsamsegmenter = () => {
  return (
      <div >
          <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            FAST SAM Segmenter
          </Typography>
          <Typography variant="h5" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            FastSAM segmenter is an image segmentation app built using gradio and hosted on huggingface spaces. FAST SAM is the acronym for FAST Segment Anything Model. App uses FASTSAM model that will segment the objects present in input image.
          </Typography>  
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/fastsam_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Try-out the app :  
                  <Link href={hfurl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    FAST SAM Segmenter
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

export default Fastsamsegmenter;
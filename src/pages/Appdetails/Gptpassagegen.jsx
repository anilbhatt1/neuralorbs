// Gptpassagegen.jsx
import React from 'react';
import { Typography, Link, Avatar, Box} from '@mui/material';
const hfurl = "https://huggingface.co/spaces/anilbhatt1/GPT-Passage-Generator";
const githuburl = "https://github.com/anilbhatt1/ERA1_S21_GPT_Karpathy";
const yturl = "https://youtu.be/C98vJx-eSAU";

const Gptpassagegen = () => {
  return (
      <div >
          <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            GPT Passage Generator
          </Typography>
          <Typography variant="h5" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            GPT Passage gen is a huggingface gradio app that will generate text based on (a) given text context (b) for given character length. GPT model used here is trained from scratch on limited data from publically available online books. Since the model was trained on limited data the output text generated may not always be coherent.
          </Typography>  
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/gptpassagegen_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Try-out the app :  
                  <Link href={hfurl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    GPT Passage Generator
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
                src='/images/gptpassagegen_youtube.jpg'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  View youtube video demo : 
                  <Link href={yturl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Youtube Demo Video (0:52 secs)
                  </Link> 
              </Typography>                
          </Box>                                                      
      </div>                          
  );
};

export default Gptpassagegen;
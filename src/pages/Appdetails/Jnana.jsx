// Jnana.js
import React from 'react';
import { Typography, Link, Avatar, Box} from '@mui/material';
const hfurl = "https://huggingface.co/spaces/neuralorbs/Jnana-Phi2-Multimodal-Conversation-Agent";
const githuburl = "https://github.com/anilbhatt1/Jnana_phi2_multimodal_llm";
const blogurl = "https://anilbhatt1.tech.blog/2024/01/31/how-to-build-a-multiomodal-llm-from-scratch/";
const yturl = "https://youtu.be/0aSeaciVpUs";

const Jnana = () => {
  return (
      <div >
          <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
              Jnana - Multimodal LLM App
          </Typography>
          <Typography variant="h5" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
              Jñāna is a multimodal LLM gradio app hosted on huggingface spaces.
              It is capable of accepting inputs in the form of image/audio/text or a combination of any of these 3.
              Jñāna uses microsoft/phi2 LLM model that was trained based on Llava 1.0 and Llava 1.5.               
              qlora strategy was used for fine-tuning microsoft/phi2.
          </Typography>  
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/jnana_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Try-out the app :  
                  <Link href={hfurl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Jnana-Multimodal LLM
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
          <Box sx={{ display: 'inline-flex' }} m={4} >
              <Avatar
                variant="square"
                src='/images/blog.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Read my detailed blog on building this app : 
                  <Link href={blogurl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Blog
                  </Link> 
              </Typography>                
          </Box>       
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/jnana_youtube.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  View youtube video demo : 
                  <Link href={yturl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Youtube Demo Video
                  </Link> 
              </Typography>                
          </Box>                                     
      </div>                          
  );
};

export default Jnana;
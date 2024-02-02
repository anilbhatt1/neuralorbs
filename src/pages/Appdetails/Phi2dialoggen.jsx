// Phi2dialoggen.jsx
import React from 'react';
import { Typography, Link, Avatar, Box} from '@mui/material';
const hfurl = "https://huggingface.co/spaces/neuralorbs/phi2-dialog-partner";
const githuburl = "https://github.com/anilbhatt1/ERA1_S27_qLORA";
const yturl = "https://youtu.be/97xhjCSN9I0";

const Phi2dialoggen = () => {
  return (
      <div >
          <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            Phi2 - Dialog Partner
          </Typography>
          <Typography variant="h5" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            Phi2 - Dialog Partner is a hugging face gradio app that answers the query you ask it. App uses qlora optimized microsoft/phi-2 model. phi-2 is a small language model with 2.7b parms. Phi-2 used here was fine-tuned on openassistant-guanaco dataset using qLORA PEFT technique in google colab T4 GPU. qLORA is a fine-tuning technique where original model's parameters are first quantized to 4-bit values & frozen. Then LORA adapters are injected into model's layers. While fine-tuning, only adapter weights that are in 32-bit precision will get updated. These adapter weights will be specialized on the fine-tuning task. Small language models combined with qLORA enables open-source developers to fine-tune the models with less computational power. 
          </Typography>  
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/phi2dialoggen_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Try-out the app :  
                  <Link href={hfurl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Phi2 - Dialog Partner
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
                src='/images/phi2dialoggen_youtube.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  View youtube video demo : 
                  <Link href={yturl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Youtube Demo Video (1:54 secs)
                  </Link> 
              </Typography>                
          </Box>                                                   
      </div>                          
  );
};

export default Phi2dialoggen;
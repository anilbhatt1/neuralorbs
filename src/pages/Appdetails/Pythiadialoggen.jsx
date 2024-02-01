// Pythiadialoggen.jsx
import React from 'react';
import { Typography, Link, Avatar, Box} from '@mui/material';
const hfurl = "https://huggingface.co/spaces/neuralorbs/DialogGen";
const githuburl = "https://github.com/anilbhatt1/ERA1_S22_Pythia_training_Dialoggen_HFSpaceapp";

const Pythiadialoggen = () => {
  return (
      <div >
          <Typography variant="h3" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            Pythia - Dialog Generator
          </Typography>
          <Typography variant="h5" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
            DialogGen is a hugging face gradio app that generates text based on 1. given text context 2. for given character length 3. number of Samples 4. using Selected GPT model
            Currently following models are available for selection 1. pythia_160m_deduped_huggingface 2. pythia_160m_deduped_custom 3. pythia_410m_deduped 4. pythia_70m_deduped         
          </Typography>  
          <Box sx={{ display: 'inline-flex' }} m={4}>
              <Avatar
                variant="square"
                src='/images/pythiadialoggen_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:100, width:100}}
              />   
              <Typography variant="h4" style={{ fontFamily: "Crimson Text, serif"}} m={4}>
                  Try-out the app :  
                  <Link href={hfurl} 
                        underline="none" variant="h4" target="_blank" rel="noopener noreferrer"
                  >
                    Pythia - Dialog Generator
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

export default Pythiadialoggen;
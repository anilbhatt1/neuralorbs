import React from 'react';
import { Stack, Link, Avatar, Typography } from '@mui/material';

const Apps = () => {
  return (
    <div>
    <Stack spacing={4} sx={{ margin: 2}}>
        <Stack direction='row' spacing={2} justifyContent='center' >
            <Typography variant="h3" sx={{color: '#673ab7', fontFamily: 'Raleway'}}>
                AI Blogs
            </Typography>
        </Stack>
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/phi2_dialog_partner.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="https://huggingface.co/spaces/neuralorbs/phi2-dialog-partner"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                >
                    Phi2-Dialog-Partner
                </Link> 
            </Typography>
        </Stack>  
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/pythia_dialog_gen.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="https://huggingface.co/spaces/neuralorbs/DialogGen"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                >
                    Pythia-Dialoggen
                </Link> 
            </Typography>
        </Stack>
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/clip_image_search.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="https://huggingface.co/spaces/anilbhatt1/CLIP-Image-Search"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                >
                    CLIP-Image-Search
                </Link> 
            </Typography>
        </Stack>  
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/gpt_passage_gen.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="https://huggingface.co/spaces/anilbhatt1/GPT-Passage-Generator"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                >
                    GPT-Passage-Generator
                </Link> 
            </Typography>
        </Stack>
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/fastsam.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="https://huggingface.co/spaces/anilbhatt1/FastSAM-Segmenter"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                >
                    FastSAM-Segmenter
                </Link> 
            </Typography>
        </Stack>  
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/imagealchemy_stable_diffusion.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="https://huggingface.co/spaces/anilbhatt1/ImageAlchemy-StableDiffusion"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                >
                    ImageAlchemy-StableDiffusion
                </Link> 
            </Typography>
        </Stack>
    </Stack>
</div>
  );
};

export default Apps;

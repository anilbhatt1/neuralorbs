import React from 'react';
import { Stack, Link, Avatar, Typography } from '@mui/material';

const Apps = () => {
  return (
    <div>
    <Stack spacing={4} sx={{ margin: 2}}>
        <Stack direction='row' spacing={2} justifyContent='center' >
            <Typography variant="h3" sx={{color: '#673ab7', fontFamily: 'Raleway'}}>
                AI Apps
            </Typography>
        </Stack>
        <Stack direction='row' spacing={2} justifyContent='center' >
            <Typography variant="p1" sx={{color: '#673ab7', fontFamily: 'Raleway'}}>
                Apps may take few minutes to load due to cold-start. 
            </Typography>
        </Stack>
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/jnana_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="/apps/jnana"               
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}} 
                    target="_blank" rel="noopener noreferrer"
                >
                    Jnana-Multimodal LLM
                </Link> 
            </Typography>
        </Stack>  
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/phi2dialoggen_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="/apps/phi2dialoggen"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                    target="_blank" rel="noopener noreferrer"
                >
                    Phi2-Dialog-Partner
                </Link> 
            </Typography>
        </Stack>  
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/pythiadialoggen_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="/apps/pythiadialoggen"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                    target="_blank" rel="noopener noreferrer"
                >
                    Pythia-Dialoggen
                </Link> 
            </Typography>
        </Stack>
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/clipimagesearch_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="/apps/clipimagesearch"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                    target="_blank" rel="noopener noreferrer"
                >
                    CLIP-Image-Search
                </Link> 
            </Typography>
        </Stack>  
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/gptpassagegen_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
                target="_blank" rel="noopener noreferrer"
            />                                    
            <Typography variant="h5" >
                <Link href="/apps/gptpassagegen"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                >
                    GPT-Passage-Generator
                </Link> 
            </Typography>
        </Stack>
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/fastsam_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="/apps/fastsamsegmenter"
                    sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                >
                    FastSAM-Segmenter
                </Link> 
            </Typography>
        </Stack>  
        <Stack direction='row' spacing={4} >
            <Avatar
                variant="square"
                src='/images/imagealchemy_app_cover.png'
                alt='Jane Doe'
                sx={{bgcolor: 'primary.main', height:60, width:75}}
            />                                    
            <Typography variant="h5" >
                <Link href="/apps/imagealchemy"
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

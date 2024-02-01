import React from 'react';
import { Stack, Link, Avatar, Typography } from '@mui/material';

const BlogsAI = () => {
    return (
        <div>
            <Stack spacing={4} sx={{ margin: 2}}>
                <Stack direction='row' spacing={2} justifyContent='center' >
                    <Typography variant="h3" sx={{color: '#673ab7', fontFamily: 'Raleway'}}>
                        AI Blogs
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={2} >
                    <Avatar
                        variant="square"
                        src='/images/jnana_app_cover.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h5" >
                        <Link href="http://tinyurl.com/jnana-blog"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                            target="_blank" rel="noopener noreferrer"
                        >
                            Building a Multimodal LLM from scratch
                        </Link> 
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={2} >
                    <Avatar
                        variant="square"
                        src='/images/AI_Blog6.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h5" >
                        <Link href="https://wordpress.com/post/anilbhatt1.tech.blog/440"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                            target="_blank" rel="noopener noreferrer"
                        >
                            Understanding Object detection with YOLO
                        </Link> 
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={2} >
                    <Avatar
                        variant="square"
                        src='/images/AI_Blog5.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h5" >
                        <Link href="https://wordpress.com/post/anilbhatt1.tech.blog/332"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                            target="_blank" rel="noopener noreferrer"
                        >
                            CNN - Activation Functions, Global Average Pooling, Softmax, Negative Likelihood Loss
                        </Link> 
                    </Typography>
                </Stack>  
                <Stack direction='row' spacing={2} >
                    <Avatar
                        variant="square"
                        src='/images/AI_Blog4.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h5" >
                        <Link href="https://wordpress.com/post/anilbhatt1.tech.blog/237"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                            target="_blank" rel="noopener noreferrer"
                        >
                            Max-Pooling, Combining Channels using 1x1 convolutions, Receptive Field calculation
                        </Link> 
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={2} >
                    <Avatar
                        variant="square"
                        src='/images/AI_Blog3.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h5" >
                        <Link href="https://wordpress.com/post/anilbhatt1.tech.blog/151"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                            target="_blank" rel="noopener noreferrer"
                        >
                            Convolutions - Work horse behind CNN
                        </Link> 
                    </Typography>
                </Stack>  
                <Stack direction='row' spacing={2} >
                    <Avatar
                        variant="square"
                        src='/images/AI_Blog2.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h5" >
                        <Link href="https://wordpress.com/post/anilbhatt1.tech.blog/50"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                            target="_blank" rel="noopener noreferrer"
                        >
                            Deep Learning- Understanding Receptive field in Computer Vision
                        </Link> 
                    </Typography>
                </Stack>  
                <Stack direction='row' spacing={2} >
                    <Avatar
                        variant="square"
                        src='/images/AI_Blog1.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h5" >
                        <Link href="https://wordpress.com/post/anilbhatt1.tech.blog/21"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                            target="_blank" rel="noopener noreferrer"
                        >
                            How Computers classify objects in an image using Deep Learning
                        </Link> 
                    </Typography>
                </Stack>  
            </Stack>
        </div>
    );
};

export default BlogsAI;
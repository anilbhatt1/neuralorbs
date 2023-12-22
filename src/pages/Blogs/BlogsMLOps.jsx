import React from 'react';
import { Stack, Link, Avatar, Typography } from '@mui/material';

const BlogsMLOps = () => {
    return (
        <div>
            <Stack spacing={4} sx={{ margin: 2}}>
                <Stack direction='row' spacing={2} justifyContent='center' >
                    <Typography variant="h3" sx={{color: '#673ab7', fontFamily: 'Raleway'}}>
                        MLOPs Blogs
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={2} >
                    <Avatar
                        variant="square"
                        src='/images/docker.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h5" >
                        <Link href="https://wordpress.com/post/anilbhatt1.tech.blog/687"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                        >
                            How to create and push a docker image for image classification to docker hub, later pull it for inferencing
                        </Link> 
                    </Typography>
                </Stack>            
            </Stack>
        </div>
    );
};

export default BlogsMLOps;
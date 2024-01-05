import React from 'react';
import { Stack, Link, Avatar, Typography } from '@mui/material';

const Contact = () => {
    return (
        <div>
            <Stack spacing={4} sx={{ margin: 2}}>
                <Stack direction='row' spacing={2} justifyContent='center' >
                    <Avatar
                        variant="square"
                        src='/images/mypic.jpg'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:270, width:330}}
                    />    
                    <Typography variant="h2" sx={{color: 'black', fontFamily: 'Raleway'}}>
                        <br />
                        Thank You...
                        <br />                 
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={8} justifyContent='center'>
                    <Avatar
                        variant="square"
                        src='/images/linkedin.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h4" >
                        <Link href="https://www.linkedin.com/in/anilkumar-n-bhatt/"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                        >
                            https://www.linkedin.com/in/anilkumar-n-bhatt/
                        </Link> 
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={8} justifyContent='center'>
                    <Avatar
                        variant="square"
                        src='/images/github.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h4" >
                        <Link href="https://github.com/anilbhatt1"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                        >
                            https://github.com/anilbhatt1
                        </Link> 
                    </Typography>
                </Stack>  
                <Stack direction='row' spacing={8} justifyContent='center'>
                    <Avatar
                        variant="square"
                        src='/images/gmail.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h4" >
                        <Link href="anilaknb@gmail.com"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                        >
                            anilaknb@gmail.com
                        </Link> 
                    </Typography>
                </Stack>    
                <Stack direction='row' spacing={8} justifyContent='center'>
                    <Avatar
                        variant="square"
                        src='/images/x.png'
                        alt='Jane Doe'
                        sx={{bgcolor: 'primary.main', height:60, width:75}}
                    />                                    
                    <Typography variant="h4" >
                        <Link href="https://twitter.com/anil_bhatt_"
                            sx={{color: 'black', fontFamily : 'Helvetica Neue'}}
                        >
                            https://twitter.com/anil_bhatt_
                        </Link> 
                    </Typography>
                </Stack>                                               
            </Stack>
        </div>
    );
};

export default Contact;
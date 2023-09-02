import React, { useState } from 'react';
import {Stack, Button} from '@mui/material'
import { Link } from 'react-router-dom';

const IotAccelero = ({username}) => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button component={Link} 
                        to="/iotapps/accelero/add"
                        variant='contained' 
                        color='secondary' 
                        size="large"
                >
                    Accel-Add
                </Button> 
                <Button component={Link} 
                        to="/iotapps/accelero/get"
                        variant='contained' 
                        color='secondary' 
                        size="large"
                >
                    Accel-Get
                </Button> 
            </Stack>                    
        </Stack>
    );
};

export default IotAccelero;
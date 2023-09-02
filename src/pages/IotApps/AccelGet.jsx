/*
- Functionality to Get the accel data by calling getdata which will access api
*/

import React, {useState, useEffect} from 'react';
import { getdata} from '../../ApiService';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import { CSVLink } from 'react-csv';
import DownloadIcon from '@mui/icons-material/Download';

export default function AccelGet({username}){

    console.log('accelget-username', username)
    const [accels, setAccels] = useState([])

    useEffect(()=>{
        let mount = true
        getdata(username)
            .then(res => {
                console.log('res from api', res)
                setAccels(res)        
                return() => mount = false
            })
    },[])

    return(
    <>       
        <TableContainer component={Paper} sx={{ maxHeight: '800px'}}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>                            
                        <TableCell>Accel X</TableCell>
                        <TableCell>Accel Y</TableCell>
                        <TableCell>Accel Z</TableCell>
                        <TableCell>Created User</TableCell>
                        <TableCell align='center'>Created At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {   
                        accels.map(accel => (
                            <TableRow key = {accel.created_at} 
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}>
                                <TableCell>{accel.x_accel}</TableCell>
                                <TableCell>{accel.y_accel}</TableCell>
                                <TableCell>{accel.z_accel}</TableCell>
                                <TableCell>{accel.user_name}</TableCell>
                                <TableCell align='center'>{accel.created_at}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        <hr />
        <hr />
        <CSVLink data = {accels}
            filename= {'Reactcsv_Test1'}
            target="_blank"
        >
            <Button variant='contained' 
                color='secondary' 
                size="large"
                startIcon={<DownloadIcon />}
            >
                Download as CSV
            </Button>
        </CSVLink>
    </>
    )
}
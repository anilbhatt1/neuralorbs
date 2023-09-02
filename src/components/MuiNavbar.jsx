import {AppBar, Stack, IconButton, Toolbar, Typography, Button, Menu, MenuItem} from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        console.log('handleClose clicked');
        setAnchorEl(null)
    }
    const handleAccelero = () => {
        console.log('handleAccelero clicked');
        setAnchorEl(null)
    }
    const handleGyro = () => {
        console.log('handleGyroclicked');
        setAnchorEl(null)
    }
    const handleblogsAI = () => {
        console.log('handleblogsAI clicked');
        setAnchorEl(null)
    }    
    const handleblogsMLOps = () => {
        console.log('handleblogsMLOps clicked');
        setAnchorEl(null)
    }    

return(
    <AppBar position='static'>
        <Toolbar>
            <IconButton aria-label="logo" color="inherit" size="large" edge="start">
                    <PsychologyIcon />
            </IconButton>         
            <Typography variant='h5' component='div' sx={{ flexGrow: 1}}>
                    Neural-Orbs 
            </Typography>
            <Typography variant='body2' sx={{ flexGrow: 1}}>
                    Logged in as : anilbhatt1
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button component={Link} to="/" color='inherit'>Home</Button>
                <Button component={Link} to="/about" color='inherit'>About</Button>
                <Button component={Link} to="/users" color='inherit'>Users</Button>
                {/* <Button component={Link} to="/blogs" color='inherit'>Blogs</Button> */}
                <Button color='inherit' 
                        id='resources-button' 
                        onClick={handleClick}
                        aria-controls={open ? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                >
                    IOT Apps
                </Button>                             
                    <Menu id='resources-menu' 
                        anchorEl={anchorEl} 
                        open={open}
                        MenuListProps={{
                            "aria-labelledby":'resources-button'
                        }}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}                                               
                    >
                        <MenuItem component={Link} to="/iotapps/accelero" onClick={handleAccelero}>   
                            Accelero
                        </MenuItem>
                        <MenuItem component={Link} to="/iotapps/gyro" onClick={handleGyro}>
                            Gyro
                        </MenuItem>
                    </Menu>

                    <Button color='inherit' 
                        id='resources-button1' 
                        onClick={handleClick}
                        aria-controls={open ? 'resources-menu1' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                        component={Link} to="/blogs" 
                >
                    Blogs
                </Button>                             
                    <Menu id='resources-menu1' 
                        anchorEl={anchorEl} 
                        open={open}
                        MenuListProps={{
                            "aria-labelledby":'resources-button1'
                        }}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}                                               
                    >
                        <MenuItem component={Link} to="/blogs/AI" onClick={handleblogsAI}>   
                            AI 
                        </MenuItem>
                        <MenuItem component={Link} to="/blogs/MLOps" onClick={handleblogsMLOps}>
                            MLOps
                        </MenuItem>
                    </Menu>

                <Button component={Link} to="/contact" color='inherit'>Contact</Button>                
            </Stack>
        </Toolbar>
    </AppBar>    
)
  
}
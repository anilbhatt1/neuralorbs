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
        setAnchorEl(null)
    }
    const handleblogsAI = () => {
        setAnchorEl(null)
    }    
    const handleblogsMLOps = () => {
        setAnchorEl(null)
    }    

return(
    <AppBar position='static' justifyContent='left'>
        <Toolbar>
            <IconButton aria-label="logo" color="inherit" size="large" edge="start">
                    <PsychologyIcon />
            </IconButton>         
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>                     
                <Button component={Link} to="/" color='inherit'>
                    <Typography variant="h6" sx={{color: 'white', fontFamily: 'Raleway'}}>
                        Neural-Orbs               
                    </Typography>                       
                </Button>
            </Typography>
            <Stack direction='row' spacing={1} justifyContent='left'>
                {/* <Button component={Link} to="/" color='inherit'>Home</Button> */}
                <Button component={Link} to="/apps" color='inherit'>Apps</Button>
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
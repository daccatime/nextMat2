import React, {useState,useEffect} from 'react';

//import '../../styles/Styles.css';
import { AppBar,Toolbar,IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../src/SideDrawer';


const Header = ()=>{
    const [drawerOpen,setDrawerOpen] = useState(true)

const toggleDrawer = (value)=> {
    setDrawerOpen(value)
}
    
    return (
        <div>

        <AppBar
        position="fixed"
        style={{
            backgroundColor:'#2f2f2f',
            boxShadow:'none',
            padding:'10px 0px'
        }}>

       

            <Toolbar>
       

            <div className="header_logo">
                <div className="font_righteous header_logo_venue">The venue </div> 
                    <div className="header_logo_title">
                        Musical events 
                    </div>
                
            </div>

            <IconButton 
                aria-label="Menu"
                color="inherit"
                onClick={()=> toggleDrawer(true)}
            >
                <MenuIcon/>
            </IconButton>

            <SideDrawer
                open={drawerOpen}
                onClose={(value)=>toggleDrawer(value) }
            />
           


            </Toolbar>
        </AppBar>
                
             
        </div>
        
    )
}

export default Header

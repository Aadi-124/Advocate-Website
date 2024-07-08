import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Design.css';
import './Responsive.css';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import Person2Icon from '@mui/icons-material/Person2';
import InfoIcon from '@mui/icons-material/Info';

export default function NavigationBar() {



  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
         <ListItem disablePadding>
            <ListItemButton>
              <HomeIcon style={{color:"green",fontSize:"35px"}}/>
              <ListItemIcon>
              <a href='#profile_section' className='sidebar_button'>HOME</a>
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
         <ListItem disablePadding>
            <ListItemButton>
              <ContactsIcon style={{color:"orange",fontSize:"35px"}} />
              <ListItemIcon>
              <a href='#contact_section' className='sidebar_button'>Contact</a>
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
         <ListItem disablePadding>
            <ListItemButton>
              <Person2Icon style={{color:"blue",fontSize:"35px"}}/>
              <ListItemIcon>
              <a href='#clients_section' className='sidebar_button'>Our Client</a>
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
         <ListItem disablePadding>
            <ListItemButton>
              <InfoIcon style={{color:"blue",fontSize:"35px"}}/>
              <ListItemIcon>
              <a href='#about_section' className='sidebar_button'>About</a>
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
          </ListItem>


      </List>
    </Box>
  );






  return (

    <>
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{backgroundColor:"#f1f6f6",color:"black"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography component="div"
           sx={{ flexGrow: 1, display: {  } }}
          >
            <p className='navbar_heading'>Adv. Samidha Nage</p>
          </Typography>

          
        <Box className='navbar_btn_container' sx={{ display: { xs: 'none', sm: 'block' } }}>
              <a href='#profile_section' className='navbar_button'>
                HOME
              </a>
              <a href='#contact_section' className='navbar_button'>
                Contact
              </a>
              <a href='#clients_section' className='navbar_button'>
                Our Client
              </a>
              <a href='#about_section' className='navbar_button'>
                About
              </a>
      
          </Box>
        </Toolbar>

      </AppBar>
    </Box>
    </>
  );
}
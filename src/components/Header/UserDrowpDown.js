import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export default function MenuListComposition({setAuthState,authState}) {
    const logoutHandler = () =>{
      setAuthState(false)
    }
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

const handleClose = () =>{
    setOpen(false)
}

  const handleOPen = () =>{
      setOpen(true)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <div style={{display:'flex'}}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleOPen}
        >
          <Avatar alt="Remy Sharp" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADr-3PrecoVO1hoAmq1qUaXmfmPNM30r2Nw&usqp=CAU'} />
          {open?
            <ExpandLessIcon style={{cursor:'pointer',marginTop:-10}} onClick={handleClose} id='expandLessIcon' />
            :
            <ExpandMoreIcon style={{cursor:'pointer',marginTop:-10}} onClick={handleOPen} id="expandMoreIcon" />

                }
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper style={{width:300,marginRight:30,marginTop:10}} >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <List>
        <div style={{display:'inline-flex',lineHeight:0.5}}>
        <Avatar alt="Remy Sharp" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADr-3PrecoVO1hoAmq1qUaXmfmPNM30r2Nw&usqp=CAU'} />
        <div>
          {authState? 
            <p style={{marginTop:'30px'}}>Welcome to OLX!</p>
        :<> 
        <p>Enter to your account</p>
        <p>Login to your account</p>
        </>
}  
        </div>
        </div>
        </List>
        <Divider />
        <List>
        {/* <Link onClick={handleClose} className='link' to='/selling'> */}
        <ListItem>
              <ListItemIcon>
              {/* <CameraAltOutlinedIcon /> */}
              </ListItemIcon>
              <ListItemText>
                 Start selling
                  </ListItemText>
            </ListItem>
            {/* </Link> */}
            {/* <Link onClick={handleClose} className='link' to='/my-ads'> */}
        <ListItem>
            <ListItemIcon>
            {/* <AssignmentOutlinedIcon /> */}
              </ListItemIcon>
              <ListItemText>My ads</ListItemText>
            </ListItem>
            {/* </Link> */}
            {/* <Link onClick={handleClose} className='link' to='/my-favourities'> */}
            <ListItem>
            <ListItemIcon>
            {/* <FavoriteBorderIcon /> */}
              </ListItemIcon>
              <ListItemText>My Favourities</ListItemText>
            </ListItem>
            {/* </Link> */}
           <Divider />
           <ListItem style={{cursor:'pointer'}} onClick={logoutHandler}>
            <ListItemIcon>
            {/* <ExitToAppIcon /> */}
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
        </List>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

export default function SideBar() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClickYear1 = () => {
    setOpen1(!open1);
  };
  const handleClickYear2 = () => {
    setOpen2(!open2);
  };
  const handleClickYear3 = () => {
    setOpen3(!open3);
  };
  const handleClickYear4 = () => {
    setOpen4(!open4);
  };


  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style={{textAlign:"center"}}>
         Years
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickYear1}>
        <ListItemText primary="1st YEAR" style={{paddingLeft:"1rem"}}/>
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 1" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 2" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear2}>
        <ListItemText primary="2nd YEAR" style={{paddingLeft:"1rem"}}/>
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 3" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 4" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear3}>
        <ListItemText primary="3rd YEAR" style={{paddingLeft:"1rem"}}/>
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemText primary="SEM 5" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 6" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear4}>
        <ListItemText primary="4th YEAR" style={{paddingLeft:"1rem"}}/>
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 7" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemText primary="SEM 8" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
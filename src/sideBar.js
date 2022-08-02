import * as React from 'react';
import {ListSubheader,List,ListItemButton,ListItemText,Collapse,Typography} from '@mui/material';

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
        <ListSubheader component="div" id="nested-list-subheader" style={{paddingLeft:"2rem"}}>
         <Typography variant="h6" >Years</Typography>
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickYear1}>
        <ListItemText primary="1st Year" style={{paddingLeft: "1rem"}} />
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="1st Semester" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="2nd Semester" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear2}>
        <ListItemText primary="2nd Year" style={{paddingLeft:"1rem"}}/>
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="3rd Semester" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="4th Semester" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear3}>
        <ListItemText primary="3rd Year" style={{paddingLeft:"1rem"}}/>
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemText primary="5th Semester" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="6th Semester" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear4}>
        <ListItemText primary="4th Year" style={{paddingLeft:"1rem"}}/>
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="7th Semester" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemText primary="8th Semester" style={{paddingLeft:"1rem"}}/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
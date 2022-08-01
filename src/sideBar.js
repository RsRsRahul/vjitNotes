import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

export default function SideBar() {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);

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
        <ListSubheader component="div" id="nested-list-subheader">
         Years
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickYear1}>
        <ListItemText primary="1st YEAR" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 2" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear2}>
        <ListItemText primary="2nd YEAR" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 3" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 4" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear3}>
        <ListItemText primary="3rd YEAR" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 5" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 6" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickYear4}>
        <ListItemText primary="4th YEAR" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 7" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="SEM 8" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
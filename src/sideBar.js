import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

export default function SideBar() {
  const [open, setOpen] = React.useState(true);

  const handleClickYear1 = (year1,setYear1) => {
    setOpen(!open);
  };
  const handleClickYear2 = (year2,setYear2) => {
    setOpen(!open);
  };
  const handleClickYear3 = () => {
    setOpen(!open);
  };
  const handleClickYear4 = () => {
    setOpen(!open);
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
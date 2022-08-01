import React from 'react';
import ReactDOM from 'react-dom/client';
import DataDisplay from './dataDisplay';
import SideBar from './sideBar';
import { Grid } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Grid container direction="row">
     <Grid item lg={1} xl={1} style={{border:"5px black",height:"100vh" }}>
      <SideBar />
     </Grid>
     <Grid item>
      <DataDisplay/>
     </Grid>
    </Grid>
);


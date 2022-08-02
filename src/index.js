import React from 'react';
import ReactDOM from 'react-dom/client';
import DataDisplay from './dataDisplay';
import SideBar from './sideBar';
import { Grid } from '@mui/material';
import NavBar from './navBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Grid>
      <Grid item xs={12}>
        <NavBar/>
      </Grid>
    </Grid>
    <Grid container direction="row">
     <Grid item lg={2} xl={2} style={{border:"5px black",height:"100vh" }}>
      <SideBar />
     </Grid>
     <Grid item>
      <BrowserRouter>
      <Routes>
        <Route exact path="" element={< DataDisplay/>} />
      </Routes>
      </BrowserRouter>
     </Grid>
    </Grid>
  </>
);


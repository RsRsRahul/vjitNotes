import React from 'react';
import ReactDOM from 'react-dom/client';
import DataDisplay from './dataDisplay';
import SideBar from './sideBar';
import { Grid } from '@mui/material';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
    <Grid container direction="row">
    <BrowserRouter>
     <Grid item lg={2} xl={2} style={{border:"5px black",height:"100vh" }}>
      <SideBar />
     </Grid>
     <Grid item xs={6}>
      <Routes>
        <Route exact path=":year">
          <Route path=":sem" element={<DataDisplay  authPath="/:year/:sem"/> }/>
        </Route>
      </Routes>
      </Grid>
      </BrowserRouter>
     </Grid>

  </>
);

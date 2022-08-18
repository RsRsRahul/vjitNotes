import React from 'react';
import ReactDOM from 'react-dom/client';
import DataDisplay from './dataDisplay';
import SideBar from './sideBar';
import { Grid } from '@mui/material';
<<<<<<< HEAD
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './navbar';
=======
import NavBar from './navBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
>>>>>>> 0f48e614aadb1d53df40093ab0a1afadb2753f41
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Grid>
      <Grid item xs={12}>
<<<<<<< HEAD
        <NavBar />
=======
        <NavBar/>
>>>>>>> 0f48e614aadb1d53df40093ab0a1afadb2753f41
      </Grid>
    </Grid>
    <Grid container direction="row">
    <BrowserRouter>
     <Grid item lg={2} xl={2} style={{border:"5px black",height:"100vh" }}>
      <SideBar />
     </Grid>
<<<<<<< HEAD
     <Grid item xs={8}>
      <Routes>
        <Route exact path=":year">
          <Route path=":sem" element={<DataDisplay  authPath="/:year/:sem"/> }/>
=======
     <Grid item xs={6}>
      <Routes>
        <Route exact path=":year">
          <Route path=":sem" element={<DataDisplay  authPath="/year:/:sem"/> }/>
>>>>>>> 0f48e614aadb1d53df40093ab0a1afadb2753f41
        </Route>
      </Routes>
      </Grid>
      </BrowserRouter>
     </Grid>
<<<<<<< HEAD
=======

  </>
);
>>>>>>> 0f48e614aadb1d53df40093ab0a1afadb2753f41

  </>
);

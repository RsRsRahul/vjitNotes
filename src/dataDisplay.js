import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Grid, Typography} from '@mui/material'
import data from './data/data'
const DataDisplay = () => {
  const {sem}=useParams();
  const items = []
  for(var i=0;i<8;i++){
    var se = "sem"+i
    if(sem === se){
      for(const value of data[i-1].subjects){
<<<<<<< HEAD
      items.push(<li style={{"paddingTop":"1rem"}}><Button variant='text'>{value}</Button></li>)
=======
      items.push(<li style={{"paddingTop":"1rem"}}><Button variant='outlined'>{value}</Button></li>)
>>>>>>> 0f48e614aadb1d53df40093ab0a1afadb2753f41
      }
    }
  }
  return(
    <Grid>
      <Grid item 
      style={{"textAlign":"center"}}
      >
<<<<<<< HEAD
      <Typography>{sem}</Typography>
=======
      <Typography>Subjects</Typography>
>>>>>>> 0f48e614aadb1d53df40093ab0a1afadb2753f41
      </Grid>
      <Grid item 
      style={{"textAlign":"center"}}
      >
        <ul type="none">{items}</ul>
      </Grid>
    </Grid>

  );
}

export default DataDisplay
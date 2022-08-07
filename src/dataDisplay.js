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
      items.push(<li style={{"paddingTop":"1rem"}}><Button variant='outlined'>{value}</Button></li>)
      }
    }
  }
  return(
    <Grid>
      <Grid item 
      style={{"textAlign":"center"}}
      >
      <Typography>{sem}</Typography>
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
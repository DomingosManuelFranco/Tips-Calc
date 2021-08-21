
import { Grid } from '@material-ui/core';
import React from 'react';
import '../components/Style.css';
import Form from './Form';
import ShowTips from './ShowTips';

function Home() {
    return (
        <>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
            <Grid 
                item sm={5}
                > 
                <Form />
            </Grid>
            <Grid item sm={7}> 
                <ShowTips />
            </Grid>
          </Grid>  
        </>
    )
}

export default Home

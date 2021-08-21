
import { TextField, Button } from '@material-ui/core';
import React from 'react'



function Form() {

    return (
        <>
         <form >
             <label>Bill</label>
            <TextField label="Bill" variant="outlined" />
            <Button 
                variant="contained" color="primary">
                5%
            </Button>
            <Button 
                variant="contained" color="primary">
                10%
            </Button>
            <Button 
                variant="contained" color="primary">
                15%
            </Button>
            <Button 
                variant="contained" color="primary">
                25%
            </Button>
            <Button 
                variant="contained" color="primary">
                50%
            </Button>
            <Button 
                variant="contained" color="primary">
                Custom
            </Button>
            
        </form>
        </>
    )
}

export default Form;
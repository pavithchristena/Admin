import React, { useState } from 'react';
import {Grid, Button,TextField, Paper } from '@mui/material'
import axios from 'axios';

const Analytics = () => {
    
        const[Firstname,setFirstname]=useState("");
        const[Lastname,setLastname]=useState("");
        const[Image,setImage]=useState("");
    
    
        const paperStyle={padding:20,height:'auto',width:280,margin:'50px auto'}
        const btnstyle={margin:'8px 0px'}
        console.log(Firstname);
        console.log(Lastname);
        const sendDatatoAPI=()=>{
            axios.post('https://62a18fd6cc8c0118ef4e1022.mockapi.io/crud',{Firstname,Lastname,Image})

        }

    return (
        <div>
            <h1>Upload Product</h1>
            <Paper elavation={20} style={paperStyle}>
        <h1>Add Product</h1>
        <Grid>
        <Grid container spacing={0} direction='column'>
            <TextField  id="outlined-basic" label="title" value={Firstname}
             onChange={(fname)=>setFirstname(fname.target.value)}
                 variant="outlined" fullWidth required/><br/>
                </Grid>
        <Grid items xs={12}>
            <TextField  id="outlined-basic" label="price"  value={Lastname}
            onChange={(lname)=>setLastname(lname.target.value)}
                variant="outlined" fullWidth required/>
        </Grid><br/>
        {/* <Grid items xs={12}>
            <TextField  id="outlined-basic" label="image"  value={Image} type="file" name="file"
            onChange={(image)=>setImage(image.target.value)}
                variant="outlined" fullWidth required/>
        </Grid><br/> */}
         <Grid container spacing={0} direction='column'>
         <TextField  id="outlined-basic" label="image Link"  value={Image}
            onChange={(image)=>setImage(image.target.value)}
                variant="outlined" fullWidth required/>
        </Grid><br/>

        <Grid item xs={12}>
            <Button  variant='contained' onClick={sendDatatoAPI} style={btnstyle} fullWidth>submit</Button>
        </Grid>

        </Grid>
        </Paper>
        </div>
    );
};

export default Analytics;
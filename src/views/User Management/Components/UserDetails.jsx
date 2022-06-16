/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { getAccessToken } from '../../../HTTP/token';
import getUrl from '../../../HTTP/url';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate, useParams } from 'react-router';
const MySwal = withReactContent(Swal)
const UserDetails = ()=>{
    const {id} = useParams();
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [role,setRole] = useState("");
    
    const getUser = async()=>{
        try{
            const response = await axios.get(`${getUrl()}/user/${id}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
            
            if(response.status === 200){
                const {data} = response;
                setUsername(data[0].username);
                setEmail(data[0].email);
                setRole(data[0].role);
            }
        }
        catch(error){
            MySwal.fire({
                icon: 'error',
                text: `${error.message}`,
            });
        }
    }
    useEffect(()=>{
        getUser();
    },[]);
    const navigate = useNavigate();
    return (
        <>
            <Card>
                <CardContent>
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={6} md={6}>
                            <Button
                            fullWidth
                            color="success"
                            onClick={()=>{navigate('/user-list')}}
                            variant="contained">
                                Go Back
                            </Button>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                value={username}
                                disabled
                                id="outlined-basic" 
                                label="Username" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                value={email}
                                disabled
                                id="outlined-basic" 
                                label="Email" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Divider/>
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={6} md={6}>
                            <FormControl 
                            fullWidth
                            variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">User Role</InputLabel>
                                <Select
                                disabled
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={role}
                                label="User Role"
                                >
                                <MenuItem value="Cashier">Cashier</MenuItem>
                                <MenuItem value="Waiter">Waiter</MenuItem>
                                <MenuItem value="Accountant">Acountant</MenuItem>
                                <MenuItem value="Stock Manager">Stock Manager</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default UserDetails;
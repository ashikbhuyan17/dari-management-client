import React, { useState,useEffect } from 'react';
import { Button, Card, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { getAccessToken } from '../../../HTTP/token';
import getUrl from '../../../HTTP/url';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const UserEditForm = ()=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    // eslint-disable-next-line no-unused-vars
    const resetData = ()=>{
        setUsername("");
        setEmail("");
        setPassword("");
        setRole("");
    }
    const editUser = async()=>{
        MySwal.fire({
            title: 'Are you sure to update information?',
            showCancelButton: true,
            confirmButtonText: 'Update',
            cancelButtonText: `Keep`,
          }).then(async(result) => {
            if (result.isConfirmed) {
                const data = {
                    username,
                    email,
                    role,
                    password,
                }
                try{
                    const response = await axios.patch(`${getUrl()}/user/${id}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
                    
                    if(response.status === 200){
                        MySwal.fire({
                            icon: 'success',
                            title: 'Great...',
                            text: `${response.data}`,
                        });
                        setPassword("");
                    }
                }
                catch(error){
                    MySwal.fire({
                        icon: 'error',
                        text: `${error.message}`,
                    });
                }
            } else if (result.isDenied) {}
          })
        
        
    }
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
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <h2>Edit User Credetials</h2>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                value={username}
                                onChange={(event)=>setUsername(event.target.value.toLowerCase())}
                                id="outlined-basic" 
                                label="Username" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                value={email}
                                onChange={(event)=>setEmail(event.target.value)}
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
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={role}
                                onChange={(event)=>setRole(event.target.value)}
                                label="User Role"
                                >
                                <MenuItem value="Cashier">Cashier</MenuItem>
                                <MenuItem value="Waiter">Waiter</MenuItem>
                                <MenuItem value="Accountant">Acountant</MenuItem>
                                <MenuItem value="StockManager">Stock Manager</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(event)=>setPassword(event.target.value)}
                                id="outlined-basic" 
                                label="User Password" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Divider/>
                    <br />
                    <Grid container>
                        <Grid item lg={12} md={12}>
                            <Button
                            fullWidth
                            color="success"
                            onClick={editUser}
                            variant="contained">Save</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default UserEditForm;
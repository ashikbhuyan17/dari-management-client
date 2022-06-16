import React,{useState} from "react";
import {Card,CardContent,Divider,Grid,TextField, Button, 
  Tooltip, FormControl, Select,InputLabel,FormControlLabel,Checkbox} from "@material-ui/core";

import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import InfoIcon from '@material-ui/icons/Info';
const EditUserModal = ({closeModal}) => {
    const [userActivity,setUserActivity] = useState(false);
  return (
    <>
      <Grid container>
        <Grid item lg={2} md={2}/>
        <Grid item lg={8} md={8}>
        <Card style={{ overflowY: "scroll", maxHeight: "100vh" }}>
            <CardContent>
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                  <Grid item lg={6} md={6}>
                    <h1>Edit User</h1>
                  </Grid>
                  <Grid item lg={3} md={3}/>
                  <Grid item lg={2} md={2}/>
                  <Grid item lg={1} md={1}>
                    <h5><CancelPresentationIcon 
                        color="error" 
                        onClick={closeModal} 
                        style={{cursor:"pointer"}}/></h5>
                  </Grid>
                </Grid>
            </CardContent>
            <Divider/>
            <CardContent>
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                    <Grid item lg={12} md={12}>
                      <h3>Add Opening Stock</h3>
                        <Grid container>
                            <Grid item lg={2}>
                                <FormControl 
                                fullWidth
                                variant="outlined">
                                    <InputLabel htmlFor="outlined-age-native-simple">Prefix</InputLabel>
                                        <Select
                                            native
                                            // value={age}
                                            // onChange={handleChange}
                                            label="Prefix"
                                            inputProps={{
                                                name: 'prefix',
                                                id: 'outlined-age-native-simple',
                                            }}
                                        >
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Ms.">Ms.</option>
                                        </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={1} md={1}/>
                            <Grid item lg={4} md={4}>
                                <TextField 
                                fullWidth
                                id="outlined-basic" label="First Name" variant="outlined" />
                            </Grid>
                            <Grid item lg={1} md={1}/>
                            <Grid item lg={4} md={4}>
                                <TextField 
                                fullWidth
                                id="outlined-basic" label="Last Name" variant="outlined" />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container>
                            <Grid item lg={4} md={4}>
                                <TextField 
                                type="email"
                                fullWidth
                                id="outlined-basic" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item lg={1} md={1}/>
                            <Grid item lg={4} md={4}>
                                <FormControlLabel 
                                control={<Checkbox defaultChecked={userActivity} onClick={()=>setUserActivity(!userActivity)} />} 
                                label="Is Active?" />
                                <Tooltip title="Enable or disable stock management for a specific product">
                                    <InfoIcon 
                                    color="primary"
                                    style={{ cursor: "pointer" }} />
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                    <Grid item lg={12} md={12}>
                      <h3>Roles And Permission</h3>
                        <Grid container>
                            <Grid item lg={5} md={5}>
                                <TextField 
                                type="password"
                                fullWidth
                                id="outlined-basic" label="Password" variant="outlined" />
                            </Grid>
                            <Grid item lg={1} md={1}/>
                            <Grid item lg={5} md={5}>
                                <TextField 
                                type="password"
                                fullWidth
                                id="outlined-basic" label="Confirm Password" variant="outlined" />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container>
                            <Grid item lg={5} md={5}>
                            <FormControl 
                                fullWidth
                                variant="outlined">
                                    <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
                                        <Select
                                            native
                                            // value={age}
                                            // onChange={handleChange}
                                            label="Role"
                                            inputProps={{
                                                name: 'role',
                                                id: 'outlined-role-native-simple',
                                            }}
                                        >
                                        <option value="Admin">Admin</option>
                                        <option value="Other">Other</option>
                                        </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container>
                            <Grid item lg={3} md={3}>
                                <h3>Access Locations
                                    <Tooltip title="Control which location user can access">
                                        <InfoIcon 
                                        color="primary"
                                        style={{ cursor: "pointer" }} />
                                    </Tooltip>
                                </h3>
                            </Grid>
                            <Grid item lg={1} md={1}/>
                            <Grid item lg={4} md={4}>
                                <FormControlLabel 
                                control={<Checkbox defaultChecked={userActivity} onClick={()=>setUserActivity(!userActivity)} />} 
                                label="All Location" />
                                <Tooltip title="Will be able to access all locations">
                                    <InfoIcon 
                                    color="primary"
                                    style={{ cursor: "pointer" }} />
                                </Tooltip>
                                <br />
                                <FormControlLabel 
                                control={<Checkbox defaultChecked={userActivity} onClick={()=>setUserActivity(!userActivity)} />} 
                                label="Shop" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider/>
            <CardContent>
                <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center" 
                spacing="1">
                  <Grid item lg={12} md={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        endIcon={<SaveOutlinedIcon/>}
                      >
                        Procced
                      </Button>
                  </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
        <Grid item lg={2} md={2}/>
      </Grid>
  </>
  );
};

export default EditUserModal;

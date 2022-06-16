import React from "react";
import {Card,CardContent,Divider,Grid,TextField, Button, Select } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
const AddPaymentAccountsModal = ({closeModal}) => {
  return (
    <>
      <Grid container>
        <Grid item lg={3} md={3}/>
        <Grid item lg={6} md={6}>
        <Card>
            <CardContent>
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                  <Grid item lg={6} md={6}>
                    <h1>Add Payment Account</h1>
                  </Grid>
                  <Grid item lg={3} md={3}/>
                  <Grid item lg={2} md={2}/>
                  <Grid item lg={1} md={1}>
                    <h5><CloseIcon color="error" onClick={closeModal} style={{cursor:"pointer"}}/></h5>
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
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Name"
                        />
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
                        <TextField
                            fullWidth
                            type="number"
                            variant="outlined"
                            label="Account Number"
                            />
                     </Grid>
                </Grid>
                <br />
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                      <Grid 
                      container
                      direction="row"
                      spacing="2">
                          <Grid item lg={12} md={12}>
                            <FormControl 
                                    fullWidth 
                                    variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Account Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Account Type"
                                    >
                                    <MenuItem value="">Please Select</MenuItem>
                                    </Select>
                                </FormControl>
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
                        <TextField
                            fullWidth
                            type="number"
                            variant="outlined"
                            label="Opening Balance"
                            />
                     </Grid>
                </Grid>
                <br />
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                      <Grid 
                      container
                      direction="row"
                      spacing="2">
                          <Grid item lg={6} md={6}>
                            <TextField
                                    fullWidth
                                    label="Label"
                                    variant="outlined"/>
                          </Grid>
                          <Grid item lg={6} md={6}>
                                <TextField
                                fullWidth
                                label="Label Value"
                                variant="outlined"/>
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
                      <Grid 
                      container
                      direction="row"
                      spacing="2">
                          <Grid item lg={12} md={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows="5"
                                label="Note"
                                variant="outlined"/>
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
                        Save
                      </Button>
                  </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
        <Grid item lg={3} md={3}/>
      </Grid>
  </>
  );
};

export default AddPaymentAccountsModal;

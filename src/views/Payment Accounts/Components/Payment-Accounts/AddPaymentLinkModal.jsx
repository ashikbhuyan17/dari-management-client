import React from "react";
import {Card,CardContent,Divider,Grid, Button, Select } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
const AddPaymentLinkModal = ({closeModal}) => {
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
                    <h1>Link Account - Payment Ref No: - SP2021/0001</h1>
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
                        <FormControl 
                            fullWidth 
                            variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">Account</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                // value={age}
                                // onChange={handleChange}
                                label="Account"
                            >
                            <MenuItem value="">Please Select</MenuItem>
                            </Select>
                        </FormControl>
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

export default AddPaymentLinkModal;

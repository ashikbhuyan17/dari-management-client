import React from "react";
import {Card,CardContent,Divider,Grid,TextField, Button, Select } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
const AddWarrantyModal = ({closeModal}) => {
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
                    <h1>Add Warranty</h1>
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
                            multiline
                            fullWidth
                            rows={8}
                            variant="outlined"
                            label="Description"
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
                      <Grid item lg={4} md={4}>
                        <TextField
                            fullWidth
                            type="number"
                            variant="outlined"
                            label="Duration"
                            />
                     </Grid>
                     <Grid item lg={8} md={8}>
                        <FormControl 
                            fullWidth
                            variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">Warranty Type</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            // value={age}
                            // onChange={handleChange}
                            label="Warranty Type"
                            >
                            <MenuItem value="">
                                <em>Please Select</em>
                            </MenuItem>
                            <MenuItem value="Days">Days</MenuItem>
                            <MenuItem value="Months">Months</MenuItem>
                            <MenuItem value="Years">Years</MenuItem>
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

export default AddWarrantyModal;

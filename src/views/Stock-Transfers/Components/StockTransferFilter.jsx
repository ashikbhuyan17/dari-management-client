import { Card, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const StockTransferFilter = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                type="date"
                                id="outlined-basic" 
                                label="Start Date" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                id="outlined-basic" 
                                label="Reference No" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Status"
                                >
                                <MenuItem value="">Please Select</MenuItem>
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="In Transit">In Transit</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={6} md={6}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Location (From)</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Location (From)"
                                >
                                <MenuItem value="">Please Select</MenuItem>
                                <MenuItem value="Location 1">Location 1</MenuItem>
                                <MenuItem value="Location 2">Location 2</MenuItem>
                                <MenuItem value="Location 3">Location 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Location (From)</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Location (From)"
                                >
                                <MenuItem value="">Please Select</MenuItem>
                                <MenuItem value="Location 1">Location 1</MenuItem>
                                <MenuItem value="Location 2">Location 2</MenuItem>
                                <MenuItem value="Location 3">Location 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default StockTransferFilter;
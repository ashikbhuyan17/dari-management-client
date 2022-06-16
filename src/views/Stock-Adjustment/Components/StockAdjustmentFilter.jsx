import { Card, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const StockAdjustmentFilter = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={3} md={3}>
                            <TextField 
                                fullWidth
                                type="date"
                                id="outlined-basic" 
                                label="Start Date" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={3} md={3}>
                            <TextField 
                                fullWidth
                                id="outlined-basic" 
                                label="Reference No" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={3} md={3}>
                            <TextField 
                                fullWidth
                                type="date"
                                id="outlined-basic" 
                                label="Date" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={3} md={3}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Adjustment Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Adjustment Type"
                                >
                                <MenuItem value="">Please Select</MenuItem>
                                <MenuItem value="Normal">Normal</MenuItem>
                                <MenuItem value="Abnormal">Abnormal</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default StockAdjustmentFilter;
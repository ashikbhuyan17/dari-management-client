import { Card, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const ExpenseRecurring = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={4} md={4}>
                        <FormControlLabel control={<Checkbox name="isRecurring" />} label="Is Recurring?" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <Grid 
                            container
                            direction="row"
                            spacing="2">    
                                <Grid item lg={6} md={6}>
                                    <TextField 
                                    fullWidth
                                    type="number"
                                    id="outlined-basic" 
                                    label="Recurring Value" 
                                    variant="outlined" />
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <FormControl 
                                        fullWidth 
                                        variant="outlined">
                                        <InputLabel id="demo-simple-select-outlined-label">Recurring Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            // value={age}
                                            // onChange={handleChange}
                                            label="Recurring Type"
                                        >
                                        <MenuItem value="">Please Select</MenuItem>
                                        <MenuItem value="Days">Days</MenuItem>
                                        <MenuItem value="Months">Months</MenuItem>
                                        <MenuItem value="Years">Years</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                type="number"
                                id="outlined-basic" 
                                label="No. of Repetitions" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ExpenseRecurring;
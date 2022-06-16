import { InputLabel, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const DashboardFilter = ()=>{
    return (
        <>
            <Grid 
            container
            spacing="2">
                <Grid item lg={6} md={6}>
                    <FormControl 
                        fullWidth 
                        variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">Business Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            // value={age}
                            // onChange={handleChange}
                            label="Business Location"
                        >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Shop A">Shop A</MenuItem>
                        <MenuItem value="Shop B">Shop B</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={6} md={6}>
                    <FormControl 
                        fullWidth 
                        variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">Filter Date</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            // value={age}
                            // onChange={handleChange}
                            label="Filter Date"
                        >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="This Year">This Year</MenuItem>
                        <MenuItem value="Last Year">Last Year</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardFilter;
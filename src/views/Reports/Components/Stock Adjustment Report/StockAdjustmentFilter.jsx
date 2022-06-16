import {  Card, InputLabel, Select, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const StockAdjustmentFilter = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h4">Filters</Typography>
                    <br />
                    <Divider/>
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={12} md={12}>
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
                                    <MenuItem value="Shop1">Shop 1</MenuItem>
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
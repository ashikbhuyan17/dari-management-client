import { Card, InputLabel, Select, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const ExpenseReportFilter = ()=>{
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
                        <Grid item lg={4} md={4}>
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
                                        <MenuItem value="Shop2">Shop 2</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                    fullWidth 
                                    variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Category"
                                    >
                                    <MenuItem value="All">All</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <Grid
                            container
                            direction="row"
                            spacing="2">
                                <Grid item lg={6} md={6}>
                                    <TextField 
                                    type="date"
                                    id="outlined-basic" 
                                    label="Start Date" 
                                    variant="outlined" />
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <TextField 
                                    type="date"
                                    id="outlined-basic" 
                                    label="End Date" 
                                    variant="outlined" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ExpenseReportFilter;
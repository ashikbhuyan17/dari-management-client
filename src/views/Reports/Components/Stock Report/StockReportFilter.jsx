import {  Card, InputLabel, Select, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const StockReportFilter = ()=>{
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
                                    <MenuItem value="Category 1">Category 1</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                    fullWidth 
                                    variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Sub Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Sub Category"
                                    >
                                    <MenuItem value="All">All</MenuItem>
                                    <MenuItem value="A">A</MenuItem>
                                    <MenuItem value="B">B</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                    fullWidth 
                                    variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Brand"
                                    >
                                    <MenuItem value="All">All</MenuItem>
                                    <MenuItem value="A">A</MenuItem>
                                    <MenuItem value="B">B</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                    fullWidth 
                                    variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Unit</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Unit"
                                    >
                                    <MenuItem value="All">All</MenuItem>
                                    <MenuItem value="A">A</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                        <Grid item lg={4} md={4}/>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default StockReportFilter;
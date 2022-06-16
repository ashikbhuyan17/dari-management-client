import React from 'react';
import { Card, InputLabel, Select, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
const CashFlowFilter = ()=>{
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
                                <InputLabel id="demo-simple-select-outlined-label">Account Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Account Type"
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
                                    fullWidth
                                    type="date"
                                    label="Start Date"
                                    variant="outlined"/>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <TextField
                                    fullWidth
                                    type="date"
                                    label="End Date"
                                    variant="outlined"/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Transaction Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Transaction Type"
                                >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Debit">Debit</MenuItem>
                                <MenuItem value="Credit">Credit</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default CashFlowFilter;
import { Autocomplete, Card, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import customerList from '../../POS/customerList';
const userList = [
    {id:1,name:"Cashier"},
    {id:2,name:"Admin"},
]
const ExpenseFilter = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <Grid 
                    container
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
                                <MenuItem value="">Please Select</MenuItem>
                                <MenuItem value="Location 1">Location 1</MenuItem>
                                <MenuItem value="Location 2">Location 2</MenuItem>
                                <MenuItem value="Location 3">Location 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <Autocomplete
                                fullWidth
                                id="combo-box-demo"
                                options={userList}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => <TextField  {...params} label="Search User" variant="outlined" />}
                                />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <Autocomplete
                                fullWidth
                                id="combo-box-demo"
                                options={customerList}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => <TextField  {...params} label="Search Customer" variant="outlined" />}
                                />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Expense Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Expense Category"
                                >
                                <MenuItem value="">Please Select</MenuItem>
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
                                <InputLabel id="demo-simple-select-outlined-label">Payment Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Payment Status"
                                >
                                <MenuItem value="">Please Select</MenuItem>
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Paid">Paid</MenuItem>
                                <MenuItem value="Due">Due</MenuItem>
                                <MenuItem value="Partial">Partial</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ExpenseFilter;
import { Autocomplete, Card, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import customerList from '../../POS/customerList';
const adminList = [
    {id: 1,name: "Admin"},
    {id: 2,name: "Cashier"},
]
const ExpenseAddFilter = ()=>{
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
                                <MenuItem value="Shop 1">Shop 1</MenuItem>
                                <MenuItem value="Shop 2">Shop 2</MenuItem>
                                <MenuItem value="Shop 3">Shop 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
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
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                id="outlined-basic" 
                                label="Reference No" 
                                variant="outlined" />
                        </Grid>
                        
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                type="date"
                                id="outlined-basic" 
                                label="Date" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <Autocomplete
                                fullWidth
                                id="combo-box-demo"
                                options={adminList}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => <TextField  {...params} label="Expense For" variant="outlined" />}
                                />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <Autocomplete
                                    fullWidth
                                    id="combo-box-demo"
                                    options={customerList}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => <TextField  {...params} label="Expense For Contact" variant="outlined" />}
                                    />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                type="file"
                                id="outlined-basic" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Applicable Tax</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Applicable Tax"
                                >
                                <MenuItem value="">Please Select</MenuItem>
                                <MenuItem value="Vat@10%">Vat@10%</MenuItem>
                                <MenuItem value="CGST@10%">CGST@10%</MenuItem>
                                <MenuItem value="SGST@8%">SGST@8%</MenuItem>
                                <MenuItem value="GST@18%">GST@18%</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                type="number"
                                id="outlined-basic" 
                                label="Total Amount"
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={8} md={8}>
                            <TextField 
                                fullWidth
                                multiline
                                rows="5"
                                id="outlined-basic"
                                label="Expense Note" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControlLabel control={<Checkbox name="isRefud" />} label="Is Refund?" />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ExpenseAddFilter;
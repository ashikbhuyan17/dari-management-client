import { Card, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const ExpenseAddPayment = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <h2>Add Payment</h2>
                    <p><strong>Advance Due: </strong> 0.00</p>
                </CardContent>
                <CardContent>
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                multiline
                                rows="6"
                                id="outlined-basic" 
                                label="Amount" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                type="date"
                                id="outlined-basic" 
                                label="Paid On" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Payment Method</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Payment Method"
                                >
                                <MenuItem value="">Please Select</MenuItem>
                                <MenuItem value="Cash">Cash</MenuItem>
                                <MenuItem value="Card">Card</MenuItem>
                                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
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
                                <InputLabel id="demo-simple-select-outlined-label">Payment Account</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Payment Account"
                                >
                                <MenuItem value="">Please Select</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={8} md={8}/>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <TextField 
                                fullWidth
                                multiline
                                rows="5"
                                id="outlined-basic" 
                                label="Payment Note" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <Button
                            fullWidth
                            color="primary"
                            variant="contained">
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ExpenseAddPayment;
import { Autocomplete, Card, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const AddPurchaseReturnFilter = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={3} md={3}>
                            <Autocomplete
                                fullWidth
                                id="combo-box-demo"
                                // options={supplierList}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => <TextField  {...params} label="Suplliers" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item lg={3} md={3}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Purchase Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Purchase Status"
                                >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Recieved">Recieved</MenuItem>
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Ordered">Ordered</MenuItem>
                                </Select>
                            </FormControl>
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
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={3} md={3}>
                            <TextField 
                                fullWidth
                                type="file"
                                id="outlined-basic" 
                                // label="Pay Term Value" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={9} md={9}/>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default AddPurchaseReturnFilter;
import { Autocomplete, Card, InputLabel, Select, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
export const productList = [
    {id: 1,product: "Acer Aspire E 15 - Color - White",sku:"AS0017-2",supplier:"Univer Suppliers,ckson Hill",referenceno:"PO2018/0002",
    date:"09/04/2021",quantity: "50.00 PC(s)",totalunitadjusted:"0.00 PC(s)",unitpurchaseprice:"350.00",subtotal:"17,500.00"}
]
export const supplierList = [
    {id: 1,name:"Walk-In"}
]
const ProductPurchaseReportFilter = ()=>{
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
                        <Grid item lg={3} md={3}>
                            <Autocomplete
                                fullWidth
                                id="combo-box-demo"
                                options={productList}
                                getOptionLabel={(option) => option.product}
                                renderInput={(params) => <TextField  {...params} label="Search Products" variant="outlined" />}
                                />
                        </Grid>
                        <Grid item lg={3} md={3}>
                            <Autocomplete
                                fullWidth
                                id="combo-box-demo"
                                options={supplierList}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => <TextField  {...params} label="Search Supplier" variant="outlined" />}
                                />
                        </Grid>
                        <Grid item lg={3} md={3}>
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
                                <MenuItem value="Shop 1">Shop 1</MenuItem>
                                <MenuItem value="Shop 2">Shop 2</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={3} md={3}>
                            <Grid 
                            container
                            direction="row"
                            spacing="2">
                                <Grid item lg={6} md={6}>
                                    <TextField
                                    fullWidth
                                    type="date"
                                    variant="outlined"
                                    label="Start Date"/>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <TextField
                                    fullWidth
                                    type="date"
                                    variant="outlined"
                                    label="End Date"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductPurchaseReportFilter;
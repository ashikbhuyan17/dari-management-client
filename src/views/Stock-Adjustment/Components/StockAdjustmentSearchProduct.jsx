import { Autocomplete, Card } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import { productList } from '../../Inventory/Components/AllProducts';
const StockAdjustmentSearchProduct = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <Autocomplete
                            fullWidth
                            id="combo-box-demo"
                            options={productList}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField  {...params} label="Search Product" variant="outlined" />}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Unit Price</TableCell>
                                        <TableCell>Sub Total</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={12} md={12}>
                           <p><strong>Total Amount: 0.00</strong></p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default StockAdjustmentSearchProduct;
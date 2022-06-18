import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import AllProducts from '../Components/AllProducts';


const ProductList = () => {
    return (
        <>
            <Grid container>
                <Typography variant="h2">
                    Product List
                </Typography>
                <Grid item lg={12} md={12}>
                    <AllProducts />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductList;
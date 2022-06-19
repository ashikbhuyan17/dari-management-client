import { Grid } from '@material-ui/core';
import React from 'react';
import AllProducts from '../Components/AllProducts';


const ProductList = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <AllProducts />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductList;
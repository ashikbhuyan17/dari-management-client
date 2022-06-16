import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import ProductRecipeListTabs from '../Components/Sub-Components/ProductRecipeListTabs';


const AddProduct = ()=>{
    return (
        <>
            <Grid container>
                <Typography variant="h2">
                    Recipe List
                </Typography>
                <Grid item lg={12} md={12}>
                    <ProductRecipeListTabs/>
                </Grid>
            </Grid>
        </>
    )
}

export default AddProduct;
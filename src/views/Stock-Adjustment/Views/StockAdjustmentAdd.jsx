import React from "react";
import { Grid} from "@material-ui/core";
import StockAdjustmentFilter from "../Components/StockAdjustmentFilter";
import StockAdjustmentSearchProduct from "../Components/StockAdjustmentSearchProduct";
import StockAdjustmentAmountRecovered from "../Components/StockAdjustmentAmountRecovered";

const StockAdjustmentAdd = () => {
  return (
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center" 
        spacing="1">
        <Grid 
        style={{ marginBottom: "15px" }}
        item 
        lg={12} md={12}>
            <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center">
                <Grid item lg={6} md={6}>
                    <h2>Add Stock Transfer</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockAdjustmentFilter/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockAdjustmentSearchProduct/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockAdjustmentAmountRecovered/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default StockAdjustmentAdd;

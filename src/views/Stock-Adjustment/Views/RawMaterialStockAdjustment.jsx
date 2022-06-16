import React from "react";
import { Grid } from "@material-ui/core";
import AddRawMaterialAdjustmentForm from "../Components/AddRawMaterialStockAdjustment";
const RawMaterialStockAdjustment = () => {
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
                    <h2>Raw Material Stock Adjustment</h2>
                </Grid>
            </Grid>
            <Grid 
            container
            direction="row"
            spacing="2">
                <Grid item lg={12} md={12}>
                    <AddRawMaterialAdjustmentForm/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default RawMaterialStockAdjustment;

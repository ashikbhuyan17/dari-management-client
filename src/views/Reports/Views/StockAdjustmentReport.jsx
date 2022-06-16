import React from "react";
import { Grid } from "@material-ui/core";
import StockAdjustmentFilter from "../Components/Stock Adjustment Report/StockAdjustmentFilter";
import StockAdjustmentAmounts from "../Components/Stock Adjustment Report/StockADjustmentAmounts";
import StockAdjustmentTable from "../Components/Stock Adjustment Report/StockAdjustmentTable";

const StockAdjustmentReport = () => {
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
                    <h2>Stock Adjustment Report</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockAdjustmentFilter/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockAdjustmentAmounts/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockAdjustmentTable/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default StockAdjustmentReport;

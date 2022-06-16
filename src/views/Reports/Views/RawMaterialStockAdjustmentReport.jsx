import React from "react";
import { Grid } from "@material-ui/core";
import RawMaterialStockAdjustmentTable from "../Components/Raw Material/RawMaterialStockAdjustment";

const RawMaterialStockAdjustmentReport = () => {
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
                <Grid item lg={12} md={12}>
                    <RawMaterialStockAdjustmentTable/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default RawMaterialStockAdjustmentReport;

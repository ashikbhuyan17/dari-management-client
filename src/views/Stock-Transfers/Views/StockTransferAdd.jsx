import React from "react";
import { Grid} from "@material-ui/core";
import StockTransferFilter from "../Components/StockTransferFilter";
import StockTransferSearchProduct from "../Components/StockTransferSearchProduct";
import StockTransferShippingCharge from "../Components/StockTransferShippingCharge";

const StockTransferAdd = () => {
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
                    <StockTransferFilter/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockTransferSearchProduct/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockTransferShippingCharge/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default StockTransferAdd;

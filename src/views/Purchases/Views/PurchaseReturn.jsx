import React from "react";
import { Grid } from "@material-ui/core";
import PurchaseReturnFilter from "../Components/PurchaseReturnFilter";
import PurchaseReturnTable from "../Components/PurchaseReturnTable";

const PurchaseReturn = () => {
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
                    <h2>Purchase Return</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <PurchaseReturnFilter/>
                </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid item lg={12} md={12}>
                <PurchaseReturnTable/>
              </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid item lg={12} md={12}>
                
              </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid item lg={12} md={12}>
                
              </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default PurchaseReturn;

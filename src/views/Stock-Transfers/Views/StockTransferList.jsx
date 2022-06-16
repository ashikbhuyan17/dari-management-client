import React from "react";
import { Grid} from "@material-ui/core";
import StockTransferTable from "../Components/StockTransferTable";

const StockTransferList = () => {
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
                    <h2>Stock Transfer</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <StockTransferTable/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default StockTransferList;

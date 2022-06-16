import React from "react";
import { Grid,Card, } from "@material-ui/core";
const StockReportClosing = () => {
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
            <Card>
            <Grid container >
                <Grid  item lg={3} md={3}>
                    <h2>Closing Stock (By Purchase Price)</h2>
                    <h1>$ 451,304.20</h1>
                </Grid>
                <Grid  item lg={3} md={3}>
                    <h2>Closing Stock (By Sale Price)</h2>
                    <h1>$ 451,304.20</h1>
                </Grid>
                <Grid  item lg={3} md={3}>
                    <h2>Potential Profit</h2>
                    <h1>$ -51,304.20</h1>
                </Grid>
                <Grid  item lg={3} md={3}>
                    <h2>Profit Margin %</h2>
                    <h1>-4.90</h1>
                </Grid>
            </Grid>
            </Card>
        </Grid>
      </Grid>
  );
};

export default StockReportClosing;

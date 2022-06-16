import React from "react";
import { Grid,Card, } from "@material-ui/core";
const StockAdjustmentAmounts = () => {
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
            <Grid container >
                <Grid  item lg={6} md={6}>
                    <Card>
                    <Grid 
                    container
                    direction="row">
                        <Grid item lg={12} md={12}>
                            <Grid container>
                                <Grid item lg={6} md={6}>
                                    <p><strong>Total Normal:</strong></p>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <p>$ 255,986.00</p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item lg={6} md={6}>
                                    <p><strong>Total Abnormal:</strong></p>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <p>$ 255,986.00</p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item lg={6} md={6}>
                                    <p><strong>Total Stock Adjustment:</strong></p>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <p>$ 255,986.00</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Card>
                </Grid>
                <Grid item lg={6} md={6}>
                    <Card>
                    <Grid 
                    container
                    direction="row">
                        <Grid item lg={12} md={12}>
                            <Grid container>
                                <Grid item lg={6} md={6}>
                                    <p><strong>Total Amount Recovered:</strong></p>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <p>$ 1,538.75</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default StockAdjustmentAmounts;

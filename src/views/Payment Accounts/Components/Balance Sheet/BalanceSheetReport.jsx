import React from "react";
import { Grid,Button, Card, Divider } from "@material-ui/core";
import PrintIcon from '@material-ui/icons/Print';
const BalanceSheetReport = () => {
  return (
      <Card>
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
                    <h2>Liability</h2>
                    <Grid 
                    container
                    direction="row">
                        <Grid item lg={12} md={12}>
                            <Grid container>
                                <Grid item lg={6} md={6}>
                                    <p><strong>Supplier Due:</strong></p>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <p>$ 255,986.00</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6}>
                    <h2>Assets</h2>
                    <Grid 
                    container
                    direction="row">
                        <Grid item lg={12} md={12}>
                            <Grid container>
                                <Grid item lg={6} md={6}>
                                    <p><strong>Customer Due:</strong></p>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <p>$ 1,538.75</p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item lg={6} md={6}>
                                    <p><strong>Closing Stock:</strong></p>
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <p>$ 400,050.0</p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item lg={6} md={6}>
                                    <p><strong>Account Balance:</strong></p>
                                </Grid>
                                <Grid item lg={6} md={6}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container >
                <Grid  item lg={6} md={6}>
                    <Grid 
                    container
                    direction="row">
                        <Grid item lg={6} md={6}>
                            <h2>Total Liability</h2>
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <p>$ 255,986.00</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6}>
                    <Grid 
                    container
                    direction="row">
                        <Grid item lg={6} md={6}>
                            <h2>Total Assets</h2>
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <p>$ 401,588.75</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
            <br />
            <Grid container>
                <Grid item lg={12} md={12}>
                    <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    startIcon={<PrintIcon/>}>
                        Print
                    </Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
      </Card>
  );
};

export default BalanceSheetReport;

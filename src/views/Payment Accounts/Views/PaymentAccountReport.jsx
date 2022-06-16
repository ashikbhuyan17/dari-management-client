import React from "react";
import { Grid} from "@material-ui/core";
import PaymentAccountFilter from "../Components/Payment-Accounts/PaymentAccountFilter";
import PaymentAccountReportTable from "../Components/Payment-Accounts/PaymentAccountReportTable";

const PaymentAccountReport = () => {
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
                    <h2>Payment Account Report</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <PaymentAccountFilter/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <PaymentAccountReportTable/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default PaymentAccountReport;

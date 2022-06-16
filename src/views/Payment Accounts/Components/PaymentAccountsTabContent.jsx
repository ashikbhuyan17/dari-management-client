import React from "react";
import { Grid} from "@material-ui/core";
import PaymentAccountsTable from "./Payment-Accounts/PaymentAccountsTable";

const PaymentAccountsTabContent = () => {
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
                    <h2>Payment Accounts</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <PaymentAccountsTable/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default PaymentAccountsTabContent;

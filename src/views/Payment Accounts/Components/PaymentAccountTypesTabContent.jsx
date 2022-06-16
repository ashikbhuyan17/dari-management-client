import React from "react";
import { Grid} from "@material-ui/core";
import PaymentAccountTypeTable from "./Payment-Accounts/PaymentAccountTypeTable";

const PaymentAccountTypesTabContent = () => {
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
            <Grid container>
                <Grid item lg={12} md={12}>
                    <PaymentAccountTypeTable/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default PaymentAccountTypesTabContent;

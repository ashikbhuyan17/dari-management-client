import React from "react";
import { Grid } from "@material-ui/core";
import ExpenseReportFilter from "../Components/Expense Report/ExpenseReportFilter";
import ExpenseReportTable from "../Components/Expense Report/ExpenseReportTable";

const ExpenseReport = () => {
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
                    <h2>Expense Report</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <ExpenseReportFilter/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <ExpenseReportTable/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default ExpenseReport;

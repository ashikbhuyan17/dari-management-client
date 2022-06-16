import React from "react";
import { Grid } from "@material-ui/core";
import AddExpenseForm from "../Components/AddExpenseForm";

const ExpenseAdd = () => {
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
                    <h2>Add Expense</h2>
                </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid item lg={12} md={12}>
                <AddExpenseForm/>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default ExpenseAdd;

import React from "react";
import { Grid, Card } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
export const cashFlowList = []
const CashFlowTable = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'date',
        headerName: 'Date',
        width: 190,
        editable: true,
      },
      {
        field: 'account',
        headerName: 'Account',
        width: 220,
        editable: true,
      },
      {
        field: 'decription',
        headerName: 'Description',
        width: 220,
        editable: true,
      },
      {
        field: 'credit',
        headerName: 'Credit',
        width: 190,
        editable: true,
      },
      {
        field: 'debit',
        headerName: 'Debit',
        width: 190,
        editable: true,
      },
      {
        field: 'balance',
        headerName: 'Balance',
        width: 190,
        editable: true,
      },
    ];
  return (
      <Card>
          <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center" 
            spacing="1">
            <Grid item lg={12} md={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={cashFlowList}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                    />
                </div>
            </Grid>
        </Grid>
      </Card>
  );
};

export default CashFlowTable;

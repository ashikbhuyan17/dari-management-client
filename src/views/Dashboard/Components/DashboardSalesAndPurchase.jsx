import { Card } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';
const salesPaymentDueList = [];
const purchasePaymentDueList = [];
const DashboardSalesAndPurchaseDue = ()=>{
    const salesPaymentDueColumns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
          field: 'customer',
          headerName: 'Customer',
          width: 180,
          editable: true,
        },
        {
          field: 'invoice',
          headerName: 'Invoice No',
          width: 150,
          editable: true,
        },
        {
          field: 'dueamount',
          headerName: 'Due Amount',
          width: 190,
          editable: true,
        },
      ];
      const purchasePaymentDueColumns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
          field: 'supplier',
          headerName: 'Supplier',
          width: 180,
          editable: true,
        },
        {
          field: 'reference',
          headerName: 'Reference No',
          width: 180,
          editable: true,
        },
        {
          field: 'dueamount',
          headerName: 'Due Amount',
          width: 190,
          editable: true,
        },
      ];
    return (
        <>
            <Grid 
            direction="row"
            container
            spacing="2">
                <Grid item lg={6} md={6}>
                    <Card>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                style={{ overflowX:"auto" }}
                                rows={salesPaymentDueList}
                                columns={salesPaymentDueColumns}
                                pageSize={5}
                                checkboxSelection
                            />
                        </div>
                    </Card>
                </Grid>
                <Grid item lg={6} md={6}>
                    <Card>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                style={{ overflowX:"auto" }}
                                rows={purchasePaymentDueList}
                                columns={purchasePaymentDueColumns}
                                pageSize={5}
                                checkboxSelection
                            />
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardSalesAndPurchaseDue;
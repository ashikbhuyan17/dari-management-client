import { Card} from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import AddBoxIcon from '@material-ui/icons/AddBox';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const PurchaseReturnTable = ()=>{
    const productPurchaseList = [];
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
          field: 'date',
          headerName: 'Date',
          width: 180,
          editable: true,
        },
        {
          field: 'referenceno',
          headerName: 'Reference No',
          width: 220,
          editable: true,
        },
        {
          field: 'location',
          headerName: 'Business Location',
          width: 220,
          editable: true,
        },
        {
          field: 'supllier',
          headerName: 'Supllier',
          width: 190,
          editable: true,
        },
        {
          field: 'parentpurchase',
          headerName: 'Parent Purchase',
          width: 220,
          editable: true,
        },
        {
          field: 'paymentstatus',
          headerName: 'Payment Status',
          width: 220,
          editable: true,
        },
        {
          field: 'grandtotal',
          headerName: 'Grand Total',
          width: 220,
          editable: true,
        },
        {
          field: 'paymentdue',
          headerName: 'Payment Due',
          width: 220,
          editable: true,
        },
      ];
      const navigate = useNavigate();
    return (
        <>
            <Card>
                <CardContent>
                        <Grid container>
                            <Grid item lg={6} md={6}>
                                <h2>All Purchase Returns</h2>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <Grid 
                                container
                                direction="row"
                                justifyContent="flex-end">
                                    <Grid item lg={6} md={6}/>
                                    <Grid item lg={6} md={6}>
                                        <Button
                                        aria-controls="simple-menu" 
                                        aria-haspopup="true"
                                        onClick={()=>{return navigate('/purchase/return/create')}}
                                        color="primary" 
                                        variant="contained"
                                        startIcon={<AddBoxIcon/>}
                                        >
                                            Add
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12}>
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={productPurchaseList}
                                        columns={columns}
                                        pageSize={5}
                                        checkboxSelection
                                    />
                                </div>
                            </Grid>
                        </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default PurchaseReturnTable;
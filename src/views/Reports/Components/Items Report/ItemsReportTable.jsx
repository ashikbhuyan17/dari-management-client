import React from "react";
import { Grid, Card } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
const ItemsReportTable = ({data}) => {
    const columns = [
      {
        field: 'totalquantitysold',
        headerName: 'Total Item Sold',
        width: 190,
        editable: true,
      },
      {
        field: 'totalamount',
        headerName: 'Total Sold Amount(BDT)',
        width: 250,
        editable: true,
      },
      {
        field: 'name',
        headerName: 'Product Name',
        width: 220,
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
                <div style={{ height: 400, width: "100%",overflowX:"auto",marginTop:"15px" }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={5}
                    />
                </div>
            </Grid>
        </Grid>
      </Card>
  );
};

export default ItemsReportTable;

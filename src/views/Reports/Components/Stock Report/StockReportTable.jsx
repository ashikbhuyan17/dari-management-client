import React,{useState} from "react";
import { Card, Grid } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { Autocomplete,TextField } from "@material-ui/core";
const stockReportList = []
const StockReportTable = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'sku',
        headerName: 'SKU',
        width: 190,
        editable: true,
      },
      {
        field: 'unitprice',
        headerName: 'Unit Price',
        width: 220,
        editable: true,
      },
      {
        field: 'currentstock',
        headerName: 'Current Stock',
        width: 190,
        editable: true,
      },
      {
        field: 'location',
        headerName: 'Location',
        width: 220,
        editable: true,
      },
      {
        field: 'currentstockvaluebypurchaseprice',
        headerName: 'Current Stock Value (By Purchase Price)',
        width: 190,
        editable: true,
      },
      {
        field: 'currentstockvaluebysaleprice',
        headerName: 'Current Stock Value (By Sale Price)',
        width: 220,
        editable: true,
      },
      {
        field: 'potentialprofit',
        headerName: 'Potential Profit',
        width: 190,
        editable: true,
      },
      {
        field: 'totalunitsold',
        headerName: 'Total Unit Sold',
        width: 220,
        editable: true,
      },
      {
        field: 'totalunittransfered',
        headerName: 'Total Unit Transfered',
        width: 220,
        editable: true,
      },
      {
        field: 'totalunitadjusted',
        headerName: 'Total Unit Adjusted',
        width: 220,
        editable: true,
      },
    ];
  const onSelect = (event)=>{
    const {data} = event;
    const {id} = data;
    pushIdToSelectedList(id);
  }
  const [selectedIdList,setSelectedId] = useState([]);
  const pushIdToSelectedList = (id)=>{
      const includes = selectedIdList.includes(id);
      if(includes) {
        const updatedList = selectedIdList.filter((indexId)=> {return id!==indexId});
        setSelectedId(updatedList);
      }else{
          setSelectedId(prevIdList=>[...prevIdList,id]);
      }
  }
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
                <h2>Stock Adjustments</h2>
                <Grid container>
                    <Grid item lg={12} md={12}>
                        <Autocomplete
                            fullWidth
                            id="combo-box-demo"
                            options={stockReportList}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField  {...params} label="Search Products" variant="outlined" />}
                            />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12} md={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={stockReportList}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onRowSelected={onSelect}
                    />
                </div>
            </Grid>
        </Grid>
        </Card>
  );
};

export default StockReportTable;

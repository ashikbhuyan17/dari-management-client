import React,{useState} from "react";
import { Card, Grid } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { Autocomplete,TextField } from "@material-ui/core";
const stockAdjustmentList = []
const StockAdjustmentTable = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'date',
        headerName: 'Date',
        width: 190,
        editable: true,
      },
      {
        field: 'referenceno',
        headerName: 'Reference No',
        width: 220,
        editable: true,
      },
      {
        field: 'adjustmenttype',
        headerName: 'Adjustment Type',
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
        field: 'totalamount',
        headerName: 'Total Amount',
        width: 190,
        editable: true,
      },
      {
        field: 'totalamountrecovered',
        headerName: 'Total Amount Recovered',
        width: 220,
        editable: true,
      },
      {
        field: 'reason',
        headerName: 'Reason',
        width: 190,
        editable: true,
      },
      {
        field: 'addedby',
        headerName: 'Added By',
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
                            options={stockAdjustmentList}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField  {...params} label="Search Stock ADjustments" variant="outlined" />}
                            />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12} md={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={stockAdjustmentList}
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

export default StockAdjustmentTable;

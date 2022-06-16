import React,{useState,useEffect} from "react";
import { Card, Grid } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
import { getAccessToken } from "../../../../HTTP/token";
import getUrl from "../../../../HTTP/url";
const GeneralItemStockAdjustmentTable = () => {
    const [stockAdjustmentList,setStockAdjustmentList] = useState([]);
    const getStockAdjustmentList = async()=>{
      const response = await axios.get(`${getUrl()}/general-item/stock/adjustment`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setStockAdjustmentList(data);
      }
    }
    useEffect(()=>{
      getStockAdjustmentList();
    },[])
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'date',
        headerName: 'Date',
        width: 190,
        editable: true,
      },
      {
        field: 'rawmaterial',
        headerName: 'Raw Material',
        width: 220,
        editable: true,
      },
      {
        field: 'quantity',
        headerName: 'Quantity',
        width: 190,
        editable: true,
      },
      {
        field: 'unit',
        headerName: 'Unit',
        width: 190,
        editable: true,
      },
      {
        field: 'reason',
        headerName: 'Reason',
        width: 220,
        editable: true,
      },
    ];
  const onSelect = (event)=>{
    const {data} = event;
    const {id} = data;
    setSelectedId(id);
  }
  // eslint-disable-next-line no-unused-vars
  const [selectedId,setSelectedId] = useState([]);
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
                <h2>General Item Stock Adjustment</h2>
            </Grid>
            {stockAdjustmentList.length>0 && 
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
            </Grid>}
        </Grid>
        </Card>
  );
};

export default GeneralItemStockAdjustmentTable;

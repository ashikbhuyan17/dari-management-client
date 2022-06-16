import React,{useState,useEffect} from "react";
import { Card, Grid } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
import { getAccessToken } from "../../../../HTTP/token";
import getUrl from "../../../../HTTP/url";
const GeneralItemStockIncreaseReportTable = () => {
    const [stockIncreaseReportList,setStockIncreaseReportList] = useState([]);
    const getStockIncreaseReportList = async()=>{
      const response = await axios.get(`${getUrl()}/general-item/add/stock/report`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setStockIncreaseReportList(data);
      }
    }
    useEffect(()=>{
      getStockIncreaseReportList();
    },[])
    const columns = [
      {
        field: 'addingdate',
        headerName: 'Date',
        width: 190,
        editable: true,
      },
      {
        field: 'generalitem',
        headerName: 'General Item',
        width: 220,
        editable: true,
      },
      {
        field: 'previousStock',
        headerName: 'Quantity Before Add',
        width: 250,
        editable: true,
      },
      {
        field: 'addedquantity',
        headerName: 'Added Quantity',
        width: 220,
        editable: true,
      },
      {
        field: 'currentStock',
        headerName: 'Quantity After Add',
        width: 250,
        editable: true,
      },
      {
        field: 'unit',
        headerName: 'Unit',
        width: 190,
        editable: true,
      }
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
                <h2>General Item Add Stock Report</h2>
            </Grid>
            {stockIncreaseReportList.length>0 && 
                <Grid item lg={12} md={12}>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={stockIncreaseReportList}
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

export default GeneralItemStockIncreaseReportTable;

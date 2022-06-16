import React,{useState} from "react";
import { Grid, Card } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { Autocomplete,TextField } from "@material-ui/core";
import { productList } from "./ProductPurchaseReportFilter";
export const productPurchaseList = []
const ProductPurchaseReportTable = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'product',
        headerName: 'Product',
        width: 190,
        editable: true,
      },
      {
        field: 'sku',
        headerName: 'SKU',
        width: 220,
        editable: true,
      },
      {
        field: 'supplier',
        headerName: 'Supplier',
        width: 190,
        editable: true,
      },
      {
        field: 'referenceno',
        headerName: 'Reference No',
        width: 190,
        editable: true,
      },
      {
        field: 'date',
        headerName: 'Date',
        width: 190,
        editable: true,
      },
      {
        field: 'quantity',
        headerName: 'Quantity',
        width: 190,
        editable: true,
      },
      {
        field: 'totalunitadjusted',
        headerName: 'Total Unit Adjusted',
        width: 190,
        editable: true,
      },
      {
        field: 'unitpurchaseprice',
        headerName: 'Unit Price Purchase',
        width: 190,
        editable: true,
      },
      {
        field: 'subtotal',
        headerName: 'Sub Total',
        width: 190,
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
            <Grid container>
                <Grid item lg={12} md={12}>
                    <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={productList}
                        getOptionLabel={(option) => option.product}
                        renderInput={(params) => <TextField  {...params} label="Search Product" variant="outlined" />}
                        />
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={12} md={12}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={productPurchaseList}
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

export default ProductPurchaseReportTable;

import React,{useState} from "react";
import { DataGrid } from '@material-ui/data-grid';
import { Grid,Autocomplete,TextField } from "@material-ui/core";
export const productList = [
  {id:1,sku: "AS0001",productname:"Men's Reverse Fleece Crew",businesslocation: "",unitprice: 143.00,
    currentstock:  "0.00 Pc(s)",currentstockvaluepurchase: "0.00",currentstockvaluesale: "0.00",
    potentialprofit: "0.00",totalunitsold:"0.00",totalunittransfered: "0.00 Pc(s)",totalunitadjusted:"0.00 Pc(s)"}
  
]
const ProductStockTable = () => {
//   const navigate = useNavigate();
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'productname',
        headerName: 'Product Name',
        width: 190,
        editable: true,
      },
      {
        field: 'businesslocation',
        headerName: 'Business Location',
        width: 220,
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
        field: 'currentstockvaluepurchase',
        headerName: 'Current Stock Value (By Purchase Price)',
        width: 190,
        editable: true,
      },
      {
        field: 'currentstockvaluesale',
        headerName: 'Current Stock Value (By Sale Price)',
        width: 190,
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
        width: 190,
        editable: true,
      },
      {
        field: 'totalunittransfered',
        headerName: 'Total Unit Transfered',
        width: 190,
        editable: true,
      },
      {
        field: 'totalunitadjusted',
        headerName: 'Total Unit Adjusted',
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
            alignItems="flex-start">
                <Grid item lg={6} md={6}>
                  <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={productList}
                        getOptionLabel={(option) => option.productname}
                        renderInput={(params) => <TextField  {...params} label="Search Product" variant="outlined" />}
                        />
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={12} md={12}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={productList}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    onRowSelected={onSelect}
                />
            </div>
        </Grid>
      </Grid>
  );
};

export default ProductStockTable;

import React,{useState} from "react";
import { Grid,Button,MenuItem,Menu, Card } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { Autocomplete,TextField } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useNavigate } from "react-router-dom";
export const stockAdjustmentList = []
const StockAdjustmentTable = () => {
  const navigate = useNavigate();
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
        field: 'location',
        headerName: 'Location',
        width: 190,
        editable: true,
      },
      {
        field: 'adjustmenttype',
        headerName: 'Adjustment Type',
        width: 190,
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
        width: 190,
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [viewProductModalOpen,setViewProductModalOpen] = useState(false);
  const closeViewProductModal = ()=>{
    setViewProductModalOpen(false);
  }
  const openViewProductModalOpen = ()=>{
    setViewProductModalOpen(true);
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
            <h2>All Stock Adjustments</h2>
            <Grid container >
                <Grid  item lg={3} md={3}>
                    <Button
                    aria-controls="simple-menu" 
                    aria-haspopup="true"
                    onClick={handleMenu}
                    
                    color="success" 
                    variant="contained"
                    startIcon={<EditIcon/>}
                    >
                        Actions
                    </Button>
                        <Menu
                            // style={{ width: "550px" }}
                            id="dd-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                            transformOrigin={{ horizontal: "left", vertical: "top" }}
                            >
                            <MenuItem onClick={openViewProductModalOpen}>
                                View
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Print</MenuItem>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                </Grid>
                {/* View product modal */}
                <Modal
                    open={viewProductModalOpen}
                    onClose={closeViewProductModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    {/* <ViewProductModal 
                        closeModal={closeViewProductModal}/> */}
                </Modal>
                <Grid item lg={3} md={3}>
                    <Button
                        onClick={()=>{return navigate('draft/create')}}
                        aria-controls="simple-menu" 
                        aria-haspopup="true"
                        color="primary" 
                        variant="contained"
                        startIcon={<AddBoxIcon/>}
                        >
                            Add
                        </Button>
                </Grid>
                <Grid item lg={6} md={6}/>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12}>
                    <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={stockAdjustmentList}
                        getOptionLabel={(option) => option.referenceno}
                        renderInput={(params) => <TextField  {...params} label="Search Stock Transfer" variant="outlined" />}
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

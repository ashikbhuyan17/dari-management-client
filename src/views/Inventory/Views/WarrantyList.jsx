import React,{useState} from "react";
import { Grid,Button,MenuItem,Menu } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { Autocomplete,TextField } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Modal } from "@material-ui/core";
import AddWarrantyModal from "../Components/Sub-Components/AddWarrantyModal";
export const productWarrantyList = [
  
]
const ProductWarrantyList = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'name',
        headerName: 'Name',
        width: 180,
        editable: true,
      },
      {
        field: 'description',
        headerName: 'Warranty Description',
        width: 190,
        editable: true,
      },
      {
        field: 'duration',
        headerName: 'Warranty Duration',
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
  const [addWarrantyOpenModal,setAddWarrantyOpenModal] = useState(false);
  const openAddWarrantyModal = ()=>{
    setAddWarrantyOpenModal(true);
  }
  const closeAddWarrantyModal = ()=>{
    setAddWarrantyOpenModal(false);
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
            alignItems="center">
                <Grid item lg={6} md={6}>
                    <h2>Product Warranties</h2>
                </Grid>
            </Grid>
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
                            <MenuItem onClick={openAddWarrantyModal}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>

                </Grid>
                <Grid item lg={3} md={3}>
                  <Button
                      onClick={openAddWarrantyModal}
                      aria-controls="simple-menu" 
                      aria-haspopup="true"
                      color="success" 
                      variant="contained"
                      startIcon={<AddBoxIcon/>}
                      >
                          Add
                      </Button>
                  
                  {/* add product variation modal */}
                  <Modal
                        open={addWarrantyOpenModal}
                        onClose={closeAddWarrantyModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <AddWarrantyModal 
                          closeModal={closeAddWarrantyModal}/>
                    </Modal>
                </Grid>
                <Grid item lg={6} md={6}>
                  <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={productWarrantyList}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField  {...params} label="Search Warranty" variant="outlined" />}
                        />
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={12} md={12}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={productWarrantyList}
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

export default ProductWarrantyList;

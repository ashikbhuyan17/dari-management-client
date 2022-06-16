import React,{useState} from "react";
import { Grid,Button,MenuItem,Menu, Card } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { Autocomplete,TextField } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddPaymentAccountTypeModal from "./PaymentAccountTypeModal";
export const PaymentAccountTypeTypeList = [];
const PaymentAccountTypeTable = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'name',
        headerName: 'Name',
        width: 190,
        editable: true,
      }
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
  const [addPaymentAccountTypesModalOpen,setaddPaymentAccountTypesModalOpen] = useState(false);
  const closeAddPaymentAccountTypesModal = ()=>{
    setaddPaymentAccountTypesModalOpen(false);
  }
  const openAddPaymentAccountTypesModal = ()=>{
    setaddPaymentAccountTypesModalOpen(true);
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
            <h4>All Your Payment Account Types</h4>
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
                            <MenuItem onClick={openAddPaymentAccountTypesModal}>
                                Deactivate PaymentAccountTypes
                            </MenuItem>
                        </Menu>
                </Grid>
                
                <Grid item lg={3} md={3}>
                    <Button
                        onClick={openAddPaymentAccountTypesModal}
                        aria-controls="simple-menu" 
                        aria-haspopup="true"
                        color="primary" 
                        variant="contained"
                        startIcon={<AddBoxIcon/>}
                        >
                            Add
                        </Button>
                    {/* Add PaymentAccountTypes modal */}
                    <Modal
                        open={addPaymentAccountTypesModalOpen}
                        onClose={closeAddPaymentAccountTypesModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <AddPaymentAccountTypeModal 
                            closeModal={closeAddPaymentAccountTypesModal}/>
                    </Modal>
                </Grid>
                <Grid item lg={6} md={6}/>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12}>
                    <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={PaymentAccountTypeTypeList}
                        getOptionLabel={(option) => option.productname}
                        renderInput={(params) => <TextField  {...params} label="Search Payment Account Type" variant="outlined" />}
                        />
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={12} md={12}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={PaymentAccountTypeTypeList}
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

export default PaymentAccountTypeTable;

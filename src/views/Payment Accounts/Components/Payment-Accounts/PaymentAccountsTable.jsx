import React,{useState} from "react";
import { Grid,Button,MenuItem,Menu, Card } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { Autocomplete,TextField } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddPaymentAccountsModal from "./AddPaymentAccountsModal";
export const paymentAccountList = [];
const PaymentAccountsTable = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'name',
        headerName: 'Name',
        width: 190,
        editable: true,
      },
      {
        field: 'accounttype',
        headerName: 'Account Type',
        width: 220,
        editable: true,
      },
      {
        field: 'accountsubtype',
        headerName: 'Account Sub Type',
        width: 220,
        editable: true,
      },
      {
        field: 'accountnumber',
        headerName: 'Account Number',
        width: 190,
        editable: true,
      },
      {
        field: 'note',
        headerName: 'Note',
        width: 190,
        editable: true,
      },
      {
        field: 'balance',
        headerName: 'Balance',
        width: 190,
        editable: true,
      },
      {
        field: 'accountdetails',
        headerName: 'Account Details',
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
  const [addPaymentAccountsModalOpen,setaddPaymentAccountsModalOpen] = useState(false);
  const closeAddPaymentAccountsModal = ()=>{
    setaddPaymentAccountsModalOpen(false);
  }
  const openAddPaymentAccountsModal = ()=>{
    setaddPaymentAccountsModalOpen(true);
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
            <h4>All Your Payment Accountss</h4>
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
                            <MenuItem onClick={openAddPaymentAccountsModal}>
                                Deactivate PaymentAccounts
                            </MenuItem>
                        </Menu>
                </Grid>
                
                <Grid item lg={3} md={3}>
                    <Button
                        onClick={openAddPaymentAccountsModal}
                        aria-controls="simple-menu" 
                        aria-haspopup="true"
                        color="primary" 
                        variant="contained"
                        startIcon={<AddBoxIcon/>}
                        >
                            Add
                        </Button>
                    {/* Add PaymentAccounts modal */}
                    <Modal
                        open={addPaymentAccountsModalOpen}
                        onClose={closeAddPaymentAccountsModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <AddPaymentAccountsModal 
                            closeModal={closeAddPaymentAccountsModal}/>
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
                        options={paymentAccountList}
                        getOptionLabel={(option) => option.productname}
                        renderInput={(params) => <TextField  {...params} label="Search Payment Account" variant="outlined" />}
                        />
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={12} md={12}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={paymentAccountList}
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

export default PaymentAccountsTable;

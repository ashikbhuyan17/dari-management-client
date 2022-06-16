import React,{useState} from "react";
import { Grid,Button,MenuItem,Menu, Card } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { Autocomplete,TextField } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import AddPaymentLinkModal from "./AddPaymentLinkModal";
export const paymentAccountList = [];
const PaymentAccountReportTable = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'paymentref',
        headerName: 'Payment Ref No.',
        width: 190,
        editable: true,
      },
      {
        field: 'invoiceno',
        headerName: 'Invoice No',
        width: 220,
        editable: true,
      },
      {
        field: 'paymenttype',
        headerName: 'Payment Type',
        width: 220,
        editable: true,
      },
      {
        field: 'account',
        headerName: 'Account',
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
  const [addPaymentAccountLinkModalOpen,setaddPaymentAccountLinkModalOpen] = useState(false);
  const closeAddPaymentAccountLinkModal = ()=>{
    setaddPaymentAccountLinkModalOpen(false);
  }
  const openAddPaymentAccountLinkModal = ()=>{
    setaddPaymentAccountLinkModalOpen(true);
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
                            <MenuItem onClick={openAddPaymentAccountLinkModal}>
                                Link Account
                            </MenuItem>
                        </Menu>
                        {/* Add Link Account modal */}
                    <Modal
                        open={addPaymentAccountLinkModalOpen}
                        onClose={closeAddPaymentAccountLinkModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <AddPaymentLinkModal 
                            closeModal={closeAddPaymentAccountLinkModal}/>
                    </Modal>
                </Grid>
                
                <Grid item lg={3} md={3}/>
                <Grid item lg={6} md={6}/>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12}>
                    <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={paymentAccountList}
                        getOptionLabel={(option) => option.referenceno}
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

export default PaymentAccountReportTable;

import React,{useEffect, useState} from "react";
import { Grid,Button,MenuItem,Menu, Card } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Modal } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import ViewPurchaseModal from "../Components/ViewPurchaseModal";
import EditPurchaseModal from "../Components/EditPurchaseModal";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const PurchaseList = () => {
    const navigate = useNavigate();
    const [purchaseList,setPurchaseList] = useState([]);
    const getPurchaseList = async()=>{
        const response = await axios.get(`${getUrl()}/purchase/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
          setPurchaseList(response.data);
        }
    }
    const [purchaseCategoryList,setPurchaseCategoryList] = useState([]);
    const getPurchaseCategoryList = async()=>{
        const response = await axios.get(`${getUrl()}/purchase-category/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
          setPurchaseCategoryList(response.data);
        }
    }
    useEffect(()=>{
      getPurchaseList();
      getPurchaseCategoryList();
    },[])
    const columns = [
      {
        field: 'date',
        headerName: 'Date',
        width: 180,
        editable: true,
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 180,
        editable: true,
      },
      {
        field: 'supplier',
        headerName: 'Supplier',
        width: 220,
        editable: true,
      },
      {
        field: 'supplierphone',
        headerName: 'Supplier Phone',
        width: 220,
        editable: true,
      },
      {
        field: 'totalamount',
        headerName: 'Total Amount',
        width: 220,
        editable: true,
      },
      {
        field: 'taxpercentage',
        headerName: 'Tax Percentage',
        width: 190,
        editable: true,
      },
      {
        field: 'taxamount',
        headerName: 'Tax Amount',
        width: 220,
        editable: true,
      },
      {
        field: 'dueamount',
        headerName: 'Due Amount',
        width: 220,
        editable: true,
      },
      {
        field: 'note',
        headerName: 'Additional Note',
        width: 220,
        editable: true,
      },
    ];
  const onSelect = (event)=>{
    const {data} = event;
    const {id} = data;
    setSelectedId(id);
  }
  const [selectedId,setSelectedId] = useState([]);
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [viewPurchaseModal,setViewPurchaseModal] = useState(false);
  const [purchase,setPurchase] = useState({date:"",supplier:"",supplierphone:"",totalamount:0,taxperentage:0,taxamount:0,due:0,note:""})
  const openViewPurchaseModal = ()=>{
    handleClose();
    const purchaseData = purchaseList.filter((purchase)=>{return selectedId === purchase.id});
    setPurchase({date:purchaseData[0].date,supplier:purchaseData[0].supplier,supplierphone:purchaseData[0].supplierphone,
      totalamount:purchaseData[0].totalamount,taxperentage:purchaseData[0].taxpercentage,taxamount:purchaseData[0].taxamount,
      due:purchaseData[0].dueamount,note:purchaseData[0].note});
    setViewPurchaseModal(true);
  }
  const closeViewPurchaseModal = ()=>{
    setViewPurchaseModal(false);
  }
  const [editPurchaseModal,setEditPurchaseModal] = useState(false);
  const openEditPurchaseModal = ()=>{
    handleClose();
    const purchaseData = purchaseList.filter((purchase)=>{return selectedId === purchase.id});
    setEditDate(purchaseData[0].date);
    setEditSupplier(purchaseData[0].supplier);
    setEditSupplierPhone(purchaseData[0].supplierphone);
    setEditTotalAmount(purchaseData[0].totalamount);
    setEditTaxPercentage(purchaseData[0].taxpercentage);
    setEditTaxAmount(purchaseData[0].taxamount);
    setEditDueAmount(purchaseData[0].dueamount);
    setEditNote(purchaseData[0].note);
    setEditCategory(purchaseData[0].category);
    setEditPurchaseModal(true);
  }
  const closeEditPurchaseModal = ()=>{
    setEditPurchaseModal(false);
  }
  const [editDate,setEditDate] = useState("");
  const [editSupplier,setEditSupplier] = useState("");
  const [editSupplierPhone,setEditSupplierPhone] = useState("");
  const [editTotalAmount,setEditTotalAmount] = useState(0);
  const [editTaxPercentage,setEditTaxPercentage] = useState(0);
  const [editTaxAmount,setEditTaxAmount] = useState(0);
  const [editDueAmount,setEditDueAmount] = useState(0);
  const [editNote,setEditNote] = useState("");
  const [editCategory,setEditCategory] = useState("");
  const [editCategoryId,setEditCategoryId] = useState(null);
  const changeCategory = async(value)=>{
    const purchaseCategory = purchaseCategoryList.filter((category)=>{return value === category.name});
    setEditCategory(value);
    setEditCategoryId(purchaseCategory[0].id);
  }
  const editData = {
    editDate,setEditDate,editSupplier,setEditSupplier,editSupplierPhone,
    setEditSupplierPhone,editTotalAmount,setEditTotalAmount,editTaxPercentage,
    setEditTaxPercentage,editTaxAmount,setEditTaxAmount,editDueAmount,
    setEditDueAmount,editNote,setEditNote,editCategory,purchaseCategoryList,changeCategory
  }
  const resetData = ()=>{
    setEditDate("");
    setEditSupplier("");
    setEditSupplierPhone("");
    setEditTotalAmount(0);
    setEditDueAmount(0);
    setEditTaxPercentage(0);
    setEditTaxAmount(0);
    setEditCategory("");
    setEditCategoryId(null);
    setEditNote("");
}
  const update = async()=>{
    const data = {
        purchasedate: editDate,
        note: editNote,
        totalamount: Number(editTotalAmount),
        dueamount: Number(editDueAmount),
        supplier: editSupplier,
        supplierphone: editSupplierPhone,
        taxpercentage: Number(editTaxPercentage),
        taxamount: Number(editTaxAmount),
        category:Number(editCategoryId)
    }
    try{
        const response = await axios.patch(`${getUrl()}/purchase/${selectedId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        
        if(response.status === 200){
            resetData();
            closeEditPurchaseModal();
            getPurchaseList();
            MySwal.fire({
                icon: 'success',
                title: 'Great...',
                text: `${response.data}`,
            });
        }
    }
    catch(error){
      closeEditPurchaseModal();
        MySwal.fire({
            icon: 'error',
            text: `${error.message}`,
        });
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
            alignItems="center">
                <Grid item lg={6} md={6}>
                    <h2>Purchase List</h2>
                </Grid>
            </Grid>
            <Card>
            <Grid 
            container
            direction="row"
            spacing="2">
                <Grid  
                style={{ display:"flex",alignItems: "center",justifyContent:"center" }}
                item lg={3} md={3}>
                    <Button
                      fullWidth
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
                            <MenuItem onClick={openViewPurchaseModal}>View</MenuItem>
                            <MenuItem onClick={openEditPurchaseModal}>Edit</MenuItem>

                            {/* View Purchase modal */}
                            <Modal
                                  open={viewPurchaseModal}
                                  onClose={closeViewPurchaseModal}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                  >
                                  <ViewPurchaseModal 
                                    data={purchase}
                                    closeModal={closeViewPurchaseModal}/>
                              </Modal>
                            {/* Edit Purchase modal */}
                            <Modal
                                  open={editPurchaseModal}
                                  onClose={closeEditPurchaseModal}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                  >
                                  <EditPurchaseModal 
                                    update={update}
                                    data={editData}
                                    closeModal={closeEditPurchaseModal}/>
                              </Modal>
                        </Menu>

                </Grid>
                <Grid 
                style={{ display:"flex",alignItems: "center",justifyContent:"center" }}
                item lg={3} md={3}>
                  <Button
                    fullWidth
                      onClick={()=>{return navigate('/purchase/create')}}
                      aria-controls="simple-menu" 
                      aria-haspopup="true"
                      color="success" 
                      variant="contained"
                      startIcon={<AddBoxIcon/>}
                      >
                          Add
                      </Button>
                </Grid>
                <Grid item lg={6} md={6}>
                  {/* <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={purchaseList}
                        getOptionLabel={(option) => option.referenceno}
                        renderInput={(params) => <TextField  {...params} label="Search Purchase" variant="outlined" />}
                        /> */}
                </Grid>
            </Grid>
            <br />
              {purchaseList.length>0 && 
              <Grid container>
                <Grid item lg={12} md={12}>
                  <div style={{ height: 400, width: '100%' }}>
                      <DataGrid
                          rows={purchaseList}
                          columns={columns}
                          pageSize={5}
                          checkboxSelection
                          onRowSelected={onSelect}
                      />
                  </div>
              </Grid>
            </Grid>}
            </Card>
        </Grid>
      </Grid>
  );
};

export default PurchaseList;

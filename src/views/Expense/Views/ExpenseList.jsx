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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EditExpenseModal from "../Components/EditExpenseModal";
import ViewExpenseModal from "../Components/ViewExpenseModal";
const MySwal = withReactContent(Swal)
const ExpenseList = () => {
    const navigate = useNavigate();
    const [expenseList,setExpenseList] = useState([]);
    const getExpenseList = async()=>{
        const response = await axios.get(`${getUrl()}/expense/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
          setExpenseList(response.data);
        }
    }
    const [expenseCategoryList,setExpenseCategoryList] = useState([]);
    const getExpenseCategoryList = async()=>{
        const response = await axios.get(`${getUrl()}/expense-category/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
          setExpenseCategoryList(response.data);
        }
    }
    useEffect(()=>{
      getExpenseList();
      getExpenseCategoryList();
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
        field: 'totalamount',
        headerName: 'Total Amount',
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
  const [viewExpenseModal,setViewExpenseModal] = useState(false);
  const [expense,setExpense] = useState({date:"",totalamount:0,due:0,note:""})
  const openViewExpenseModal = ()=>{
    handleClose();
    const expenseData = expenseList.filter((expense)=>{return selectedId === expense.id});
    setExpense({date:expenseData[0].date,totalamount:expenseData[0].totalamount,
      due:expenseData[0].dueamount,note:expenseData[0].note});
    setViewExpenseModal(true);
  }
  const closeViewExpenseModal = ()=>{
    setViewExpenseModal(false);
  }
  const [editExpenseModal,setEditExpenseModal] = useState(false);
  const openEditExpenseModal = ()=>{
    handleClose();
    const expenseData = expenseList.filter((expense)=>{return selectedId === expense.id});
    setEditDate(expenseData[0].date);
    setEditTotalAmount(expenseData[0].totalamount);
    setEditDueAmount(expenseData[0].dueamount);
    setEditNote(expenseData[0].note);
    setEditCategory(expenseData[0].category);
    setEditExpenseModal(true);
  }
  const closeEditExpenseModal = ()=>{
    setEditExpenseModal(false);
  }
  const [editDate,setEditDate] = useState("");
  const [editTotalAmount,setEditTotalAmount] = useState(0);
  const [editDueAmount,setEditDueAmount] = useState(0);
  const [editNote,setEditNote] = useState("");
  const [editCategory,setEditCategory] = useState("");
  const [editCategoryId,setEditCategoryId] = useState(null);
  const changeCategory = async(value)=>{
    const expenseCategory = expenseCategoryList.filter((category)=>{return value === category.name});
    setEditCategory(value);
    setEditCategoryId(expenseCategory[0].id);
  }
  const editData = {
    editDate,setEditDate,editTotalAmount,setEditTotalAmount,editDueAmount,
    setEditDueAmount,editNote,setEditNote,editCategory,expenseCategoryList,changeCategory
  }
  const resetData = ()=>{
    setEditDate("");
    setEditTotalAmount(0);
    setEditDueAmount(0);
    setEditCategory("");
    setEditCategoryId(null);
    setEditNote("");
}
  const update = async()=>{
    const data = {
        expensedate: editDate,
        note: editNote,
        totalamount: Number(editTotalAmount),
        dueamount: Number(editDueAmount),
        category:Number(editCategoryId)
    }
    try{
        const response = await axios.patch(`${getUrl()}/expense/${selectedId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        
        if(response.status === 200){
            resetData();
            closeEditExpenseModal();
            getExpenseList();
            MySwal.fire({
                icon: 'success',
                title: 'Great...',
                text: `${response.data}`,
            });
        }
    }
    catch(error){
      closeEditExpenseModal();
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
                    <h2>Expense List</h2>
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
                            <MenuItem onClick={openViewExpenseModal}>View</MenuItem>
                            <MenuItem onClick={openEditExpenseModal}>Edit</MenuItem>

                            {/* View Expense modal */}
                            <Modal
                                  open={viewExpenseModal}
                                  onClose={closeViewExpenseModal}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                  >
                                  <ViewExpenseModal 
                                    data={expense}
                                    closeModal={closeViewExpenseModal}/>
                              </Modal>
                            {/* Edit Expense modal */}
                            <Modal
                                  open={editExpenseModal}
                                  onClose={closeEditExpenseModal}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                  >
                                  <EditExpenseModal 
                                    update={update}
                                    data={editData}
                                    closeModal={closeEditExpenseModal}/>
                              </Modal>
                        </Menu>

                </Grid>
                <Grid 
                style={{ display:"flex",alignItems: "center",justifyContent:"center" }}
                item lg={3} md={3}>
                  <Button
                    fullWidth
                      onClick={()=>{return navigate('/expense/create')}}
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
                        options={expenseList}
                        getOptionLabel={(option) => option.referenceno}
                        renderInput={(params) => <TextField  {...params} label="Search Expense" variant="outlined" />}
                        /> */}
                </Grid>
            </Grid>
            <br />
              {expenseList.length>0 && 
              <Grid container>
                <Grid item lg={12} md={12}>
                  <div style={{ height: 400, width: '100%' }}>
                      <DataGrid
                          rows={expenseList}
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

export default ExpenseList;

import React,{useEffect, useState} from "react";
import { Grid,Button,MenuItem,Menu } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { Autocomplete,TextField } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import getUrl from "../../../../HTTP/url";
import { getAccessToken } from "../../../../HTTP/token";
import AddRecipeItemModal from "./Recipe/AddRecipeItemModal";
import EditRecipeItemModal from "./Recipe/EditRecipeItemModal";
const MySwal = withReactContent(Swal)
const RecipeItemList = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'product',
        headerName: 'Product',
        width: 180,
        editable: true,
      },
      {
        field: 'quantity',
        headerName: 'Quantity',
        width: 180,
        editable: true,
      },
      {
        field: 'rawmaterial',
        headerName: 'Raw Material',
        width: 180,
        editable: true,
      },
      {
        field: 'unit',
        headerName: 'Unit',
        width: 180,
        editable: true,
      },
    ];
  
  const [recipeList,setRecipeList] = useState([]);
  const [rawMaterialList,setMaterialList] = useState([]);
  const [recipeItemList,setRecipeItemList] = useState([]);
  const getRecipeItemList = async()=>{
    const response = await axios.get(`${getUrl()}/recipe/recipeitem/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status===200){
      const {data} = response;
      setRecipeItemList(data);
    }
  }
  const getRecipeList = async()=>{
    const response = await axios.get(`${getUrl()}/recipe/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status===200){
        const {data} = response;
      setRecipeList(data);
    }
  }
  const getRawMaterialList = async()=>{
    const response = await axios.get(`${getUrl()}/raw-material/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status===200){
      const {data} = response;
      setMaterialList(data);
    }
  }
  useEffect(()=>{
    getRecipeList();
    getRecipeItemList();
    getRawMaterialList();
  },[]);
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

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [editRecipeItemModalOpen,setEditRecipeItemModalOpen] = useState(false);
  const closeEditRecipeItemModal = ()=>{
    setEditRecipeItemModalOpen(false);
  }
  const openEditRecipeItemModalOpen = ()=>{
    setEditRecipeItemModalOpen(true);
  }
  const [addRecipeItemModalOpen,setAddRecipeItemModalOpen] = useState(false);
  const closeAddRecipeItemModal = ()=>{
    setAddRecipeItemModalOpen(false);
  }
  const openAddRecipeItemModal = ()=>{
    setAddRecipeItemModalOpen(true);
  }
  const [recipeItem,setRecipeItem] = useState("");
  const [recipeItemId,setRecipeItemId] = useState(null);
  const changeRecipeItem = (value)=>{
    const recipeItemID = recipeList.filter((recipe)=>{return value === recipe.product});
    setRecipeItem(value);
    setRecipeItemId(recipeItemID[0].id);
  }
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const [recipeItemInputList, setRecipeItemInputList] = useState([{ rawmaterial: 0,quantity: 0 }]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    let data;
    if(name === "rawmaterial"){
      const rawMaterialID = rawMaterialList.filter((rawmaterial)=>{return value === rawmaterial.name});
      data = rawMaterialID[0].id;
    }else{
      data = value
    }
    const list = [...recipeItemInputList];
    list[index][name] = data;
    setRecipeItemInputList(list);
  };
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...recipeItemInputList];
    list.splice(index, 1);
    setRecipeItemInputList(list);
  };
  
  // handle click event of the Add button
  const addNewInput = () => {
    setRecipeItemInputList([...recipeItemInputList, { rawmaterial: 0,quantity: 0 }]);
  };
  const addRecipeItemData = async()=>{
    if(recipeItemId === null || recipeItemInputList.length === 0){
      setError(true);
      setErrorMessage('Please Fill all the fields');
    }
    else{
      setError(false);
      const data = {
        recipe: Number(recipeItemId),
        items: recipeItemInputList
      }
      const response = await axios.post(`${getUrl()}/recipe/item`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 201){
        closeAddRecipeItemModal();
        setRecipeItem("");
        setRecipeItemId(null);
        setRecipeItemInputList([{ rawmaterial: 0,quantity: 0 }]);
        getRecipeItemList();
        MySwal.fire({
          icon: 'success',
          title: 'Great...',
          text: `${response.data}`,
        });
      }
    }
  }
  const [recipeItemEdit,setRecipeItemEdit] = useState("");
  const [recipeItemEditId,setRecipeItemEditId] = useState(null);
  const changeEditRawMaterial = (value)=>{
    const rawMaterialID = rawMaterialList.filter((rawmaterial)=>{return value === rawmaterial.name});
    setEditRawMaterialName(value);
    setEditRawMaterialId(rawMaterialID[0].id);
  }
  const [editRawMaterialName,setEditRawMaterialName] = useState("");
  const [editRawMaterialId,setEditRawMaterialId] = useState(null);
  const [editQuantity,setEditQuantity] = useState(null);
  const changeEditRecipeItem = (value)=>{
    const recipeItem = recipeList.filter((item)=>{return value === item.product});
    setRecipeItemEdit(value);
    setRecipeItemEditId(recipeItem[0].id);
  }
  const getRecipeItem = async()=>{
    if(!selectedId){
      handleMenuClose();
      MySwal.fire({
        icon: 'error',
        title: 'Sorry...',
        text: `Please Select An Item First!`,
      });
    }
    else{
      handleMenuClose();
      const response = await axios.get(`${getUrl()}/recipe/item/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 200){
        const {data} = response;
        console.log(data);
        setRecipeItemEditId(data[0].id);
        setEditQuantity(data[0].quantity);
        changeEditRecipeItem(data[0].product);
        openEditRecipeItemModalOpen();
      }
    }
  }
  const updateRecipeItem = async()=>{
    handleMenuClose();
    const data = {
      recipe: Number(recipeItemEditId),
      rawmaterial: Number(editRawMaterialId),
      quantity: Number(editQuantity)
    }
    const response = await axios.patch(`${getUrl()}/recipe/recipeitem/${selectedId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status === 200){
      closeEditRecipeItemModal();
      MySwal.fire({
        icon: 'success',
        title: 'Great...',
        text: `${response.data}`,
      });
      getRecipeItemList();
    }
  }
  const removeRecipeItem = async()=>{
    handleMenuClose();
    MySwal.fire({
      title: 'Do you want to remove?',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      cancelButtonText: `Keep`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(`${getUrl()}/recipe/item/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
          MySwal.fire({
            icon: 'success',
            title: 'Great...',
            text: `${response.data}`,
          });
          getRecipeItemList();
        }
      } else if (result.isDenied) {}
    })
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
            spacing="2">
                <Grid  item lg={3} md={3}>
                    <Button
                    aria-controls="simple-menu" 
                    aria-haspopup="true"
                    onClick={handleMenu}
                    fullWidth
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
                            onClose={handleMenuClose}
                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                            transformOrigin={{ horizontal: "left", vertical: "top" }}
                            >
                            <MenuItem onClick={getRecipeItem}>Edit</MenuItem>
                            <MenuItem onClick={removeRecipeItem}>Delete</MenuItem>
                            {/* Edit recipeItem modal */}
                            <Modal
                                open={editRecipeItemModalOpen}
                                onClose={closeEditRecipeItemModal}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                >
                                <EditRecipeItemModal
                                      save={updateRecipeItem}
                                      rawMaterial={editRawMaterialName}
                                      setRawMaterial={changeEditRawMaterial}
                                      rawMaterialList = {rawMaterialList}
                                      quantity={editQuantity}
                                      setQuantity={setEditQuantity}
                                      recipe={recipeItemEdit}
                                      setRecipe={changeEditRecipeItem}
                                      recipeList = {recipeList}
                                      closeModal={closeEditRecipeItemModal}/>
                            </Modal>
                        </Menu>
                </Grid>
                <Grid  item lg={3} md={3}>
                    <Button
                    aria-controls="simple-menu" 
                    aria-haspopup="true"
                    onClick={openAddRecipeItemModal}
                    fullWidth
                    color="success" 
                    variant="contained"
                    startIcon={<EditIcon/>}
                    >
                        Add
                    </Button>
                    {/* Add recipeItem modal */}
                    <Modal
                        open={addRecipeItemModalOpen}
                        onClose={closeAddRecipeItemModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <AddRecipeItemModal
                            addRawMaterial={addRecipeItemData}
                            inputList={recipeItemInputList}
                            handleInputChange={handleInputChange}
                            handleRemoveClick={handleRemoveClick}
                            addNewInput={addNewInput}
                            isError={error}
                            errorMessage={errorMessage} 
                            recipe={recipeItem}
                            setRecipe={changeRecipeItem}
                            recipeList = {recipeList}
                            rawMaterialList={rawMaterialList}
                            closeModal={closeAddRecipeItemModal}/>
                    </Modal>
                </Grid>
                <Grid item lg={6} md={6}>
                  <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={[]}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField  {...params} label="Search Supplier" variant="outlined" />}
                        />
                </Grid>
            </Grid>
        </Grid>
        {recipeItemList.length>0 && 
          <Grid item lg={12} md={12}>
              <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                      rows={recipeItemList}
                      columns={columns}
                      pageSize={5}
                      checkboxSelection
                      onRowSelected={onSelect}
                  />
              </div>
          </Grid>
        }
      </Grid>
  );
};

export default RecipeItemList;

import React,{ useEffect, useState} from "react";
import { Grid,Button,MenuItem,Menu } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { Autocomplete,TextField } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import CreateRecipeModal from "./Recipe/CreateRecipeModal";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getAccessToken } from "../../../../HTTP/token";
import getUrl from "../../../../HTTP/url";
import EditRecipeModal from "./Recipe/EditRecipeModal";
const MySwal = withReactContent(Swal)
export const recipeList = [];
const RecipeRecipeList = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'product',
        headerName: 'Name',
        width: 180,
        editable: true,
      },
    ];
  
  const [productList,setProductList] = useState([]);
  const [recipeList,setRecipeList] = useState([]);
  const getRecipeList = async()=>{
    const response = await axios.get(`${getUrl()}/recipe/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status===200){
      const {data} = response;
      setRecipeList(data);
    }
  }
  const getProductList = async()=>{
    const response = await axios.get(`${getUrl()}/product/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status===200){
      const {data} = response;
      setProductList(data);
    }
  }
  useEffect(()=>{
    getProductList();
    getRecipeList();
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
  const [editRecipeModalOpen,setEditRecipeModalOpen] = useState(false);
  const closeEditRecipeModal = ()=>{
    setEditRecipeModalOpen(false);
  }
  const openEditRecipeModalOpen = ()=>{
    setEditRecipeModalOpen(true);
  }
  const [addRecipeModalOpen,setAddRecipeModalOpen] = useState(false);
  const closeAddRecipeModal = ()=>{
    setAddRecipeModalOpen(false);
  }
  const openAddRecipeModal = ()=>{
    setAddRecipeModalOpen(true);
  }
  const [recipeProduct,setRecipeProduct] = useState("");
  const [recipeProductId,setRecipeProductId] = useState(null);
  const changeRecipeProduct = (value)=>{
    const recipeProductID = productList.filter((product)=>{return value === product.name});
    setRecipeProduct(value);
    setRecipeProductId(recipeProductID[0].id);
  }
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const addRecipeData = async()=>{
    if(recipeProductId === null){
      setError(true);
      setErrorMessage('Please Fill all the fields');
    }
    else{
      setError(false);
      const data = {
        product: Number(recipeProductId)
      }
      const response = await axios.post(`${getUrl()}/recipe`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 201){
        closeAddRecipeModal();
        setRecipeProduct("");
        setRecipeProductId(null);
        getRecipeList();
        MySwal.fire({
          icon: 'success',
          title: 'Great...',
          text: `${response.data}`,
        });
      }
    }
  }
  const [recipeEditProduct,setRecipeEditProduct] = useState("");
  const [recipeEditProductId,setRecipeEditProductId] = useState("");
  const changeRecipeEditProduct = (value)=>{
    const recipeProductID = productList.filter((product)=>{return value === product.name});
    setRecipeEditProduct(value);
    setRecipeEditProductId(recipeProductID[0].id);
  }
  const getRecipe = async()=>{
    if(!selectedId){}
    else{
      handleMenuClose();
      const response = await axios.get(`${getUrl()}/recipe/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 200){
        const {data} = response;
        changeRecipeEditProduct(data.name);
        openEditRecipeModalOpen();
      }
    }
  }
  const updateRecipe = async()=>{
    const data = {
      product: Number(recipeEditProductId)
    }
    const response = await axios.patch(`${getUrl()}/recipe/${selectedId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status === 200){
      closeEditRecipeModal();
      MySwal.fire({
        icon: 'success',
        title: 'Great...',
        text: `${response.data}`,
      });
      getRecipeList();
    }
  }
  const removeRecipe = async()=>{
    handleMenuClose();
    MySwal.fire({
      title: 'Do you want to remove?',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      cancelButtonText: `Keep`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(`${getUrl()}/recipe/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
          MySwal.fire({
            icon: 'success',
            title: 'Great...',
            text: `${response.data}`,
          });
          getRecipeList();
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
                            <MenuItem onClick={getRecipe}>Edit</MenuItem>
                            <MenuItem onClick={removeRecipe}>Delete</MenuItem>
                            {/* Edit recipe modal */}
                            <Modal
                                open={editRecipeModalOpen}
                                onClose={closeEditRecipeModal}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                >
                                <EditRecipeModal
                                      save={updateRecipe}
                                      product={recipeEditProduct}
                                      setProduct={changeRecipeEditProduct}
                                      productList = {productList}
                                      closeModal={closeEditRecipeModal}/>
                            </Modal>
                        </Menu>
                </Grid>
                <Grid  item lg={3} md={3}>
                    <Button
                    aria-controls="simple-menu" 
                    aria-haspopup="true"
                    onClick={openAddRecipeModal}
                    fullWidth
                    color="success" 
                    variant="contained"
                    startIcon={<EditIcon/>}
                    >
                        Add
                    </Button>
                    {/* Add recipe modal */}
                    <Modal
                        open={addRecipeModalOpen}
                        onClose={closeAddRecipeModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <CreateRecipeModal
                            isError={error}
                            errorMessage={errorMessage} 
                            save={addRecipeData}
                            product={recipeProduct}
                            setProduct={changeRecipeProduct}
                            productList = {productList}
                            closeModal={closeAddRecipeModal}/>
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
        {recipeList.length>0 && 
          <Grid item lg={12} md={12}>
              <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                      rows={recipeList}
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

export default RecipeRecipeList;

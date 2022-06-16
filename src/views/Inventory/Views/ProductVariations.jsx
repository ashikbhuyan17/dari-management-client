import React,{useCallback, useEffect, useState} from "react";
import { Grid,Button,MenuItem,Menu } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddVariationModal from "../Components/AddVariationModal";
import { Modal } from "@material-ui/core";
// import ViewProductModal from "./Sub-Components/ViewProductModal";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import EditVatModal from "../Components/Sub-Components/Edit.Vat.Modal";
const MySwal = withReactContent(Swal)
const ProductVariations = () => {
    const [vatList,setVatList] = useState([]);
    const getProductVatList = async()=>{
      const response = await axios.get(`${getUrl()}/vat/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setVatList(data);
      }
    }
    useEffect(()=>{
      getProductVatList();
    },[])
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'value',
        headerName: 'Vat Percentage',
        width: 180,
        editable: true,
      }
    ];
  const onSelect = (event)=>{
    const {data} = event;
    const {id} = data;
    pushIdToSelectedList(id);
  }
  const [selectedId,setSelectedId] = useState([]);
  const pushIdToSelectedList = (id)=>{
      setSelectedId(id);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [addProductVariationOpenModal,setAddProductVariationOpenModal] = useState(false);
  const openAddProductVariationModal = ()=>{
    setAddProductVariationOpenModal(true);
  }
  const closeAddProductVariationModal = ()=>{
    setAddProductVariationOpenModal(false);
  }
  const [vatPercentage,setVatPercentage] = useState(0);
  const [editVatPercentage,setEditVatPercentage] = useState(0);
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const changeVatPercentageValue = (event)=>{
    setVatPercentage(event.target.value);
  }
  const [editVatOpenModal,setEditVatOpenModal] = useState(false);
  const openEditVatModal = useCallback(()=>{
    setEditVatOpenModal(true);
  },[])
  const closeEditVatModal = useCallback(()=>{
    setEditVatOpenModal(false);
  },[])
  const postVat = async ()=>{
    if(vatPercentage > 100 || vatPercentage < 0 || vatPercentage === 0){
      setError(true);
      setErrorMessage('You can only set vat from 1 to 100%');
    }
    else{
      setError(false);
      const data = {
        value: Number(vatPercentage)
      }
      const response = await axios.post(`${getUrl()}/vat`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 201){
        closeAddProductVariationModal();
        MySwal.fire({
          icon: 'success',
          title: 'Great...',
          text: `${response.data}`,
        });
        setVatPercentage(0);
        getProductVatList();
      }
    }
  }
  const getVat = async()=>{
    if(!selectedId){}
    else{
      handleMenuClose();
      const response = await axios.get(`${getUrl()}/vat/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 200){
        const {data} = response;
        setEditVatPercentage(Number(data.value));
        openEditVatModal();
      }
    }
  }
  const updateVat = useCallback(async()=>{
    const data = {
      value: Number(editVatPercentage)
    }
    const response = await axios.patch(`${getUrl()}/vat/${selectedId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status === 200){
      closeEditVatModal();
      MySwal.fire({
        icon: 'success',
        title: 'Great...',
        text: `${response.data}`,
      });
      getProductVatList();
    }
  },[selectedId,editVatPercentage,closeEditVatModal])
  const removeVat = async()=>{
    handleMenuClose();
    MySwal.fire({
      title: 'Do you want to remove?',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      cancelButtonText: `Keep`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(`${getUrl()}/vat/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});

        if(response.status === 200){
          MySwal.fire({
            icon: 'success',
            title: 'Great...',
            text: `${response.data}`,
          });
          getProductVatList();
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
                            <MenuItem onClick={getVat}>Edit</MenuItem>
                            <MenuItem onClick={removeVat}>Delete</MenuItem>
                        </Menu>
                        {/* edit product vat modal */}
                        <Modal
                        open={editVatOpenModal}
                        onClose={closeEditVatModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <EditVatModal 
                          saveVat={updateVat}
                          vatPercentage={editVatPercentage}
                          setVatPercentage={setEditVatPercentage}
                          closeModal={closeEditVatModal}/>
                        </Modal>

                </Grid>
                <Grid item lg={3} md={3}>
                  <Button
                      fullWidth
                      onClick={openAddProductVariationModal}
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
                        open={addProductVariationOpenModal}
                        onClose={closeAddProductVariationModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <AddVariationModal
                          isError={error} 
                          errorMessage={errorMessage}
                          saveVat={postVat}
                          vatPercentage={vatPercentage}
                          setVatPercentage={changeVatPercentageValue}
                          closeModal={closeAddProductVariationModal}/>
                    </Modal>
                </Grid>
                <Grid item lg={6} md={6}/>
            </Grid>
        </Grid>
        {vatList.length>0 && 
        <Grid item lg={12} md={12}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={vatList}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    onRowSelected={onSelect}
                />
            </div>
        </Grid>}
      </Grid>
  );
};

export default ProductVariations;

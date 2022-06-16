import React,{useCallback, useEffect, useState} from "react";
import { Grid,Button,MenuItem,Menu } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Modal } from "@material-ui/core";
import AddUnitModal from "../Components/Sub-Components/AddUnitModal";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import EditUnitModal from "../Components/Sub-Components/EditUnitModal";
const MySwal = withReactContent(Swal)
const ProductUnits = () => {
    const [unitList,setUnitList] = useState([]);
    const getProductUnitList = async()=>{
      const response = await axios.get(`${getUrl()}/unit/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setUnitList(data);
      }
    }
    useEffect(()=>{
      getProductUnitList();
    },[])
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'name',
        headerName: 'Name',
        width: 180,
        editable: true,
      },
      {
        field: 'shortname',
        headerName: 'Short Name',
        width: 190,
        editable: true,
      }
    ];
  const onSelect = (event)=>{
    const {data} = event;
    const {id} = data;
    setSelectedId(id);
  }
  const [selectedId,setSelectedId] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [addUnitOpenModal,setAddUnitOpenModal] = useState(false);
  const openAddUnitModal = useCallback(()=>{
    setAddUnitOpenModal(true);
  },[])
  const closeAddUnitModal = useCallback(()=>{
      setAddUnitOpenModal(false);
  },[])
  const [editUnitOpenModal,setEditUnitOpenModal] = useState(false);
  const openEditUnitModal = useCallback(()=>{
    setEditUnitOpenModal(true);
  },[])
  const closeEditUnitModal = useCallback(()=>{
    setEditUnitOpenModal(false);
  },[])
  const [unitName,setUnitName] = useState("");
  const [shortName,setShortName] = useState("");
  const [editUnitName,setEditUnitName] = useState("");
  const [editShortName,setEditShortName] = useState("");
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState(false);
  const getUnit = async()=>{
    if(!selectedId){}
    else{
      handleMenuClose();
      const response = await axios.get(`${getUrl()}/unit/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 200){
        const {data} = response;
        setEditUnitName(data.name);
        setEditShortName(data.shortname);
        openEditUnitModal();
      }
    }
  }
  const updateUnit = useCallback(async()=>{
    const data = {
      name: editUnitName,
      shortname: editShortName
    }
    const response = await axios.patch(`${getUrl()}/unit/${selectedId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status === 200){
      closeEditUnitModal();
      MySwal.fire({
        icon: 'success',
        title: 'Great...',
        text: `${response.data}`,
      });
      getProductUnitList();
    }
  },[selectedId,editUnitName,editShortName,closeEditUnitModal])
  const postUnit = useCallback(async ()=>{
    if(unitName ==="" || unitName ===""){
      setError(true);
      setErrorMessage('Please Fill all the fields');
    }
    else{
      setError(false);
      const data = {
        name: unitName,
        shortname: shortName
      }
      const response = await axios.post(`${getUrl()}/unit`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 201){
        closeAddUnitModal();
        setUnitName("");
        setShortName("");
        getProductUnitList();
        MySwal.fire({
          icon: 'success',
          title: 'Great...',
          text: `${response.data}`,
        });
      }
    }
  },[closeAddUnitModal,unitName,shortName])
  const removeUnit = async()=>{
        handleMenuClose();
        MySwal.fire({
          title: 'Do you want to remove?',
          showCancelButton: true,
          confirmButtonText: 'Remove',
          cancelButtonText: `Keep`,
        }).then(async(result) => {
          if (result.isConfirmed) {
            const response = await axios.delete(`${getUrl()}/unit/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});

            if(response.status === 200){
              MySwal.fire({
                icon: 'success',
                title: 'Great...',
                text: `${response.data}`,
              });
              getProductUnitList();
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
            justifyContent="flex-start"
            alignItems="center">
                <Grid item lg={6} md={6}>
                    <h2>Product Units</h2>
                </Grid>
            </Grid>
            <Grid container >
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
                            <MenuItem onClick={getUnit}>Edit</MenuItem>
                            <MenuItem onClick={removeUnit}>Delete</MenuItem>
                        </Menu>
                  {/* edit product unit modal */}
                  <Modal
                        open={editUnitOpenModal}
                        onClose={closeEditUnitModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <EditUnitModal 
                          name={editUnitName}
                          setName={setEditUnitName}
                          saveUnit={updateUnit}
                          shortName={editShortName}
                          setShortName={setEditShortName}
                          closeModal={closeEditUnitModal}/>
                    </Modal>
                </Grid>
                <Grid item lg={3} md={3}>
                  <Button
                      fullWidth
                      onClick={openAddUnitModal}
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
                        open={addUnitOpenModal}
                        onClose={closeAddUnitModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <AddUnitModal 
                          isError={error} 
                          name={unitName}
                          setName={setUnitName}
                          errorMessage={errorMessage}
                          saveUnit={postUnit}
                          shortName={shortName}
                          setShortName={setShortName}
                          closeModal={closeAddUnitModal}/>
                    </Modal>
                </Grid>
            </Grid>
        </Grid>
        {
          unitList.length>0 && 
          <Grid item lg={12} md={12}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={unitList}
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

export default ProductUnits;

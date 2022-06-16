import React,{useCallback, useEffect, useState} from "react";
import { Grid,Button,MenuItem,Menu, TextField } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Modal } from "@material-ui/core";
import AddProductBrandModal from "../Components/Sub-Components/AddProductBrandModal";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EditRawMaterialModal from "../Components/Sub-Components/Edit.Raw.Material.Modal";
import IncreaseRawMaterialQuantityModal from "../Components/Sub-Components/IncreaseRawMaterialQuantityModal";
import { useNavigate } from "react-router";
import PrintRawMaterialStock from "../Components/Sub-Components/PrintRawMaterialStock";
const MySwal = withReactContent(Swal)
const RawMaterials = () => {
    const columns = [
      {
        field: 'name',
        headerName: 'Raw Material',
        width: 180,
        editable: true,
      },
      {
        field: 'instock',
        headerName: 'Current Stock',
        width: 190,
        editable: true,
      },
      {
        field: 'unit',
        headerName: 'Unit',
        width: 190,
        editable: true,
      },
    ];
    const [rawMaterialList,setRawMaterialList] = useState([]);
    const [filteredRawMaterialList,setFilteredRawMaterialList] = useState([]);
    const [unitList,setUnitList] = useState([]);
    const getProductRawMaterialList = async()=>{
      const response = await axios.get(`${getUrl()}/raw-material/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setRawMaterialList(data);
        setFilteredRawMaterialList(data);
      }
    }
    useEffect(()=>{
      getProductRawMaterialList();
      getUnitList();
    },[])
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
  const [addBrandOpenModal,setAddBrandOpenModal] = useState(false);
  const getUnitList = async()=>{
    const response = await axios.get(`${getUrl()}/unit/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setUnitList(data);
      }
  }
  const openAddBrandModal = async()=>{
    setAddBrandOpenModal(true);
    setError(false);
    setUnit("");
    setName("");
    setCurrentStock(0);
    setStockAlert("")
    setStockAlertQuantity(0);
  }
  const closeAddBrandModal = useCallback(()=>{
    setAddBrandOpenModal(false);
  },[]);
  const [unit,setUnit] = useState("");
  const [unitId,setUnitId] = useState(null);
  const [name,setName] = useState("");
  const [currentStock,setCurrentStock] = useState(0);
  const [stockAlert,setStockAlert] = useState("");
  const [stockAlertQuantity,setStockAlertQuantity] = useState(0);
  const changeUnit = useCallback((event)=>{
    const value = event.target.value;
    const unitId = unitList.filter((unit)=>{return value === unit.name});
    setUnitId(unitId[0].id);
    setUnit(value);
  },[unitList]);
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const postRawMaterial = async ()=>{
    if(unitId === null || name === "" || currentStock === 0 ){
      setError(true);
      setErrorMessage('Please Fill All The fields');
    }
    else{
      setError(false);
      const isStockAlert = stockAlert === "" ? false : stockAlert === "Yes" ? true : false;
      const data = {
          name: name,
          unit: Number(unitId),
          currentstock:Number(currentStock),
          stockalert: Boolean(isStockAlert),
          stockalertquantity:Number(stockAlertQuantity)
      }
      const response = await axios.post(`${getUrl()}/raw-material`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 201){
        closeAddBrandModal();
        MySwal.fire({
          icon: 'success',
          title: 'Great...',
          text: `${response.data}`,
        });
        setUnit("");
        setName("");
        setUnitId(null);
        setCurrentStock(0);
        setStockAlert("")
        setStockAlertQuantity(0);
        getProductRawMaterialList();
        closeAddBrandModal();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  const [editUnit,setEditUnit] = useState("");
  const [editUnitId,setEditUnitId] = useState(null);
  const [editName,setEditName] = useState("");
  const [editCurrentStock,setEditCurrentStock] = useState(0);
  const [editStockAlert,setEditStockAlert] = useState("");
  const [editStockAlertQuantity,setEditStockAlertQuantity] = useState(0);
  const changeEditUnit = useCallback((event)=>{
    const value = event.target.value;
    const unitId = unitList.filter((unit)=>{return value === unit.name});
    setEditUnitId(unitId[0].id);
    setEditUnit(value);
  },[unitList]);
  const [editRawMaterialOpenModal,setEditRawMaterialOpenModal] = useState(false);
  const openEditRawMaterialModal = async()=>{
      setEditRawMaterialOpenModal(true);
  }
  const closeEditRawMaterialModal = useCallback(()=>{
    setEditRawMaterialOpenModal(false);
  },[]);
  const getRawMaterial = async()=>{
    if(!selectedId){}
    else{
      handleMenuClose();
      const response = await axios.get(`${getUrl()}/raw-material/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      
      if(response.status === 200){
        const data = response.data;
        const unitId = unitList.filter((unit)=>{return data[0].unit === unit.name});
        const stockAlert = data[0].stockalert ? "Yes" : "No";
        openEditRawMaterialModal();
        setEditUnitId(unitId[0].id);
        setEditUnit(data[0].unit);
        setEditName(data[0].rawmaterial);
        setEditCurrentStock(data[0].instock);
        setEditStockAlert(stockAlert);
        setEditStockAlertQuantity(data[0].stockalertquantity);
        // setEditVatPercentage(Number(data.value));
      }
    }
  }
    const updateRawMaterial = useCallback(async()=>{
      const stockAlert = editStockAlert === "Yes" ? true : false;
      const data = {
        name: editName,
        unit: Number(editUnitId),
        currentstock: Number(editCurrentStock),
        stockalert:Boolean(stockAlert),
        stockalertquantity:Number(editStockAlertQuantity)
      }
      const response = await axios.patch(`${getUrl()}/raw-material/${selectedId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 200){
        closeEditRawMaterialModal();
        MySwal.fire({
          icon: 'success',
          title: 'Great...',
          text: `${response.data}`,
        });
        getProductRawMaterialList();
      }
    },[selectedId,editName,editUnitId,editCurrentStock,closeEditRawMaterialModal,editStockAlert,editStockAlertQuantity])
    const removeRawMaterial = useCallback(async()=>{
      handleMenuClose();
      if(selectedId.length === 0) {
        MySwal.fire({
          icon:'error',
          title:'Sorry!',
          text: 'Maybe you forgot to select item'
        })
      }else{
        MySwal.fire({
          title: 'Do you want to remove?',
          showCancelButton: true,
          confirmButtonText: 'Remove',
          cancelButtonText: `Keep`,
        }).then(async(result) => {
          if (result.isConfirmed) {
            const response = await axios.delete(`${getUrl()}/raw-material/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
  
            if(response.status === 200){
              MySwal.fire({
                icon: 'success',
                title: 'Great...',
                text: `${response.data}`,
              });
              getProductRawMaterialList();
            }
          } else if (result.isDenied) {}
        })
      }
    },[selectedId]);
    const [rawMaterialToBeIncreasedQuantity,setRawMaterialToBeIncreasedQuantity] = useState(0);
    const [increaseRawMaterialOpenModal,setIncreaseRawMaterialOpenModal] = useState(false);
    const openIncreaseRawMaterialModal = async()=>{
        handleMenuClose();
        setRawMaterialToBeIncreasedQuantity(0);
        setIncreaseRawMaterialOpenModal(true);
    }
    const closeIncreaseRawMaterialModal = useCallback(()=>{
      setIncreaseRawMaterialOpenModal(false);
    },[]);
    const addStock = useCallback(async()=>{
      if(selectedId.length === 0) {
        MySwal.fire({
          icon:'error',
          title:'Sorry!',
          text: 'Maybe you forgot to select item'
        })
      }else{
        closeIncreaseRawMaterialModal();
        if(rawMaterialToBeIncreasedQuantity === 0){
          MySwal.fire({
            icon:'error',
            title:'Sorry!',
            text: 'Quantity must be more than 0'
          })
        }
        else{
          MySwal.fire({
            title: 'Do you want to increase stock?',
            showCancelButton: true,
            confirmButtonText: 'Increase',
            cancelButtonText: `Keep`,
          }).then(async(result) => {
            if (result.isConfirmed) {
              const data = {
                reference: Number(selectedId),
                quantity: Number(rawMaterialToBeIncreasedQuantity)
              }
              const response = await axios.post(`${getUrl()}/raw-material/add/stock`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
              
              if(response.status === 201){
                MySwal.fire({
                  icon: 'success',
                  title: 'Great...',
                  text: `${response.data}`,
                });
                getProductRawMaterialList();
              }
            } else if (result.isDenied) {}
          })
        }
      }
    },[selectedId,rawMaterialToBeIncreasedQuantity,closeIncreaseRawMaterialModal]);
    const navigate = useNavigate();
    const goToStockAdjustment = async()=>{
      navigate('/stock-adjustment/raw-material');
    }
    const [searchQuery,setSearchQuery] = useState("");
    const [isToPrint,setIsToPrint] = useState(false);
    const searchRawMaterials = async(query)=>{
      if(query === "" || query.length === 0){
        setFilteredRawMaterialList(rawMaterialList);
        setSearchQuery("");
      }else{
        const reg = new RegExp(query.split('').join('.*'), 'i');
        const filteredRawMaterials = rawMaterialList.filter((rawmaterial)=>rawmaterial.name.toLowerCase().match(reg));
        setFilteredRawMaterialList(filteredRawMaterials);
        setSearchQuery(query);
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
                    <h2>Product Raw Materials</h2>
                </Grid>
            </Grid>
            <Grid 
            container
            direction="row"
            spacing="2">
                {isToPrint === true?(<></>): localStorage.getItem("role").toLowerCase() === "admin" || 
                localStorage.getItem("role").toLowerCase() === "accountant" ?
                (<>
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
                            {/* Only admin can edit or remove raw material information */}
                            {localStorage.getItem("role").toLowerCase() === "admin" ? (
                              <div>
                                <MenuItem onClick={getRawMaterial}>Edit</MenuItem>
                                <MenuItem onClick={removeRawMaterial}>Delete</MenuItem>
                              </div>):(<div></div>)}

                              {/* Only admin and accountant is allowed to increase or adjust stock */}
                              {localStorage.getItem("role").toLowerCase() === "admin" || 
                              localStorage.getItem("role").toLowerCase() === "accountant"? (
                              <div>
                                <MenuItem onClick={openIncreaseRawMaterialModal}>Increase Stock</MenuItem>
                                <MenuItem onClick={goToStockAdjustment}>Stock Adjustment</MenuItem>
                              </div>):(<div></div>)}
                            {/* edit product raw material */}
                            <Modal
                                  open={editRawMaterialOpenModal} 
                                  onClose={closeEditRawMaterialModal}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                  >
                                  <EditRawMaterialModal
                                    stockAlert={editStockAlert}
                                    setStockAlert={setEditStockAlert}
                                    stockAlertQuantity={editStockAlertQuantity}
                                    setStockAlertQuantity={setEditStockAlertQuantity}
                                    name={editName}
                                    save={updateRawMaterial}
                                    setName={setEditName}
                                    currentStock={editCurrentStock}
                                    setCurrentStock={setEditCurrentStock}
                                    unitList={unitList}
                                    unitName={editUnit}
                                    setUnit={changeEditUnit}
                                    closeModal={closeEditRawMaterialModal}/>
                              </Modal>
                            {/* increase product raw material */}
                            <Modal
                                  open={increaseRawMaterialOpenModal} 
                                  onClose={closeIncreaseRawMaterialModal}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                  >
                                  <IncreaseRawMaterialQuantityModal
                                    quantity={rawMaterialToBeIncreasedQuantity}
                                    setQuantity={setRawMaterialToBeIncreasedQuantity}
                                    save={addStock}
                                    closeModal={closeIncreaseRawMaterialModal}/>
                              </Modal>
                        </Menu>
                  
                </Grid>
                {/* Only admin can add product raw material */}
                {localStorage.getItem("role").toLowerCase()==="admin" ? (
                <Grid item lg={3} md={3}>
                  <Button
                      fullWidth
                      onClick={openAddBrandModal}
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
                        open={addBrandOpenModal}
                        onClose={closeAddBrandModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <AddProductBrandModal
                          stockAlert={stockAlert}
                          setStockAlert={setStockAlert}
                          stockAlertQuantity={stockAlertQuantity}
                          setStockAlertQuantity={setStockAlertQuantity}
                          isError={error}
                          errorMessage={errorMessage} 
                          name={name}
                          save={postRawMaterial}
                          setName={setName}
                          currentStock={currentStock}
                          setCurrentStock={setCurrentStock}
                          unitList={unitList}
                          unitName={unit}
                          setUnit={changeUnit}
                          closeModal={closeAddBrandModal}/>
                    </Modal>
                </Grid>):(<></>)}
                </>):(<></>)}
                {isToPrint === true?(
                <Grid item lg={3} md={3}>
                  <Button
                      fullWidth
                      aria-controls="simple-menu" 
                      aria-haspopup="true"
                      color="success" 
                      onClick={()=>setIsToPrint(false)}
                      variant="contained"
                      >
                          Table View
                      </Button>
                </Grid>):(
                  <>
                    <Grid item lg={3} md={3}>
                      <Button
                          fullWidth
                          aria-controls="simple-menu" 
                          aria-haspopup="true"
                          color="success" 
                          variant="contained"
                          onClick={()=>setIsToPrint(true)}
                          >
                              Print Raw Material Stock
                          </Button>
                    </Grid>
                    <Grid item lg={3} md={3}>
                      <TextField
                      label="Search Raw Material"
                      fullWidth
                      value = {searchQuery}
                      onChange={(event)=>{searchRawMaterials(event.target.value)}}
                      variant="outlined"/>
                    </Grid>
                  </>)}
                
            </Grid>
        </Grid>
        {isToPrint === true? (
        <Grid item lg={12} md={12}><PrintRawMaterialStock data = {filteredRawMaterialList}/></Grid>) 
        : rawMaterialList.length>0 ? (<Grid item lg={12} md={12}>
           <div style={{ height: 400, width: '100%' }}>
                   <DataGrid
                        rows={filteredRawMaterialList}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onRowSelected={onSelect}
                    />
                </div>
            </Grid>):(<></>)}
      </Grid>
  );
};

export default RawMaterials;

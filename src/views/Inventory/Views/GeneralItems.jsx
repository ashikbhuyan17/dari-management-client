import React,{useCallback, useEffect, useState} from "react";
import { Grid,Button,MenuItem,Menu } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { TextField } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Modal } from "@material-ui/core";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AddGeneralItemModal from "../Components/Sub-Components/AddGeneralItemModal";
import EditGeneralItemModal from "../Components/Sub-Components/EditGeneralItemModal";
import IncreaseGeneralItemQuantityModal from "../Components/Sub-Components/IncreaseGeneralItemQuantity";
import { useNavigate } from "react-router";
import PrintGeneralItemsStock from "../Components/Sub-Components/PrintGeneralItemsStock";
const MySwal = withReactContent(Swal)
const GeneralItems = () => {
    const columns = [
      {
        field: 'name',
        headerName: 'Item',
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
    const [generalItemList,setGeneralItemList] = useState([]);
    const [filteredGeneralItemList,setFilteredGeneralItemList] = useState([]);
    const [unitList,setUnitList] = useState([]);
    const getProductGeneralItemList = async()=>{
      const response = await axios.get(`${getUrl()}/general-item/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setGeneralItemList(data);
        setFilteredGeneralItemList(data);
      }
    }
    useEffect(()=>{
      getProductGeneralItemList();
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
  const postGeneralItem = async ()=>{
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
      const response = await axios.post(`${getUrl()}/general-item`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
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
        getProductGeneralItemList();
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
  const [editGeneralItemOpenModal,setEditGeneralItemOpenModal] = useState(false);
  const openEditGeneralItemModal = async()=>{
      setEditGeneralItemOpenModal(true);
  }
  const closeEditGeneralItemModal = useCallback(()=>{
    setEditGeneralItemOpenModal(false);
  },[]);
  const getGeneralItem = async()=>{
    if(!selectedId){}
    else{
      handleMenuClose();
      const response = await axios.get(`${getUrl()}/general-item/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      
      if(response.status === 200){
        const data = response.data;
        const unitId = unitList.filter((unit)=>{return data[0].unit === unit.name});
        const stockAlert = data[0].stockalert ? "Yes" : "No";
        openEditGeneralItemModal();
        setEditUnitId(unitId[0].id);
        setEditUnit(data[0].unit);
        setEditName(data[0].name);
        setEditCurrentStock(data[0].instock);
        setEditStockAlert(stockAlert);
        setEditStockAlertQuantity(data[0].stockalertquantity);
        // setEditVatPercentage(Number(data.value));
      }
    }
  }
    const updateGeneralItem = useCallback(async()=>{
      const stockAlert = editStockAlert === "Yes" ? true : false;
      const data = {
        name: editName,
        unit: Number(editUnitId),
        currentstock: Number(editCurrentStock),
        stockalert:Boolean(stockAlert),
        stockalertquantity:Number(editStockAlertQuantity)
      }
      const response = await axios.patch(`${getUrl()}/general-item/${selectedId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status === 200){
        closeEditGeneralItemModal();
        MySwal.fire({
          icon: 'success',
          title: 'Great...',
          text: `${response.data}`,
        });
        getProductGeneralItemList();
      }
    },[selectedId,editName,editUnitId,editCurrentStock,closeEditGeneralItemModal,editStockAlert,editStockAlertQuantity])
    const removeGeneralItem = useCallback(async()=>{
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
            const response = await axios.delete(`${getUrl()}/general-item/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
  
            if(response.status === 200){
              MySwal.fire({
                icon: 'success',
                title: 'Great...',
                text: `${response.data}`,
              });
              getProductGeneralItemList();
            }
          } else if (result.isDenied) {}
        })
      }
    },[selectedId]);
    const [generalItemToBeIncreasedQuantity,setGeneralItemToBeIncreasedQuantity] = useState(0);
    const [increaseGeneralItemOpenModal,setIncreaseGeneralItemOpenModal] = useState(false);
    const openIncreaseGeneralItemModal = async()=>{
        handleMenuClose();
        setGeneralItemToBeIncreasedQuantity(0);
        setIncreaseGeneralItemOpenModal(true);
    }
    const closeIncreaseGeneralItemModal = useCallback(()=>{
      setIncreaseGeneralItemOpenModal(false);
    },[]);
    const addStock = useCallback(async()=>{
      if(selectedId.length === 0) {
        MySwal.fire({
          icon:'error',
          title:'Sorry!',
          text: 'Maybe you forgot to select item'
        })
      }else{
        closeIncreaseGeneralItemModal();
        if(generalItemToBeIncreasedQuantity === 0){
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
                quantity: Number(generalItemToBeIncreasedQuantity)
              }
              const response = await axios.post(`${getUrl()}/general-item/increase/stock`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
              
              if(response.status === 201){
                MySwal.fire({
                  icon: 'success',
                  title: 'Great...',
                  text: `${response.data}`,
                });
                getProductGeneralItemList();
              }
            } else if (result.isDenied) {}
          })
        }
      }
    },[selectedId,generalItemToBeIncreasedQuantity,closeIncreaseGeneralItemModal]);
    const navigate = useNavigate();
    const goToStockAdjustment = async()=>{
      navigate('/stock-adjustment/general-item');
    }
    const [searchQuery,setSearchQuery] = useState("");
    const [isToPrint,setIsToPrint] = useState(false);
    const searchGeneralItems = async(query)=>{
      if(query === "" || query.length === 0){
        setFilteredGeneralItemList(generalItemList);
        setSearchQuery("");
      }else{
        const reg = new RegExp(query.split('').join('.*'), 'i');
        const filteredGeneralItems = generalItemList.filter((item)=>item.name.toLowerCase().match(reg));
        setFilteredGeneralItemList(filteredGeneralItems);
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
                    <h2>General Items</h2>
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
                            {localStorage.getItem("role").toLowerCase() === "admin" ? (
                              <div>
                                <MenuItem onClick={getGeneralItem}>Edit</MenuItem>
                                <MenuItem onClick={removeGeneralItem}>Delete</MenuItem>
                              </div>):(<MenuItem></MenuItem>)}
                              {localStorage.getItem("role").toLowerCase() === "admin" || 
                              localStorage.getItem("role").toLowerCase() === "accountant"? (
                              <div>
                                <MenuItem onClick={openIncreaseGeneralItemModal}>Increase Stock</MenuItem>
                                <MenuItem onClick={goToStockAdjustment}>Stock Adjustment</MenuItem>
                              </div>):(<MenuItem></MenuItem>)}
                            {/* edit product raw material */}
                            <Modal
                                  open={editGeneralItemOpenModal} 
                                  onClose={closeEditGeneralItemModal}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                  >
                                  <EditGeneralItemModal
                                    stockAlert={editStockAlert}
                                    setStockAlert={setEditStockAlert}
                                    stockAlertQuantity={editStockAlertQuantity}
                                    setStockAlertQuantity={setEditStockAlertQuantity}
                                    name={editName}
                                    save={updateGeneralItem}
                                    setName={setEditName}
                                    currentStock={editCurrentStock}
                                    setCurrentStock={setEditCurrentStock}
                                    unitList={unitList}
                                    unitName={editUnit}
                                    setUnit={changeEditUnit}
                                    closeModal={closeEditGeneralItemModal}/>
                              </Modal>
                            {/* increase product raw material */}
                            <Modal
                                  open={increaseGeneralItemOpenModal} 
                                  onClose={closeIncreaseGeneralItemModal}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                  >
                                  <IncreaseGeneralItemQuantityModal
                                    quantity={generalItemToBeIncreasedQuantity}
                                    setQuantity={setGeneralItemToBeIncreasedQuantity}
                                    save={addStock}
                                    closeModal={closeIncreaseGeneralItemModal}/>
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
                        <AddGeneralItemModal
                          stockAlert={stockAlert}
                          setStockAlert={setStockAlert}
                          stockAlertQuantity={stockAlertQuantity}
                          setStockAlertQuantity={setStockAlertQuantity}
                          isError={error}
                          errorMessage={errorMessage} 
                          name={name}
                          save={postGeneralItem}
                          setName={setName}
                          currentStock={currentStock}
                          setCurrentStock={setCurrentStock}
                          unitList={unitList}
                          unitName={unit}
                          setUnit={changeUnit}
                          closeModal={closeAddBrandModal}/>
                    </Modal>
                </Grid>
                ):(<></>)}

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
                      label="Search General Items"
                      fullWidth
                      value = {searchQuery}
                      onChange={(event)=>{searchGeneralItems(event.target.value)}}
                      variant="outlined"/>
                    </Grid>
                  </>)}

                  {isToPrint === true? 
                  (<Grid item lg={12} md={12}><PrintGeneralItemsStock data = {filteredGeneralItemList}/></Grid>) 
                  : generalItemList.length>0 ? (
                  <Grid item lg={12} md={12}>
                    <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                  rows={filteredGeneralItemList}
                                  columns={columns}
                                  pageSize={5}
                                  checkboxSelection
                                  onRowSelected={onSelect}
                              />
                          </div>
                  </Grid>):(<></>)}
            </Grid>
        </Grid>
      </Grid>
  );
};

export default GeneralItems;

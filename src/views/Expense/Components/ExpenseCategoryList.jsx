import React,{useState} from "react";
import { Grid,Button,MenuItem,Menu, Card, Modal } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { Autocomplete,TextField } from "@material-ui/core";
import EditExpenseCategoryModal from "./EditExpenseCategoryModal";
const ExpenseCategoryList = ({data,remove,getCategory,update,editCategory,setCategory}) => {
    const columns = [
      {
        field: 'name',
        headerName: 'Name',
        width: 220,
        editable: true,
      },
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

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [editCategoryModal,setEditCategoryModal] = useState(false);
  const openEditCategoryModal = ()=>{
    setEditCategoryModal(true);
  }
  const closeEditCategoryModal = ()=>{
    setEditCategoryModal(false);
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
                            <MenuItem onClick={()=>getCategory(handleClose,openEditCategoryModal,selectedId)}>Edit</MenuItem>
                            <MenuItem onClick={()=>remove(handleClose,selectedId)}>Delete</MenuItem>
                            <Modal
                                open={editCategoryModal}
                                onClose={closeEditCategoryModal}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                >
                                <EditExpenseCategoryModal 
                                update={update}
                                setCategory={setCategory}
                                category={editCategory}
                                closeModal={closeEditCategoryModal}/>
                                </Modal>
                        </Menu>

                </Grid>
                <Grid item lg={9} md={9}>
                    <Autocomplete
                            fullWidth
                            id="combo-box-demo"
                            options={data}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField  {...params} label="Search Purchase Category" variant="outlined" />}
                            />
                </Grid>
            </Grid>
            <br />
            <Grid container>
                    <Grid item lg={12} md={12}>
                      <div style={{ height: 400, width: '100%' }}>
                          <DataGrid
                              rows={data}
                              columns={columns}
                              pageSize={5}
                              checkboxSelection
                              onRowSelected={onSelect}
                          />
                      </div>
                  </Grid>
            </Grid>
            </Card>
        </Grid>
      </Grid>
  );
};

export default ExpenseCategoryList;

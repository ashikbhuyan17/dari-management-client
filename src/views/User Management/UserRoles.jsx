import React,{useState} from "react";
import { Grid,Button,Alert,AlertTitle,Collapse,Modal } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import EditUserModal from "./Components/EditUserModal";
const UserRoles = () => {
    const userList = [
        {id: 1,role: "Admin"},
        {id: 2,role: "Cashier"}
    ]
    const columns = [
      { field: 'id', headerName: 'ID', width: 120 },
      {
        field: 'role',
        headerName: 'Role',
        width: 150,
        editable: true,
      }
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
  const edit = ()=>{
      if (selectedIdList.length === 0) {
          setCollapseOpen(true);
          setAlertType("warning");
          setAlertTitle("Warning");
          setAlertMessage("This is a warning");
      }else{
        setEditModalValue(!editModal);
      }
  }
  const [collapseOpen,setCollapseOpen] = useState(false);
  const [alertType,setAlertType] = useState();
  const [alertMessage,setAlertMessage] = useState();
  const [alertTitle,setAlertTitle] = useState();
  const [editModal,setEditModalValue] = useState(false);
  const closeEditModal = ()=>{
    setEditModalValue(!editModal);
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
            <Grid container >
                <Grid  item lg={3} md={3}>
                    <Button
                    onClick={edit}
                    fullWidth
                    color="warning" 
                    variant="contained">
                        <EditIcon/>
                    </Button>
                    <Modal
                        open={editModal}
                        onClose={closeEditModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        <EditUserModal 
                          closeModal={closeEditModal}/>
                    </Modal>
                </Grid>
                <Grid  item lg={1} md={1}/>
                <Grid  item lg={3} md={3}>
                    <Button
                    fullWidth
                    color="primary" 
                    variant="contained">
                        <VisibilityIcon/>
                    </Button>
                </Grid>
                <Grid  item lg={1} md={1}/>
                <Grid  item lg={3} md={3}>
                    <Button
                    fullWidth
                    color="error" 
                    variant="contained">
                        <DeleteIcon/>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid  item lg={12} md={12}>
            <Collapse in={collapseOpen}>
                <Alert 
                severity={alertType}
                action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setCollapseOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    <strong>{alertMessage}</strong>
                </Alert>
            </Collapse>
        </Grid>
        <Grid item lg={12} md={12}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={userList}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    onRowSelected={onSelect}
                />
            </div>
        </Grid>
      </Grid>
  );
};

export default UserRoles;

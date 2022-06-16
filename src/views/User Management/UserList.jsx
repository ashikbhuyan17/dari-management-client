import React,{useEffect, useState} from "react";
import { Grid,Button } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getUrl from "../../HTTP/url";
import { getAccessToken } from "../../HTTP/token";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)
const UserList = () => {
const columns = [
    {
      field: 'username',
      headerName: 'User Name',
      width: 250,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'User Role',
      width: 300,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 350,
      editable: true,
    },
  ];
  const [userList,setUserList] = useState([]);
  const getUserList = async()=>{
    const response = await axios.get(`${getUrl()}/user/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
    if(response.status === 200){
      const {data} = response;
      setUserList(data);
    }
  }
  useEffect(()=>{
    getUserList();
  },[]);
  const onSelect = (event)=>{
    const {data} = event;
    const {id} = data;
    setSelectedId(id);
  }
  const [selectedId,setSelectedId] = useState();

  const navigate = useNavigate();
  const viewUserDetails = ()=>{
    if(!selectedId){
      MySwal.fire({
        icon: 'error',
        title: 'Opps...',
        text: `You might have forgot to Select a user`,
      });
    }else{
      navigate(`/user/${selectedId}`);
    }
    
  }
  const removeUser = async()=>{
    if(!selectedId){
      MySwal.fire({
        icon: 'error',
        title: 'Opps...',
        text: `You might have forgot to Select a user`,
      });
    }else{
        MySwal.fire({
        title: 'Are you sure to remove this user?',
        showCancelButton: true,
        confirmButtonText: 'Remove',
        cancelButtonText: `Keep`,
      }).then(async(result) => {
        if (result.isConfirmed) {
          const response = await axios.delete(`${getUrl()}/user/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
          if(response.status === 200){
            MySwal.fire({
              icon: 'success',
              title: 'Great...',
              text: `${response.data}`,
            });
            getUserList();
          }
        } else if (result.isDenied) {}
      })
    }
  }
  const EditUser = async()=>{
    if(!selectedId){
      MySwal.fire({
        icon: 'error',
        title: 'Opps...',
        text: `You might have forgot to Select a user`,
      });
    }else{
        MySwal.fire({
        title: 'Are you sure to edit this user informations?',
        showCancelButton: true,
        confirmButtonText: 'Procced',
        cancelButtonText: `Unprocced`,
      }).then(async(result) => {
        if (result.isConfirmed) {
          navigate(`/user/edit/${selectedId}`);
        } else if (result.isDenied) {}
      })
    }
  }
  return (
      <Grid 
        container
        direction="row"
        spacing="2">
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
                    fullWidth
                    color="primary" 
                    onClick={()=>{navigate('/user/create')}}
                    variant="contained">
                        Create User
                    </Button>
                </Grid>
                <Grid  item lg={3} md={3}>
                    <Button
                    onClick={EditUser}
                    fullWidth
                    color="warning" 
                    variant="contained">
                        <EditIcon/>
                    </Button>
                </Grid>
                <Grid  item lg={3} md={3}>
                    <Button
                    onClick={viewUserDetails}
                    fullWidth
                    color="primary" 
                    variant="contained">
                        Check Details
                    </Button>
                </Grid>
                <Grid  item lg={3} md={3}>
                    <Button
                    fullWidth
                    color="error" 
                    onClick={removeUser}
                    variant="contained">
                        Remove User
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        {userList.length>0 && 
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
        </Grid>}
      </Grid>
  );
};

export default UserList;

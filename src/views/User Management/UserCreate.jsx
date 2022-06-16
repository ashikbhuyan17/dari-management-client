import React from "react";
import { Button, Grid } from "@material-ui/core";
import UserCreateForm from "./Components/UserCreateForm";
import { useNavigate } from "react-router";

const UserCreate = () => {
    const navigate = useNavigate();
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
                    <Grid item lg={6} md={6}>
                        <Button
                        fullWidth
                        color="success"
                        onClick={()=>{navigate('/user-list')}}
                        variant="contained">
                            Go Back
                        </Button>
                    </Grid>
            </Grid>
            <br />
            <br />
            <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center">
                <Grid item lg={6} md={6}>
                    <h2>Create User</h2>
                </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid item lg={12} md={12}>
                <UserCreateForm/>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default UserCreate;
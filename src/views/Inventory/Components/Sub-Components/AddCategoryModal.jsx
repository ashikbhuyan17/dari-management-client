import React from "react";
import {Card,CardContent,Divider,Grid,TextField, Button, Alert } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
const AddCategoryModal = ({closeModal,category,setCategory,description,setDescription,save,isError,errorMessage}) => {
  return (
    <>
      <Grid container>
        <Grid item lg={3} md={3}/>
        <Grid item lg={6} md={6}>
        <Card>
            <CardContent>
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                  <Grid item lg={6} md={6}>
                    <h1>Add Category</h1>
                  </Grid>
                  <Grid item lg={3} md={3}/>
                  <Grid item lg={2} md={2}/>
                  <Grid item lg={1} md={1}>
                    <h5><CloseIcon color="error" onClick={closeModal} style={{cursor:"pointer"}}/></h5>
                  </Grid>
                </Grid>
            </CardContent>
            <Divider/>
            <CardContent>
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                    {isError?(
                    <Grid item lg={12} md={12} style={{ marginBottom:"15px" }}>
                        <Alert severity="warning" variant="filled">
                            {errorMessage}
                        </Alert>
                    </Grid>):(<></>)}
                </Grid>
                <br />
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                    <Grid item lg={12} md={12}>
                        <TextField
                            fullWidth
                            value={category}
                            onChange={(event)=>{setCategory(event.target.value)}}
                            variant="outlined"
                            label="Category Name"
                        />
                    </Grid>
                </Grid>
                <br />
                {/* <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                      <Grid item lg={12} md={12}>
                        <TextField
                            multiline
                            fullWidth
                            value = {description}
                            onChange={(event)=>{setDescription(event.target.value)}}
                            rows={8}
                            variant="outlined"
                            label="Description"
                            />
                     </Grid>
                </Grid> */}
            </CardContent>
            <Divider/>
            <CardContent>
                <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center" 
                spacing="1">
                  <Grid item lg={12} md={12}>
                      <Button
                        fullWidth
                        onClick={save}
                        variant="contained"
                        color="success"
                        endIcon={<SaveOutlinedIcon/>}
                      >
                        Save
                      </Button>
                  </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
        <Grid item lg={3} md={3}/>
      </Grid>
  </>
  );
};

export default React.memo(AddCategoryModal);

import React from "react";
import {Card,CardContent,Divider,Grid, Button, Alert, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
const CreateRecipeModal = ({closeModal,product,setProduct,save,isError,errorMessage,productList}) => {
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
                    <h1>Create Product Recipe</h1>
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
                    <Grid item lg={12} md={12}>
                        <FormControl 
                        fullWidth
                        variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">Select Product</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            value={product}
                            onChange={(event)=>setProduct(event.target.value)}
                            label="Select Product"
                          >
                            {/* <MenuItem value="">
                              <em>None</em>
                            </MenuItem> */}
                            {productList.map((product)=>{
                              return (<MenuItem key={product.id} value={product.name}>{product.name}</MenuItem>)
                            })}
                          </Select>
                      </FormControl>
                     </Grid>
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

export default CreateRecipeModal;

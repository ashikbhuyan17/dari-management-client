import React from "react";
import {Card,CardContent,Divider,Grid, Button, Alert, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { TextField } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
const AddRecipeItemModal = ({closeModal,recipe,setRecipe,isError,errorMessage,
    recipeList,rawMaterialList,inputList,
    handleInputChange,
    handleRemoveClick,
    addNewInput,addRawMaterial}) => {
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
                    <h1>Add Recipe Item</h1>
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
                  spacing="3">
                    <Grid item lg={12} md={12}>
                        <FormControl 
                        fullWidth
                        variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">Select Product</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            value={recipe}
                            onChange={(event)=>setRecipe(event.target.value)}
                            label="Select Product"
                          >
                            {recipeList.map((recipe)=>{
                              return (<MenuItem key={recipe.id} value={recipe.product}>{recipe.product}</MenuItem>)
                            })}
                          </Select>
                      </FormControl>
                     </Grid>
                     <br />
                     <Grid item lg={12} md={12}>
                    {
                      inputList.map((element,index)=>{
                        return (
                        <Grid key={index}>
                          <Grid style={{ marginTop: "12px" }}
                            item lg={12} md={12}>
                                <FormControl 
                                fullWidth
                                variant="outlined">
                                  <InputLabel id="demo-simple-select-outlined-label">Select Raw Material</InputLabel>
                                  <Select
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    value={element.rawMaterial}
                                    onChange={(event)=>handleInputChange(event,index)}
                                    label="Select Raw Material"
                                    name="rawmaterial"
                                  >
                                    {rawMaterialList.map((rawMaterial)=>{
                                      return (<MenuItem key={rawMaterial.id} value={rawMaterial.name}>{rawMaterial.name}</MenuItem>)
                                    })}
                                  </Select>
                              </FormControl>
                            </Grid>
                            <br />
                            <Grid style={{ marginTop: "12px" }} item lg={12} md={12}>
                              {index ? 
                              (
                                <Grid 
                                container
                                direction="row"
                                spacing="1">
                                  <Grid item lg={10} md={10}>
                                    <TextField
                                        name="quantity"
                                        required
                                        fullWidth
                                        type="number"
                                        value={element.quantity}
                                        onChange={(event)=>{handleInputChange(event,index)}}
                                        variant="outlined"
                                        label="Raw Material Quantity"
                                      />
                                  </Grid>
                                  <Grid item lg={2} md={2}
                                  style={{ display:"flex",justifyContent:"center",alignItems:"center" }}>
                                    <Button
                                      fullWidth
                                      onClick={handleRemoveClick}
                                      variant="contained"
                                      color="error"
                                      endIcon={<RemoveIcon/>}
                                    >
                                      Remove
                                    </Button>
                                  </Grid>
                                </Grid>
                                ):
                              (<>
                                <TextField
                                    name="quantity"
                                    required
                                    fullWidth
                                    type="number"
                                    value={element.quantity}
                                    onChange={(event)=>{handleInputChange(event,index)}}
                                    variant="outlined"
                                    label="Raw Material Quantity"
                                  />
                              </>)}
                            </Grid>
                        </Grid>)
                      })
                    }
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
                  <Grid item lg={6} md={6}>
                      <Button
                        fullWidth
                        onClick={addRawMaterial}
                        variant="contained"
                        color="success"
                        endIcon={<SaveOutlinedIcon/>}
                      >
                        Save
                      </Button>
                  </Grid>
                  <Grid item lg={6} md={6}>
                      <Button
                        fullWidth
                        onClick={addNewInput}
                        variant="contained"
                        color="success"
                        endIcon={<AddIcon/>}
                      >
                        Add More
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

export default AddRecipeItemModal;

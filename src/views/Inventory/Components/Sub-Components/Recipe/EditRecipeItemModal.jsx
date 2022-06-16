import React from "react";
import {Card,CardContent,Divider,Grid, Button,FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { TextField } from "@material-ui/core";
const EditRecipeItemModal = ({save,rawMaterial,setRawMaterial,quantity,setQuantity,recipe,
    setRecipe,recipeList,closeModal,rawMaterialList}) => {
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
                    <h1>Edit Recipe Item</h1>
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
                     <Grid style={{ marginTop: "12px" }}
                        item lg={12} md={12}>
                            <FormControl 
                            fullWidth
                            variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Select Raw Material</InputLabel>
                                <Select
                                required
                                labelId="demo-simple-select-outlined-label"
                                value={rawMaterial}
                                onChange={(event)=>setRawMaterial(event.target.value)}
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
                        <Grid item lg={12} md={12}>
                                <TextField
                                    name="quantity"
                                    required
                                    fullWidth
                                    type="number"
                                    value={quantity}
                                    onChange={(event)=>{setQuantity(event.target.value)}}
                                    variant="outlined"
                                    label="Raw Material Quantity"
                                    />
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

export default EditRecipeItemModal;

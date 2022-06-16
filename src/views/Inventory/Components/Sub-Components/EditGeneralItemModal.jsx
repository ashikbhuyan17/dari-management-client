import React from "react";
import {Card,CardContent,Divider,Grid,TextField, Button, FormControl, InputLabel, Select,MenuItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
const EditGeneralItemModal = ({closeModal,unitList,setUnit,
                              unitName,name,setName,currentStock,
                              setCurrentStock,save,stockAlert,
                              setStockAlert,
                              stockAlertQuantity,
                              setStockAlertQuantity}) => {
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
                    <h1>Edit General Item</h1>
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
                    <Grid item lg={12} md={12}>
                        <TextField
                            fullWidth
                            value={name}
                            onChange={(event)=>setName(event.target.value)}
                            variant="outlined"
                            label="Name"
                        />
                    </Grid>
                </Grid>
                <br />
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                      <Grid item lg={12} md={12}>
                        <FormControl 
                        fullWidth
                        variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">Select Unit</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={unitName}
                            onChange={setUnit}
                            label="Select Unit"
                          >
                            {/* <MenuItem value="">
                              <em>None</em>
                            </MenuItem> */}
                            {unitList.map((unit)=>{
                              return (<MenuItem key={unit.key} value={unit.name}>{unit.name}</MenuItem>)
                            })}
                          </Select>
                      </FormControl>
                     </Grid>
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
                            value={currentStock}
                            onChange={(event)=>setCurrentStock(event.target.value)}
                            type="number"
                            fullWidth
                            variant="outlined"
                            label="Current Stock"
                            />
                     </Grid>
                </Grid>
                <br />
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                      <Grid item lg={12} md={12}>
                        <FormControl 
                        fullWidth
                        variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">Stock Alert</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={stockAlert}
                            onChange={(event)=>setStockAlert(event.target.value)}
                            label="Select Unit"
                          >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                          </Select>
                      </FormControl>
                     </Grid>
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
                            value={stockAlertQuantity}
                            onChange={(event)=>setStockAlertQuantity(event.target.value)}
                            type="number"
                            fullWidth
                            variant="outlined"
                            label="Stock Alert Quantity"
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
                        onClick={save}
                        fullWidth
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

export default React.memo(EditGeneralItemModal);

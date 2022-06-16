import React from "react";
import {Card,CardContent,Divider,Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const EditExpenseModal = ({closeModal,data,update}) => {
  return (
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
                    spacing="2">
                    <Grid item lg={6} md={6}>
                      <h1>Edit Expense Details</h1>
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
                    spacing="2">
                        <Grid item lg={6} md={6}>
                            <TextField 
                                type="date"
                                fullWidth
                                value={data.editDate}
                                onChange={(event)=>data.setEditDate(event.target.value)}
                                id="outlined-basic" 
                                label="Date" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                type="number"
                                value={data.editTotalAmount}
                                onChange={(event)=>data.setEditTotalAmount(event.target.value)}
                                id="outlined-basic" 
                                label="Total Amount" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Divider/>
                    <br />
                    <Grid
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={6} md={6}>
                            <FormControl 
                            variant="outlined" 
                            fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Category"
                                value={data.editCategory}
                                onChange={(event)=>data.changeCategory(event.target.value)}
                                >
                                    {
                                        data.expenseCategoryList.map((category)=>{
                                            return (<MenuItem value={category.name}>{category.name}</MenuItem>)
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                value={data.editDueAmount}
                                onChange={(event)=>data.setEditDueAmount(event.target.value)}
                                id="outlined-basic" 
                                label="Due Amount" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Divider/>
                    <br />
                    <Grid container>
                        <Grid item lg={12} md={12}>
                            <TextField 
                                fullWidth
                                multiline
                                rows={6}
                                value={data.editNote}
                                onChange={(event)=>data.setEditNote(event.target.value)}
                                id="outlined-basic" 
                                label="Additional Notes" 
                                variant="outlined" />
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
                    <Grid item lg={4} md={4}/>
                    <Grid item lg={3} md={3}>
                        <Button
                            fullWidth
                            color="success"
                            onClick={update}
                            variant="contained">Save</Button>
                    </Grid>
                    <Grid item lg={2} md={2}/>
                    <Grid item lg={3} md={3}>
                        <Button
                            fullWidth
                            onClick={closeModal}
                            variant="contained"
                            color="error"
                            endIcon={<CloseOutlinedIcon/>}
                          >
                            Close
                          </Button>
                    </Grid>
                  </Grid>
              </CardContent>
          </Card>
          </Grid>
          <Grid item lg={3} md={3}/>
        </Grid>
  );
};

export default EditExpenseModal;

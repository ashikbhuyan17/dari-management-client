import React from "react";
import {Card,CardContent,Divider,Grid,TextField, Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const EditExpenseCategoryModal = ({closeModal,update,setCategory,category}) => {
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
                      <h1>Edit Expense Category</h1>
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
                          value={category}
                          onChange={(event)=>setCategory(event.target.value)}
                          fullWidth
                          variant="outlined"
                          label="Customer Table Number"
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
                    <Grid item lg={4} md={4}/>
                    <Grid item lg={3} md={3}/>
                    <Grid item lg={2} md={2}>
                        <Button
                          fullWidth
                          onClick={()=>update(closeModal)}
                          variant="contained"
                          color="success"
                          endIcon={<SaveOutlinedIcon/>}
                        >
                          Save
                        </Button>
                    </Grid>
                    <Grid item lg={2} md={2}>
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

export default EditExpenseCategoryModal;

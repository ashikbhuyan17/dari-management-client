import React from "react";
import {Card,CardContent,Divider,Grid,TextField, Button, Alert } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
const AddVariationModal = ({closeModal,vatPercentage,setVatPercentage,saveVat,isError,
    errorMessage}) => {
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
                    <h1>Add Vat</h1>
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
                  spacing="2">
                    {isError?(
                    <Grid item lg={12} md={12} style={{ marginBottom:"15px" }}>
                        <Alert severity="warning" variant="filled">
                            {errorMessage}
                        </Alert>
                    </Grid>):(<></>)}
                    <Grid item lg={12} md={12}>
                        <TextField
                            fullWidth
                            value={vatPercentage}
                            onChange={setVatPercentage}
                            type="number"
                            variant="outlined"
                            label="Vat Percentage"
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
                        variant="contained"
                        color="success"
                        onClick={saveVat}
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

export default AddVariationModal;

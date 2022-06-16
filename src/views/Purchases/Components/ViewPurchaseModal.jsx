import React from "react";
import {Card,CardContent,Divider,Grid, Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const ViewPurchaseModal = ({closeModal,data}) => {
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
                      <h1>View Purchase Details</h1>
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
                      <Grid item lg={4} md={4}>
                        <span>Date: <strong>{data.date}</strong></span>
                      </Grid>
                      <Grid item lg={4} md={4}>
                        <span>Total Purchase Amount: <strong>BDT {data.totalamount}</strong></span>
                      </Grid>
                      <Grid item lg={4} md={4}>
                        <span>Tax Percentage: <strong>{data.taxperentage} %</strong></span>
                      </Grid>
                  </Grid>
                  <br />
                  <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing="1">
                      <Grid item lg={4} md={4}>
                        <span>Tax Amount: <strong>BDT {data.taxamount}</strong></span>
                      </Grid>
                      <Grid item lg={4} md={4}>
                        <span>Due Amount: <strong>BDT {data.due}</strong></span>
                      </Grid>
                      <Grid item lg={4} md={4}/>
                  </Grid>
                  <br />
                  <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing="1">
                    <Grid item lg={4} md={4}>
                        <span>Supplier: <strong>{data.supplier}</strong></span>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <span>Supplier Phone: <strong>{data.supplierphone}</strong></span>
                    </Grid>
                    <Grid item lg={4} md={4}></Grid>
                  </Grid>
                  <br />
                  <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing="1">
                      <Grid item lg={12} md={12}>
                        <h5>Additional Note</h5>
                        <p>{data.note}</p>
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
                    <Grid item lg={2} md={2}/>
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

export default ViewPurchaseModal;

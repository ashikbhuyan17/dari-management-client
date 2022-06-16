import React from "react";
import {Card,CardContent,Divider,Grid, Button, Table, TableHead, TableRow,TableCell, TableBody } from "@material-ui/core";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import PrintIcon from '@material-ui/icons/Print';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from "@material-ui/core";
const ViewProductModal = ({closeModal}) => {
  return (
    <>
      <Grid container>
        <Grid item lg={2} md={2}/>
        <Grid item lg={8} md={8}>
        <Card style={{ overflowY: "auto", maxHeight: "100vh" }}>
            <CardContent>
                <Grid 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" 
                  spacing="1">
                  <Grid item lg={6} md={6}>
                    <h1>Acer Aspire E 15</h1>
                  </Grid>
                  <Grid item lg={3} md={3}/>
                  <Grid item lg={2} md={2}/>
                  <Grid item lg={1} md={1}>
                    <h5><CancelPresentationIcon 
                        color="error" 
                        onClick={closeModal} 
                        style={{cursor:"pointer"}}/></h5>
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
                    <Grid item lg={8} md={8}>
                        <Grid container>
                            <Grid item lg={4} md={4}>
                                <Typography variant="p">
                                    <strong>SKU :</strong> AS0017
                                </Typography><br />
                                <Typography variant="p">
                                    <strong>Brand :</strong> Acer
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Unit :</strong> Pc(s)
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Barcode Type :</strong> C128
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Available In Locations :</strong> Awesome Shop
                                </Typography>
                            </Grid>
                            <Grid item lg={4} md={4}>
                                <Typography variant="p"><br />
                                    <strong>Category :</strong> Electronics
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Sub Category :</strong> Computers
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Manage Stock ?:</strong> Yes
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Alert Quantity :</strong> 70.000
                                </Typography>
                            </Grid>
                            <Grid item lg={4} md={4}>
                                <Typography variant="p"><br />
                                    <strong>Expires in :</strong> Not Applicable
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Applicable Tax :</strong> None
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Selling Price Tax Type :</strong> Exclusive
                                </Typography>
                                <Typography variant="p"><br />
                                    <strong>Product Type :</strong> Variable
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <Grid style={{ border: "1px solid rgba(0,0,0,0.3)",display:"flex",alignItems:"center"}}>
                            <img style={{ margin:"0 auto" }}
                            src="" alt="" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12} md={12}>
                        <h3>Variations</h3>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Variations</TableCell>
                                    <TableCell>SKU</TableCell>
                                    <TableCell>Default Purchase Price (Exc. tax)</TableCell>
                                    <TableCell>Default Purchase Price (Int. tax)</TableCell>
                                    <TableCell>x Margin (%)</TableCell>
                                    <TableCell>Default Selling Price (Exc . tax)</TableCell>
                                    <TableCell>Default Selling Price (Inc . tax)</TableCell>
                                    <TableCell>Group Prices</TableCell>
                                    <TableCell>Variation Images</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Color - Black</TableCell>
                                    <TableCell>AS0017 - 1</TableCell>
                                    <TableCell>$ 350.00</TableCell>
                                    <TableCell>$ 350.00</TableCell>
                                    <TableCell>25.00</TableCell>
                                    <TableCell>$ 437.50</TableCell>
                                    <TableCell>$ 437.50</TableCell>
                                    <TableCell>Wholesale - 0 <br /> Retail - 0</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Color - White</TableCell>
                                    <TableCell>AS0017 - 2</TableCell>
                                    <TableCell>$ 350.00</TableCell>
                                    <TableCell>$ 350.00</TableCell>
                                    <TableCell>25.00</TableCell>
                                    <TableCell>$ 437.50</TableCell>
                                    <TableCell>$ 437.50</TableCell>
                                    <TableCell>Wholesale - 0 <br /> Retail - 0</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <p>Product Stock Details</p>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider/>
            <CardContent>
                <Grid 
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center" 
                spacing="1">
                  <Grid item lg={3} md={3}>
                      <Button
                        variant="contained"
                        color="success"
                        endIcon={<PrintIcon/>}
                      >
                        Print
                      </Button>
                  </Grid>
                  <Grid item lg={3} md={3}>
                      <Button
                        onClick={closeModal}
                        variant="contained"
                        color="error"
                        endIcon={<CloseIcon/>}
                      >
                        Close
                      </Button>
                  </Grid>
                  <Grid item lg={6} md={6}/>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
        <Grid item lg={2} md={2}/>
      </Grid>
  </>
  );
};

export default ViewProductModal;

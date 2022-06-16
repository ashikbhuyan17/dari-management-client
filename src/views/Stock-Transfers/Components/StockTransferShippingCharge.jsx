import { Card } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
const StockTransferShippingCharge = ()=>{
    return (
        <>
            <Card>
                <CardContent>
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                type="number"
                                id="outlined-basic" 
                                label="Shipping Charge" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                multiline
                                rows="5"
                                id="outlined-basic" 
                                label="Additional Notes" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid 
                    container
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <Button
                            fullWidth
                            color="primary"
                            variant="contained">
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default StockTransferShippingCharge;
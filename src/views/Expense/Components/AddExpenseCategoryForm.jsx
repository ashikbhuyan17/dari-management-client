import React from 'react';
import { Alert, Button, Card } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
const AddExpenseCategoryForm = ({category,setCategory,createCategory,isError,errorMsg})=>{
    return (
        <>
            <Card>
                <CardContent>
                    {isError ? 
                    (<Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <Alert severity="error">
                                {errorMsg}
                            </Alert>
                        </Grid>
                    </Grid>) :(<></>)}
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <TextField 
                                fullWidth
                                id="outlined-basic" 
                                value={category}
                                onChange={(event)=>setCategory(event.target.value)}
                                label="Expense Category Name" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Divider/>
                    <br />
                    <Grid container>
                        <Grid item lg={12} md={12}>
                            <Button
                            fullWidth
                            onClick={createCategory}
                            color="success"
                            variant="contained">Create</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default AddExpenseCategoryForm;
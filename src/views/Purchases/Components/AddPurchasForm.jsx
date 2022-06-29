import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    Divider,
    Grid,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Alert,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);

const AddPurchaseForm = () => {
    const [purchaseType, setPurchaseType] = React.useState('');
    const handleChange = (event) => {
        setPurchaseType(event.target.value);
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log("data", data)
        console.log("purchaseType", purchaseType)
        const purchaseData = {
            batch_no: data.batch_no,
            quantity: data.quantity,
            purchase_type: purchaseType,
            total_price: data.total_price,
            description: data.description
        }
        console.log("purchaseData", purchaseData)

        axios.post('http://localhost:5000/api/purchase/create', purchaseData)
            .then((response) => {
                console.log(response);
                MySwal.fire({
                    icon: "success",
                    title: "Great...",
                    // text: `${response.data}`,
                });
                e.target.reset()
            })
            .catch((error) => {
                console.log(error);
            });

    };
    return (
        <>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid
                            container spacing={2}
                        >
                            <Grid item lg={6} md={6}>
                                <TextField
                                    fullWidth
                                    // value={batch_no}
                                    onChange={(event) => {
                                        // setBatch_no(event.target.value);
                                    }}
                                    variant="outlined"
                                    label="Batch No"
                                    {...register("batch_no")}
                                />
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Quantity"
                                    {...register("quantity")}

                                />
                            </Grid>
                        </Grid>

                        <br />
                        <Grid
                            container spacing={2}
                        >

                            <Grid item lg={6} md={6}>
                                {/* <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="purchase_type"
                                    {...register("purchase_type")}

                                /> */}
                                <Grid item lg={12} md={6} sm={6}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Purchase Type
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            value={purchaseType}
                                            onChange={handleChange}
                                            label="purchase_type"
                                        >
                                            <MenuItem value="Cow">Cow</MenuItem>
                                            <MenuItem value="Goat">Goat</MenuItem>
                                            <MenuItem value="Food">Food</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            <Grid item lg={6} md={6}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Total Price"
                                    {...register("total_price")}
                                />
                            </Grid>

                        </Grid>

                        <br />
                        {/* description */}
                        <Grid>
                            <Grid item lg={12} md={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Description"
                                    {...register("description")}
                                />
                            </Grid>
                        </Grid>

                        <br />
                        <Grid item lg={12} md={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="success"
                                type="submit"
                            >
                                Save
                            </Button>
                        </Grid>
                        {/* <input type="submit" /> */}
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default AddPurchaseForm;
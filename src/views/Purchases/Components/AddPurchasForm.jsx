import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { getAccessToken } from '../../../HTTP/token';
import getUrl from '../../../HTTP/url';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const AddPurchaseForm = ()=>{
    const [purchaseCategoryList,setPurchaseCategoryList] = useState([]);
    const getPurchaseCategoryList = async()=>{
        const response = await axios.get(`${getUrl()}/purchase-category/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
            setPurchaseCategoryList(response.data);
        }
    }
    useEffect(()=>{
        getPurchaseCategoryList();
    },[])
    const [isError,setIsError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");
    const [date,setDate] = useState("");
    const [supplier,setSupplier] = useState("");
    const [supplierPhone,setSupplierPhone] = useState("");
    const [totalAmount,setTotalAmount] = useState(0);
    const [dueAmount,setDueAmount] = useState(0);
    const [taxPercentage,setTaxPercentage] = useState(0);
    const [taxAmount,setTaxAmount] = useState(0);
    const [purchaseCategory,setPurchaseCategory] = useState("");
    const [purchaseCategoryId,setPurchaseCategoryId] = useState(null);
    const [note,setNote] = useState("");
    const changePurchaseCategory = (value)=>{
        const category = purchaseCategoryList.filter((category)=>{return value === category.name});
        setPurchaseCategory(value);
        setPurchaseCategoryId(category[0].id);
    }
    const resetData = ()=>{
        setIsError(false);
        setErrorMsg("");
        setDate("");
        setSupplier("");
        setSupplierPhone("");
        setTotalAmount(0);
        setDueAmount(0);
        setTaxPercentage(0);
        setTaxAmount(0);
        setPurchaseCategory("");
        setPurchaseCategoryId(null);
        setNote("");
    }
    const savePurchase = async()=>{
        if(date === "" || supplier === "" || supplierPhone === "" 
        || totalAmount === 0 || note === "" || 
        purchaseCategoryId === null){
            setIsError(true);
            setErrorMsg("Please Fill All The fields");
        }else{
            const data = {
                purchasedate: date,
                note: note,
                totalamount: Number(totalAmount),
                dueamount: Number(dueAmount),
                supplier: supplier,
                supplierphone: supplierPhone,
                taxpercentage: Number(taxPercentage),
                taxamount: Number(taxAmount),
                category:Number(purchaseCategoryId)
            }
            try{
                const response = await axios.post(`${getUrl()}/purchase`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
                
                if(response.status === 201){
                    MySwal.fire({
                        icon: 'success',
                        title: 'Great...',
                        text: `${response.data}`,
                    });
                    resetData();
                }
            }
            catch(error){
                MySwal.fire({
                    icon: 'error',
                    text: `${error.message}`,
                });
            }
        }
    }
    return (
        <>
            <Card>
                <CardContent>
                    {isError && 
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={12} md={12}>
                            <Alert
                            severity="error">{errorMsg}</Alert>
                        </Grid>
                    </Grid>}
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={4} md={4}>
                            <TextField 
                                type="date"
                                fullWidth
                                value={date}
                                onChange={(event)=>setDate(event.target.value)}
                                id="outlined-basic" 
                                label="Date" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                type="number"
                                value={totalAmount}
                                onChange={(event)=>setTotalAmount(event.target.value)}
                                id="outlined-basic" 
                                label="Total Amount" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                value={supplier}
                                onChange={(event)=>setSupplier(event.target.value)}
                                id="outlined-basic" 
                                label="Supplier" 
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
                        <Grid item lg={4} md={4}>
                            <TextField 
                                    fullWidth
                                    value={taxPercentage}
                                    onChange={(event)=>setTaxPercentage(event.target.value)}
                                    type="number"
                                    id="outlined-basic" 
                                    label="Tax Percentage" 
                                    variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                type="number"
                                value={taxAmount}
                                onChange={(event)=>setTaxAmount(event.target.value)}
                                id="outlined-basic" 
                                label="Tax Amount" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <TextField 
                                fullWidth
                                value={supplierPhone}
                                onChange={(event)=>setSupplierPhone(event.target.value)}
                                id="outlined-basic" 
                                label="Supplier Phone" 
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
                                value={purchaseCategory}
                                onChange={(event)=>changePurchaseCategory(event.target.value)}
                                >
                                    {
                                        purchaseCategoryList.map((category)=>{
                                            return (<MenuItem value={category.name}>{category.name}</MenuItem>)
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                value={dueAmount}
                                onChange={(event)=>setDueAmount(event.target.value)}
                                id="outlined-basic" 
                                label="Due Amount" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <Divider/>
                    <Grid container>
                        <Grid item lg={12} md={12}>
                            <TextField 
                                fullWidth
                                multiline
                                rows={6}
                                value={note}
                                onChange={(event)=>setNote(event.target.value)}
                                id="outlined-basic" 
                                label="Additional Notes" 
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
                            color="success"
                            onClick={savePurchase}
                            variant="contained">Save</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default AddPurchaseForm;
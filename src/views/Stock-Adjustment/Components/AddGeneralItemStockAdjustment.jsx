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
const AddGeneralItemStockAdjustmentForm = ()=>{
    const [generalItemList,setGeneralItemList] = useState([]);
    const getGeneralItemList = async()=>{
        const response = await axios.get(`${getUrl()}/general-item/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
            setGeneralItemList(response.data);
        }
    }
    useEffect(()=>{
        getGeneralItemList();
    },[])
    const [isError,setIsError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");
    const [date,setDate] = useState("");
    const [quantity,setQuantity] = useState(0);
    const [generalItem,setGeneralItem] = useState("");
    const [generalItemId,setGeneralItemId] = useState(null);
    const [reason,setReason] = useState("");
    const changeGeneralItem = (value)=>{
        const generalItem = generalItemList.filter((generalItem)=>{return value === generalItem.name});
        setGeneralItem(value);
        setGeneralItemId(generalItem[0].id);
    }
    const resetData = ()=>{
        setIsError(false);
        setErrorMsg("");
        setDate("");
        setQuantity(0);
        setGeneralItem("");
        setGeneralItemId(null);
        setReason("");
    }
    const saveStockAdjustment = async()=>{
        if(date === "" ||reason === "" || 
        generalItemId === null){
            setIsError(true);
            setErrorMsg("Please Fill All The fields");
        }else{
            const data = {
                date: date,
                reason: reason,
                quantity: Number(quantity),
                generalitem:Number(generalItemId)
            }
            try{
                const response = await axios.post(`${getUrl()}/general-item/adjust/stock`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
                
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
                                value={quantity}
                                onChange={(event)=>setQuantity(event.target.value)}
                                id="outlined-basic" 
                                label="Total Quantity" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <FormControl 
                            variant="outlined" 
                            fullWidth>
                            <InputLabel id="demo-simple-select-label">Select General Item</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select General Item"
                                value={generalItem}
                                onChange={(event)=>changeGeneralItem(event.target.value)}
                                >
                                    {
                                        generalItemList.map((generalItem)=>{
                                            return (<MenuItem value={generalItem.name}>{generalItem.name}</MenuItem>)
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <Divider/>
                    <br />
                    <Divider/>
                    <Grid container>
                        <Grid item lg={12} md={12}>
                            <TextField 
                                fullWidth
                                multiline
                                rows={6}
                                value={reason}
                                onChange={(event)=>setReason(event.target.value)}
                                id="outlined-basic" 
                                label="Additional Reasons" 
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
                            onClick={saveStockAdjustment}
                            variant="contained">Save</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default AddGeneralItemStockAdjustmentForm;
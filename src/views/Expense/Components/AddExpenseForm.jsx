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
const AddExpenseForm = ()=>{
    const [expenseCategoryList,setExpenseCategoryList] = useState([]);
    const getExpenseCategoryList = async()=>{
        const response = await axios.get(`${getUrl()}/expense-category/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
            setExpenseCategoryList(response.data);
        }
    }
    useEffect(()=>{
        getExpenseCategoryList();
    },[])
    const [isError,setIsError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");
    const [date,setDate] = useState("");
    const [totalAmount,setTotalAmount] = useState(0);
    const [dueAmount,setDueAmount] = useState(0);
    const [expenseCategory,setExpenseCategory] = useState("");
    const [expenseCategoryId,setExpenseCategoryId] = useState(null);
    const [note,setNote] = useState("");
    const changeExpenseCategory = (value)=>{
        const category = expenseCategoryList.filter((category)=>{return value === category.name});
        setExpenseCategory(value);
        setExpenseCategoryId(category[0].id);
    }
    const resetData = ()=>{
        setIsError(false);
        setErrorMsg("");
        setDate("");
        setTotalAmount(0);
        setDueAmount(0);
        setExpenseCategory("");
        setExpenseCategoryId(null);
        setNote("");
    }
    const saveExpense = async()=>{
        if(date === "" || totalAmount === 0 || note === "" || 
        expenseCategoryId === null){
            setIsError(true);
            setErrorMsg("Please Fill All The fields");
        }else{
            const data = {
                expensedate: date,
                note: note,
                totalamount: Number(totalAmount),
                dueamount: Number(dueAmount),
                category:Number(expenseCategoryId)
            }
            try{
                const response = await axios.post(`${getUrl()}/expense`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
                
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
                        <Grid item lg={6} md={6}>
                            <TextField 
                                type="date"
                                fullWidth
                                value={date}
                                onChange={(event)=>setDate(event.target.value)}
                                id="outlined-basic" 
                                label="Date" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <TextField 
                                fullWidth
                                type="number"
                                value={totalAmount}
                                onChange={(event)=>setTotalAmount(event.target.value)}
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
                                value={expenseCategory}
                                onChange={(event)=>changeExpenseCategory(event.target.value)}
                                >
                                    {
                                        expenseCategoryList.map((category)=>{
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
                            onClick={saveExpense}
                            variant="contained">Save</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default AddExpenseForm;
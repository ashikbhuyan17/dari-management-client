import { Card, InputLabel, Select, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const SalesReportListFilter = ({getOrderList,getOrderListByDate,getOrderListByYear,filterByPayment,filterToken})=>{
    const d = new Date();
    const [paymentType,setPaymentType] = useState("Cash");
    const [month,setMonth] = useState("");
    const [year,setYear] = useState(d.getFullYear());
    const changePaymentType = async(event)=>{
        const {value} = event.target;
        setPaymentType(value);
        filterByPayment(value);
    }
    const changeMonth = async(event)=>{
        const {value} = event.target;
        const values = value.split("-");
        setYear(values[0]);
        setMonth(value);
        const monthName = months[values[1]-1];
        getOrderList(monthName,values[0],paymentType);
    }
    const changeYear = async(event)=>{
        const {value} = event.target;
        setYear(value);
        getOrderListByYear(value);
    }
    const [date,setDate] = useState(null);
    const getRecordByDate = (value)=>{
        setDate(value);
        const dates = value.split("-");
        getOrderListByDate(months[dates[1]-1],dates[0],dates[2]);
    }
    const [token,setToken] = useState("");
    const searchToken = async(value)=>{
        setToken(value);
        filterToken(value);
    }
    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h4">Filters</Typography>
                    <br />
                    <Divider/>
                    <br />
                    <Grid 
                    container
                    direction="row"
                    spacing="2">
                        <Grid item lg={3} md={3}>
                            <TextField 
                                fullWidth
                                year={year}
                                onChange={changeYear}
                                id="outlined-basic" 
                                label="Year" 
                                variant="outlined" />
                        </Grid>
                        <Grid item lg={3} md={3}>
                            <FormControl 
                                    fullWidth 
                                    variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Payment Types</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={paymentType}
                                        onChange={changePaymentType}
                                        label="Payment Types"
                                    >
                                    <MenuItem value="All">All</MenuItem>
                                    <MenuItem value="Cash">Cash</MenuItem>
                                    <MenuItem value="Card">Credit Card</MenuItem>
                                    <MenuItem value="House">House</MenuItem>
                                    <MenuItem value="Complimentary">Complimentary</MenuItem>
                                    <MenuItem value="Due">Due</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                        <Grid item lg={6} md={6}>
                            <Grid
                            container
                            direction="row"
                            spacing="1">
                                <Grid item lg={6} md={6}>
                                    <TextField 
                                    fullWidth
                                    type="month"
                                    value={month}
                                    onChange={changeMonth}
                                    id="outlined-basic" 
                                    label="Select Month" 
                                    variant="filled" />
                                </Grid>
                                <Grid item lg={6} md={6}>
                                    <TextField 
                                    fullWidth
                                    type="date"
                                    value={date}
                                    onChange={(event)=>getRecordByDate(event.target.value)}
                                    id="outlined-basic" 
                                    label="Select Date" 
                                    variant="filled" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={12} md={12}>
                            <TextField 
                                fullWidth
                                value={token}
                                onChange={(event)=>searchToken(event.target.value)}
                                id="outlined-basic" 
                                label="Search Token" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default SalesReportListFilter;
import { Card, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { TextField } from '@material-ui/core';
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
const SalesReportFilter = ({getReportByDate,getReportByMonth})=>{
    const [month,setMonth] = useState("");
    const [date,setDate] = useState(null);
    const changeMonth = async(event)=>{
        const {value} = event.target;
        const values = value.split("-");
        setMonth(value);
        setDate("");
        const monthName = months[values[1]-1];
        getReportByMonth(monthName,values[0]);
    }
    const getReportWithDate = (value)=>{
        setMonth("");
        setDate(value);
        const dates = value.split("-");
        getReportByDate(months[dates[1]-1],dates[0],dates[2]);
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
                                    onChange={(event)=>getReportWithDate(event.target.value)}
                                    id="outlined-basic" 
                                    label="Select Date" 
                                    variant="filled" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default SalesReportFilter;
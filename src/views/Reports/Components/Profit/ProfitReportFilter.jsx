/* eslint-disable no-unused-vars */
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
const ProfitReportFilter = ({getProfitByYear,getProfitByMonth})=>{
    const [month,setMonth] = useState("");
    const [year,setYear] = useState(null);
    const changeMonth = async(event)=>{
        const {value} = event.target;
        const values = value.split("-");
        setMonth(value);
        setYear("");
        const monthName = months[values[1]-1];
        getProfitByMonth(monthName,values[0]);
    }
    const getProfitWithYear = (value)=>{
        setMonth("");
        setYear(value);
        getProfitByYear(value);
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
                                {/* <Grid item lg={6} md={6}>
                                    <TextField 
                                    fullWidth
                                    value={year}
                                    onChange={(event)=>getProfitWithYear(event.target.value)}
                                    id="outlined-basic" 
                                    label="Year" 
                                    variant="outlined" />
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ProfitReportFilter;
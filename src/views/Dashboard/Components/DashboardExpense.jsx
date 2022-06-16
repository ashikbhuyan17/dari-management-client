import { Card, TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Line } from 'react-chartjs-2'
import React, { useEffect, useState } from 'react';
import getUrl from '../../../HTTP/url';
import axios from 'axios';
import { getAccessToken } from '../../../HTTP/token';
import months from './months';
const DashboardExpense = ()=>{
    const [expenseReport,setExpenseReport] = useState([]);
    const getExpenseMonthlyReport = async(month="",year="")=>{
      const response = await axios.get(`${getUrl()}/expense/monthly/report?month=${month}&year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setExpenseReport(data);
      }
    }
    useEffect(()=>{
      getExpenseMonthlyReport();
    },[])
    const data = {
      labels: expenseReport.map((expense)=>{return expense.expensedate}),
      datasets: [
        {
          label: 'Monthly Expense In BDT',
          data: expenseReport.map((expense)=>{return expense.totalexpense}),
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          bexpenseColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };
    
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    const [monthYear,setMonthYear] = useState("");
    const getReport = async(value)=>{
        setMonthYear(value);
        const filteredData = value.split("-");
        const monthName = months[filteredData[1]-1];
        await getExpenseMonthlyReport(monthName,filteredData[0]);
    }
    return (
        <>
            <Grid 
            container
            spacing="2">
                <Grid 
                item lg={12} md={12}>
                    <Card>
                      <Grid 
                      item lg={12} md={12}>
                          <Grid
                          container
                          direction="row"
                          spacing="2">
                            <Grid 
                              item lg={3} md={3}>
                                    <h2>Monthly Expense Report</h2>
                              </Grid>
                              <Grid 
                              item lg={3} md={3}>
                                    <TextField
                                    type="month"
                                    label="Month"
                                    fullWidth
                                    variant="filled"
                                    value={monthYear}
                                    onChange={(event)=>{getReport(event.target.value)}}
                                    />
                              </Grid>
                          </Grid>
                      </Grid>
                      <Grid 
                      item lg={12} md={12}>
                            <Line data={data} options={options} />
                      </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardExpense;
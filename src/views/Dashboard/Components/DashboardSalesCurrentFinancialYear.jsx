import { Card } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Line } from 'react-chartjs-2'
import React from 'react';
const data = {
    labels: ['Jan-2021', 'Feb-2021', 'March-2021', 'Aprill-2021', 'May-2021', 'June-2021'],
    datasets: [
      {
        label: 'Sales In Thousand',
        data: [50, 25, 18, 60, 28, 35],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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
const DashboardSalesCurrentFinancialYear = ()=>{
    return (
        <>
            <Grid 
            container
            spacing="2">
                <Grid item lg={12} md={12}>
                    <Card>
                        <h2>Sales Current Financial Year</h2>
                        <Line data={data} options={options} />
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardSalesCurrentFinancialYear;
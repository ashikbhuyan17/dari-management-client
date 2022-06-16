import { Card, CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getAccessToken } from '../../../HTTP/token';
import getUrl from '../../../HTTP/url';
const DashboardCards = ()=>{
    const [totalSale,setTotalSale] = useState();
    const getMonthlyTotalSale = async(month="",year="")=>{
      const response = await axios.get(`${getUrl()}/order/monthly/total/sale?month=${month}&year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setTotalSale(data[0].totalsale);
      }
    }
    const [totalPurchase,setTotalPurchase] = useState();
    const getMonthlyTotalPurchase = async(month="",year="")=>{
      const response = await axios.get(`${getUrl()}/purchase/monthly/total?month=${month}&year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setTotalPurchase(data[0].totalpurchase);
      }
    }
    const [totalExpense,setTotalExpense] = useState();
    const getMonthlyTotalExpense = async(month="",year="")=>{
      const response = await axios.get(`${getUrl()}/expense/monthly/total?month=${month}&year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setTotalExpense(data[0].totalexpense);
      }
    }
    useEffect(()=>{
        getMonthlyTotalSale();
        getMonthlyTotalPurchase();
        getMonthlyTotalExpense();
    },[])
    return (
        <>
            <Grid 
            container
            direction="row"
            spacing="2">
                <Grid item lg={4} md={4}>
                    <Card>
                        <CardContent>
                            <h5>TOTAL PURCHASE</h5>
                            <h5>BDT {totalPurchase}</h5>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} md={4}>
                    <Card>
                        <CardContent>
                            <h5>TOTAL SALES</h5>
                            <h5>BDT {totalSale}</h5>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} md={4}>
                    <Card>
                        <CardContent>
                            <h5>EXPENSE</h5>
                            <h5>BDT {totalExpense}</h5>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} md={4}>
                    <Card>
                        <CardContent>
                            <h5>PROFIT</h5>
                            <h5>BDT {Number(totalSale) - (Number(totalExpense)+Number(totalPurchase))}</h5>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardCards;
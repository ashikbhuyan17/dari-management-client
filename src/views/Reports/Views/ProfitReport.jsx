import React, { useEffect, useState } from "react";
import {  Grid } from "@material-ui/core";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import ProfitReportFilter from "../Components/Profit/ProfitReportFilter";
import ProfitReportTable from "../Components/Profit/ProfitReportTable";
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
const ProfitReport = () => {
    const d = new Date();
    const [selectedDate,setSelectedDate] = useState(`${d.getDate()}-${Number(d.getMonth())+1}-${d.getFullYear()}`);
    const [profitList,setProfitList] = useState();
    const getProfitByYear = async(year="")=>{
        if(year === "" ) setSelectedDate(`${d.getFullYear()}`);
        else setSelectedDate(`${year}`);
        const response = await axios.get(`${getUrl()}/order/daily/sales/profit?&year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status===200){
            const {data} = response;
            setProfitList(data);
        }
    }
    const getProfitByMonth = async(month="",year="")=>{
        if(month==="" && year === "" ) setSelectedDate(`${months[Number(d.getMonth())]}-${d.getFullYear()}`);
        else setSelectedDate(`${month}-${year}`);
        const response = await axios.get(`${getUrl()}/report/monthly/profit?month=${month}&year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status===200){
          const {data} = response;
          setProfitList(data);
        }
    }
    useEffect(()=>{
        getProfitByMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center" 
        spacing="1">
        <Grid 
        style={{ marginBottom: "15px" }}
        item 
        lg={12} md={12}>
            <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center">
                <Grid item lg={6} md={6}>
                    <h2>Profit Report</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <ProfitReportFilter 
                    getProfitByYear={getProfitByYear}
                    getProfitByMonth={getProfitByMonth}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    {profitList && 
                    <ProfitReportTable 
                    date={selectedDate}
                    data={profitList}/>}
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default ProfitReport;

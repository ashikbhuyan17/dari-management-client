import React, { useEffect, useState } from "react";
import {  Grid } from "@material-ui/core";
// import SalesReportFilter from "../Components/Sales Report/SalesReportFilterList";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import SalesReportBook from "../Components/Sales Report/SalesReportBook";
import SalesReportFilter from "../Components/Sales Report/SalesReportFilter";
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
const SalesReport = () => {
    const d = new Date();
    const [selectedDate,setSelectedDate] = useState(`${d.getDate()}-${Number(d.getMonth())+1}-${d.getFullYear()}`);
    const [reportList,setReportList] = useState();
    const getReportByDate = async(month="",year="",day="")=>{
        if(month==="" && year === "" && day ==="") setSelectedDate(`${d.getDate()}-${months[Number(d.getMonth())]}-${d.getFullYear()}`);
        else setSelectedDate(`${day}-${month}-${year}`);
        const response = await axios.get(`${getUrl()}/order/daily/sales/report?month=${month}&year=${year}&day=${day}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status===200){
            const {data} = response;
            setReportList(data);
        }
    }
    const getReportByMonth = async(month,year)=>{
        if(month==="" && year === "" ) setSelectedDate(`${months[Number(d.getMonth())]}-${d.getFullYear()}`);
        else setSelectedDate(`${month}-${year}`);
        const response = await axios.get(`${getUrl()}/order/monthly/sales/report?month=${month}&year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status===200){
          const {data} = response;
          setReportList(data);
        }
    }
    useEffect(()=>{
        getReportByDate();
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
                    <h2>Sales Report</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <SalesReportFilter 
                    getReportByDate={getReportByDate}
                    getReportByMonth={getReportByMonth}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    {reportList && 
                    <SalesReportBook 
                    date={selectedDate}
                    data={reportList}/>}
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default SalesReport;

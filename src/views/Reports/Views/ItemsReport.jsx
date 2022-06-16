import React, { useEffect, useState } from "react";
import {  Grid } from "@material-ui/core";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import ItemsReportFilter from "../Components/Items Report/ItemsReportFilter";
import ItemsReportTable from "../Components/Items Report/ItemsReportTable";
const ItemsReport = () => {
    const [itemList,setItemList] = useState([]);
    const getItemListByMonth = async(month="",year="")=>{
      const response = await axios.get(`${getUrl()}/order/items/by/month?month=${month}&year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
      if(response.status===200){
        const {data} = response;
        setItemList(data);
      }
    }
    const getItemListByDate = async(month,year,day)=>{
        const response = await axios.get(`${getUrl()}/order/items/by/date?month=${month}&year=${year}&day=${day}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status===200){
          const {data} = response;
          setItemList(data);
        }
    }
    const getItemListByYear = async(year)=>{
        if(year === "") year = new Date().getFullYear();
        const response = await axios.get(`${getUrl()}/order/items/by/year?year=${year}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status===200){
          const {data} = response;
          setItemList(data);
        }
    }
    useEffect(()=>{
        getItemListByMonth();
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
                    <h2>Items Report</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    <ItemsReportFilter 
                        getItemListByYear = {getItemListByYear}
                        getItemListByDate={getItemListByDate}
                        getItemListByMonth = {getItemListByMonth}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} md={12}>
                    {itemList.length>0 ?
                    (<ItemsReportTable
                    data={itemList}/>):(<p>Sorry! There is no data</p>)}
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default ItemsReport;

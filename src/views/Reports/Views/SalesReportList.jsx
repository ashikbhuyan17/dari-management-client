import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import SalesReportListFilter from "../Components/Sales Report/SalesReportListFilter";
import SalesReportListTable from "../Components/Sales Report/SalesReportListTable";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
const SalesReportList = () => {
  const [orderList, setOrderList] = useState([]);
  const [allOrderList, setAllOrderList] = useState([]);
  const getOrderList = async (month = "", year = "") => {
    const response = await axios.get(
      `${getUrl()}/order/sales/report/list?month=${month}&year=${year}`,
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
    if (response.status === 200) {
      const { data } = response;
      setOrderList(data);
      setAllOrderList(data);
    }
  };
  const getOrderListByDate = async (month, year, day) => {
    const response = await axios.get(
      `${getUrl()}/order/sales/report/list/by/date?month=${month}&year=${year}&day=${day}`,
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
    if (response.status === 200) {
      const { data } = response;
      setOrderList(data);
      setAllOrderList(data);
    }
  };
  const getOrderListByYear = async (year) => {
    const response = await axios.get(
      `${getUrl()}/order/sales/report/list/by/year?year=${year}`,
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
    if (response.status === 200) {
      const { data } = response;
      setOrderList(data);
      setAllOrderList(data);
    }
  };
  const filterPaymentTypes = async (type) => {
    if (type === "All") {
      setOrderList(allOrderList);
    } else {
      const filteredData = allOrderList.filter((order) => {
        return order.paymentType === type;
      });
      setOrderList(filteredData);
    }
  };
  const filterToken = async (query) => {
    if (query === "") {
      setOrderList(allOrderList);
    } else {
      const reg = new RegExp(query.split("").join(".*"), "i");
      const filteredData = allOrderList.filter((order) =>
        order.token.toLowerCase().match(reg)
      );
      setOrderList(filteredData);
    }
  };
  useEffect(() => {
    getOrderList();
  }, []);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing="1"
    >
      <Grid style={{ marginBottom: "15px" }} item lg={12} md={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item lg={6} md={6}>
            <h2>Sales Report List</h2>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12}>
            <SalesReportListFilter
              filterToken={filterToken}
              filterByPayment={filterPaymentTypes}
              getOrderListByYear={getOrderListByYear}
              getOrderListByDate={getOrderListByDate}
              getOrderList={getOrderList}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12}>
            {orderList.length > 0 && <SalesReportListTable data={orderList} />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SalesReportList;

import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import DashboardCards from "../Components/DashboardCards";
import DashboardSales from "../Components/DashboardSales";
import DashboardPurchase from "../Components/DashboardPurchase";
import DashboardExpense from "../Components/DashboardExpense";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import Swal from "sweetalert2";
// import socketIOClient from "socket.io-client";
// const socket = socketIOClient("http://localhost:4000");
// console.log(socket);
const Dashboard = () => {
  const [dayStart, setDayStart] = useState(false);
  const [displayDayStart, setDisplayDayStart] = useState(true);
  const [dayEnd, setDayEnd] = useState(false);
  const [displayDayEnd, setDisplayDayEnd] = useState(false);

  const getCurrentDayInformation = async () => {
    const response = await axios.get(`${getUrl()}/day`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    if (response.status === 200) {
      const { data } = response;
      console.log(data);
      console.log(dayStart);
      if (data.length > 0) {
        if (data[0].start === true) {
          setDisplayDayStart(false);
          setDisplayDayEnd(true);
          setDayStart(true);
          setDayEnd(false);
        } else if (data[0].end === true) {
          setDisplayDayStart(false);
          setDisplayDayEnd(false);
          setDayEnd(true);
          setDayStart(false);
        }
      } else {
        setDayStart(false);
        setDayEnd(false);
      }
    }
  };
  const triggerEndDay = async () => {
    const response = await axios.post(`${getUrl()}/day/end`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    if (response.status === 201) {
      setDayStart(false);
      setDayEnd(true);
      setDayStart(false);
      setDayEnd(false);
      Swal.fire("Day has end!", "Hope, you had a nice day", "success");
    }
  };
  const triggerStartDay = async () => {
    const response = await axios.post(`${getUrl()}/day/start`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    if (response.status === 201) {
      setDisplayDayEnd(true);
      setDisplayDayStart(false);
      setDayStart(true);
      setDayEnd(false);
      Swal.fire("Day has started!", "Have a nice day", "success");
    }
  };
  useEffect(() => {
    getCurrentDayInformation();
    // socket.on("startDay", () => {
    //   getCurrentDayInformation();
    // });
    // socket.on("endDay", () => {
    //   console.log("Day Ended");
    //   getCurrentDayInformation();
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {displayDayStart === true && (
        <Button onClick={triggerStartDay} variant="contained" color="primary">
          Start Day
        </Button>
      )}
      {displayDayEnd === true && (
        <Button onClick={triggerEndDay} variant="contained" color="warning">
          End Day
        </Button>
      )}
      {dayEnd === true && (
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
                <h2>Welcome Mr./Mrs {localStorage.getItem("username")}</h2>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={12} md={12}>
                <DashboardCards />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={12} md={12}>
                <DashboardSales />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={12} md={12}>
                <DashboardPurchase />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={12} md={12}>
                <DashboardExpense />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Dashboard;

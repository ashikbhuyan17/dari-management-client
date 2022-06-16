import React, { useEffect, useState, useRef } from "react";
import {Card,CardContent,Divider,Grid, Button,Avatar } from "@material-ui/core";
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import ReactToPrint from "react-to-print";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getUrl from "../../../../HTTP/url";
import { getAccessToken } from "../../../../HTTP/token";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
const SalesDetails = () => {
    const navigate = useNavigate();
    const componentRef = useRef();
    const {id} = useParams();
    const [order,setOrder] = useState([]);
    const getOrderDetails = async()=>{
        try{
            const response = await axios.get(`${getUrl()}/order/detail/${id}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
            if(response.status===200){
                const {data} = response;
                setOrder(data);
            }
        }
        catch(error){   
            MySwal.fire({
                icon: 'error',
                title: 'Opps...',
                text: `Sorry something occured!`,
              });
        }
    }
    useEffect(()=>{
        getOrderDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const goBack = async()=>{
        navigate(`/report/sales`);
    }
  return (
        <>
            {order && order.length===0 ?(<></>):( 
            <Grid container style={{ height: "100vh",overflowY:"auto" }}>
            <Grid item lg={12} md={12}>
            <Card>
                <CardContent>
                    <Grid 
                      container
                      direction="row"
                      alignItems="center" 
                      spacing="2">
                      <Grid item lg={3} md={3}>
                        <Button
                        color="primary"
                        variant="contained"
                        onClick={goBack}
                        fullWidth>Return</Button>
                      </Grid>
                      <Grid item lg={6} md={6}>
                        <h1>Order Details</h1>
                      </Grid>
                    </Grid>
                </CardContent>
                <Divider/>
                <CardContent 
                ref={componentRef} 
                style={{ fontSize:"10px",margin:"0 auto",width:"60mm" }}>
                    <div><Avatar 
                          style={{ margin:"0 auto",width:"20mm",height:"10mm",
                          backgroundPosition:"center",backgroundRepeat:"no-repeat",
                          backgroundSize:"cover" }} 
                          src="https://res.cloudinary.com/chiranswe/image/upload/v1633716259/desha_logo-removebg-preview_xf8sec.png"/>
                    </div>
                    <div>
                          <div style={{ textAlign:"center" }}>
                              <span>DESHA Tower, Upazila Moor</span><br />
                              <span>Kushtia-Jhenaidah Highway, Kushtia</span><br />
                              <span>Mobile No: 01720510368,01720510311</span><br />
                              <span>Mushak: 6.3</span><br />
                              <span>Bin :002535974-0903</span>
                          </div>
                        <div style={{ display:"flex" }}>
                            <span style={{ width:"30%",height:"2mm",alignItem:"center",background:"rgba(0,0,0,0.1)" }}></span>
                            <span style={{ width:"40%",textAlign:"center"}}>
                              Order Bill
                            </span>
                            <span style={{ width:"30%",height:"2mm",alignItem:"center",background:"rgba(0,0,0,0.1)" }}></span>
                        </div>
                        <div>
                            <span>Table: {order.table}</span><br />
                            <span>Waiter: {order.waiter}</span><br />
                            <span>Customer: {order.customer}</span><br />
                            <span>Phone: {order.customerPhone}</span>
                        </div>
                        <div style={{ display:"flex",marginTop:"0" }}>
                            <div style={{ width:"70%"}}>
                              <span>Date: {order.orderDate}</span><br />
                              <span>Number Of Guests: {order.guestNumber}</span><br />
                              <span>Chalan No: 1776</span><br />
                              <span>NRB Invoice No: 002121XMYVETY086</span><br />
                              <span style={{ fontSize:"13px" }}><strong>{order.paymentStatus}</strong></span>
                            </div>
                            <div style={{ width:"30%",float:"right"}}>
                                <span>Time: {order.orderTime}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex",
                    borderTop:"2px dotted rgba(0,0,0,0.3)", borderBottom:"2px dotted rgba(0,0,0,0.3)" }}>
                          <span style={{ width:"40%" }}>Item Name</span><br />
                          <span style={{ width:"20%" }}>-Qty</span><br />
                          <span style={{ width:"20%" }}>Price</span><br />
                          <span style={{ width:"20%" }}>T.Price</span>
                    </div>
                    <div style={{borderBottom:"2px dotted rgba(0,0,0,0.3)" }}>
                        {order.items.map((item)=>{
                            return (
                                <div style={{ display:"flex" }}>
                                      <span style={{ width:"40%" }}>{item.product}</span><br />
                                      <span style={{ width:"20%" }}>-{item.quantity}</span><br />
                                      <span style={{ width:"20%" }}>{item.price}</span><br />
                                      <span style={{ width:"20%" }}>{item.subtotal}</span>
                                </div>
                            )
                        })}
                    </div>
                      <div style={{ display: "flex",margin:"1px 0",
                      borderBottom:"2px dotted rgba(0,0,0,0.3)",borderTop:"2px dotted rgba(0,0,0,0.3)" }}>
                          <span style={{ width:"80%" }}><strong>Gross Total</strong></span>
                          <span style={{ width:"20%" }}>{order.grossTotal}</span>
                      </div>
                      <div style={{margin:"1px 0",
                      borderBottom:"2px dotted rgba(0,0,0,0.3)",borderTop:"2px dotted rgba(0,0,0,0.3)" }}>
                          <div style={{ display:"flex" }}>
                              <span style={{ width:"80%" }}><strong>-Vat({order.vat}%)</strong></span>
                              <span style={{ width:"20%" }}>{order.vatAmount}</span>
                          </div>
                      </div>
                      <div style={{margin:"1px 0",
                      borderBottom:"2px dotted rgba(0,0,0,0.3)",borderTop:"2px dotted rgba(0,0,0,0.3)" }}>
                          <div style={{ display:"flex" }}>
                              <span style={{ width:"80%" }}><strong>NET TOTAL</strong></span>
                              <span style={{ width:"20%" }}>{order.grandTotal}</span>
                          </div>
                          <div style={{ display:"flex" }}>
                              <span style={{ width:"80%" }}><strong>TOTAL PAID</strong></span>
                              <span style={{ width:"20%" }}>{order.paidAmount}</span>
                          </div>
                          <div style={{ display:"flex" }}>
                              <span style={{ width:"80%" }}><strong>REMAINING AMOUNT</strong></span>
                              <span style={{ width:"20%" }}>{order.dueAmount}</span>
                          </div>
                      </div>
                    <div style={{ margin:"1px 0",borderTop:"2px dotted rgba(0,0,0,0.3)" }}>
                        <p>THANK YOU, COME AGAIN</p>
                        <p>Powered by: somikoron it services, www.somikoronits.com</p>
                    </div>
                </CardContent>
                <Divider/>
                <CardContent>
                    <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing="1">
                      <Grid item lg={12} md={12}>
                        <ReactToPrint
                            trigger={() => <Button
                                fullWidth
                                variant="contained"
                                color="success"
                                endIcon={<SaveOutlinedIcon/>}
                              >
                                Print
                              </Button>}
                            content={() => componentRef.current}
                        />
                          
                      </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
          </Grid>)}
        </>
  );
};

export default SalesDetails;

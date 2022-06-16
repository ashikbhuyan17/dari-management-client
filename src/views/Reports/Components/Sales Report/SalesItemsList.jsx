import React, { useEffect, useState } from "react";
import { Grid, Card, Table, TableHead, TableRow, TableCell } from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";
import getUrl from "../../../../HTTP/url";
import { getAccessToken } from "../../../../HTTP/token";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
const SalesItemsList = () => {
    const {orderid} = useParams();
    const [items,setItems] = useState([]);
    const getOrderItems = async()=>{
        try{
            const response = await axios.get(`${getUrl()}/order/items/${orderid}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
            if(response.status===200){
                const {data} = response;
                setItems(data);
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
        getOrderItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
      <Card>
          <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center" 
            spacing="1">
            <Grid item lg={12} md={12}>
                  <Grid 
                  container
                  direction="row"
                  spacing="1">
                      <h3>Sales Item</h3>
                  </Grid>
              </Grid>
            <Grid item lg={12} md={12}>
                <div style={{ height: 400, width: "100%",overflowX:"auto",marginTop:"15px" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Total Quantity</TableCell>
                                <TableCell>Sub Total</TableCell>
                            </TableRow>
                            {items.map((item)=>{
                                return (
                                    <TableRow>
                                        <TableCell>{item.product}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.subtotal}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableHead>
                    </Table>
                </div>
            </Grid>
        </Grid>
      </Card>
  );
};

export default SalesItemsList;

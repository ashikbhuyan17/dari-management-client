import React, { useEffect, useState } from "react";
import { Grid, Button, MenuItem, Menu, Card } from "@material-ui/core";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
const MySwal = withReactContent(Swal)
const PurchaseList = () => {
  const [list, setPurchaseList] = useState()

  const [pageNum, setPageNum] = useState(0)
  console.log("pageNum", pageNum)

  const [numOfPages, setNumOfPages] = useState(0)
  const pages = new Array(numOfPages).fill(null).map((v, i) => i)
  console.log('pages', pages);

  const gotoNext = () => {
    setPageNum(Math.min(numOfPages - 1, pageNum + 1))
  }

  const gotoPrevious = () => {
    setPageNum(Math.max(0, pageNum - 1))
  }

  useEffect(() => {
    getPurchase()
  }, [])

  const getPurchase = async () => {

    const response = await axios.get(`http://localhost:5000/api/purchase/getPurchase?page=${pageNum}`);
    console.log(response.data?.purchaseData);
    setPurchaseList(response?.data?.purchaseData)
    setNumOfPages(response?.data?.totalPages)

  }

  const deleteProductCategoryList = async (id) => {
    console.log("id", id);
    console.log(id)
    const response = await axios.delete(`http://localhost:5000/api/purchase/deletePurchase/${id}`);
    if (response.status === 200) {
      MySwal.fire({
        icon: 'success',
        title: 'Delete Success...',
      });
      getPurchase();
    }
  }
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
            <h2>Purchase List</h2>
          </Grid>
        </Grid>
        <Card>
          <TableContainer component={Paper} style={{ marginTop: '30px' }}>
            <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Batch No</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Purchase Type</TableCell>
                  <TableCell>Total Price</TableCell>
                  <TableCell>Description</TableCell>

                  <TableCell>Action</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {list?.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"> {row.batch_no}</TableCell>
                    <TableCell component="th" scope="row"> {row.quantity}</TableCell>
                    <TableCell component="th" scope="row"> {row.purchase_type}</TableCell>
                    <TableCell component="th" scope="row"> {row.total_price}</TableCell>
                    <TableCell component="th" scope="row"> {row.description}</TableCell>


                    <TableCell align="right" style={{ width: '150px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined">Edit</Button>
                        <Button variant="outlined" onClick={() => deleteProductCategoryList(row._id)}>
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button onClick={gotoPrevious} className='preNext'>Previous</button>
            {
              pages?.map((pageIndex) => {
                return (<button key={pageIndex} className='paginationBtn' onClick={() => setPageNum(pageIndex)}>{pageIndex + 1}</button>)
              })
            }
            <button onClick={gotoNext} className='preNext'>Next</button>

          </div>

        </Card>
      </Grid>
    </Grid>
  );
};

export default PurchaseList;

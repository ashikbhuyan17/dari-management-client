import React, { useEffect, useState } from "react";
import { Grid, Button, MenuItem, Menu, Card } from "@material-ui/core";
import PrintIcon from '@material-ui/icons/Print'
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
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import './PurchaseReport.css'

const MySwal = withReactContent(Swal)
const RawMaterialIncreaseStockReport = () => {
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

    const response = await axios.get(`https://immense-badlands-33128.herokuapp.com/api/purchase/getPurchase?page=${pageNum}`);
    console.log(response.data?.purchaseData);
    setPurchaseList(response?.data?.purchaseData)
    setNumOfPages(response?.data?.totalPages)

  }


  const studentData = [
    {
      id: 1,
      name: "Neeraj",
      email: "neeraj@gmail.com",
      year: 2015,
      fee: 167000,
    },
    {
      id: 2,
      name: "Vikas",
      email: "vikas@gmail.com",
      year: 2013,
      fee: 785462,
    },

    {
      id: 3,
      name: "Rahul",
      email: "rahul@gmail.com",
      year: 2020,
      fee: 784596,
    }
  ]


  const column = [
    { title: "Name", field: "name", },
    { title: "Email", field: "email", },
    { title: "Year", field: "year", type: "numeric" },
    { title: "Fee", field: 'fee', type: "currency" }]

  const columns = [
    { title: "batch_no", field: "batch_no", },
    { title: "purchase_type", field: "purchase_type", },
    { title: "quantity", field: "quantity" },
    { title: "total_price", field: 'total_price' },
    { title: "description", field: 'description' },

  ]

  const downloadPdf = () => {
    console.log("pdf", list)
    const doc = new jsPDF()
    doc.text("Student Details", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: list
    })
    doc.save('table.pdf')
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
          <div className="purchase">
            <div><h2>Purchase List</h2></div>
            <div><button onClick={() => downloadPdf()}>pdf generate</button></div>
          </div>
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


                    {/* <TableCell align="right" style={{ width: '150px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined">Edit</Button>
                        <Button variant="outlined" onClick={() => deleteProductCategoryList(row._id)}>
                          Delete
                        </Button>
                      </div>
                    </TableCell> */}
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
    // <Grid 
    //   container
    //   direction="row"
    //   justifyContent="center"
    //   alignItems="center" 
    //   spacing="1">
    //   <Grid 
    //   style={{ marginBottom: "15px" }}
    //   item 
    //   lg={12} md={12}>
    //       <Grid 
    //       container
    //       direction="row"
    //       justifyContent="flex-start"
    //       alignItems="center">
    //           <Grid item lg={12} md={12}>
    //               <RawMaterialStockIncreaseReportTable/>
    //           </Grid>
    //       </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default RawMaterialIncreaseStockReport;

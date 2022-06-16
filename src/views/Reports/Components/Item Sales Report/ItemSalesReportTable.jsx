import React, { useRef } from "react";
import { Grid, Card, Button } from "@material-ui/core";
import ReactToPrint from "react-to-print";
import { CSVLink } from "react-csv";
const ItemSalesReportTable = ({data,date}) => {
    const componentRef = useRef();
    const headers = [
        {label: "Product",key:"name"},
        {label: "Total Item Sold",key:"totalquantitysold"},
        {label: "Total Amount Recieved",key:"totalamount"},
    ]
  return (
      <Card>
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center" 
            spacing="1">
            <Grid item lg={6} md={6}>
            <CSVLink 
            data={data} 
            headers={headers}
            style={{ textDecoration:"none" }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    // onClick={exportToExcel}
                    >
                        Download as excel
                    </Button>
            </CSVLink>
            </Grid>
            <Grid item lg={6} md={6}>
                <ReactToPrint
                    trigger={() => <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        // endIcon={<SaveOutlinedIcon/>}
                        >
                        Print
                        </Button>}
                    content={() => componentRef.current}
                />
            </Grid>
            <Grid item lg={12} md={12}>
                <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center" 
                spacing="1">
                    <Grid item lg={12} md={12}>
                        <div ref={componentRef}>
                            <div style={{ display: "flex" }}>
                                <p style={{ width:"40%" }}><strong>Month / Date: </strong> {date}</p>
                                <h3 style={{ width:"60%" }}>Monthly / Daily Sales Report</h3>
                            </div>
                            <table border="1px">
                                <thead>
                                    <tr>
                                        <td>Product</td>
                                        <td>Total Item Sold</td>
                                        <td>Total Amount Recieved</td>
                                    </tr>
                                    {data.map((item)=>{
                                        return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.totalquantitysold}</td>
                                            <td>{item.totalamount}</td>
                                        </tr>)
                                    })}
                                </thead>
                            </table>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Card>
  );
};

export default ItemSalesReportTable;

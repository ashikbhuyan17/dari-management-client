import React, { useRef } from "react";
import { Grid, Card, Button } from "@material-ui/core";
import ReactToPrint from "react-to-print";
// import { CSVLink } from "react-csv";
const ProfitReportTable = ({data,date}) => {
    const componentRef = useRef();
    // const reports = data.reports;
  return (
      <Card>
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center" 
            spacing="1">
            {/* <Grid item lg={6} md={6}>
            <CSVLink data={reports} style={{ textDecoration:"none" }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    // onClick={exportToExcel}
                    >
                        Download as excel
                    </Button>
            </CSVLink>
            </Grid> */}
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
                                <p style={{ width:"40%" }}><strong>Month / Year: </strong> {date}</p>
                                <h3 style={{ width:"60%" }}>Monthly / Yearly Profit Report</h3>
                            </div>
                            <table border="1px">
                                <thead>
                                    <tr>
                                        <td>Serial No</td>
                                        <td>Year</td>
                                        <td>Month</td>
                                        <td>Profit Including Complimentary / Due</td>
                                        <td>Loss Including Complimentary / Due</td>
                                        <td>Profit Excluding Complimentary / Due</td>
                                        <td>Loss Excluding Complimentary / Due</td>
                                        <td>Total Purchase</td>
                                        <td>Total Expense</td>
                                        <td>Total Purchase And Expense</td>
                                    </tr>
                                    {data.map((profit,index)=>{
                                        return (
                                        <tr key={index}>
                                            <td>{Number(index)+1}</td>
                                            <td>{profit.year}</td>
                                            <td>{profit.month}</td>
                                            <td>{profit.profitIncludingDueOrComplimentary > 0 ? (<span>{profit.profitIncludingDueOrComplimentary}</span>): (<span></span>)}</td>
                                            <td>{profit.profitIncludingDueOrComplimentary < 0 ? (<span>{profit.profitIncludingDueOrComplimentary}</span>): (<span></span>)}</td>
                                            <td>{profit.profitExcludingDueOrComplimentary > 0 ? (<span>{profit.profitExcludingDueOrComplimentary}</span>): (<span></span>)}</td>
                                            <td>{profit.profitExcludingDueOrComplimentary < 0 ? (<span>{profit.profitExcludingDueOrComplimentary}</span>): (<span></span>)}</td>
                                            <td>{profit.totalPurchase}</td>
                                            <td>{profit.totalExpense}</td>
                                            <td>{profit.totalPurchaseExpense}</td>
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

export default ProfitReportTable;

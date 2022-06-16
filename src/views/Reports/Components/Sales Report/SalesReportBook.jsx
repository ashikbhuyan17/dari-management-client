import React, { useRef } from "react";
import { Grid, Card, Button } from "@material-ui/core";
import ReactToPrint from "react-to-print";
import { CSVLink } from "react-csv";
const SalesReportBook = ({ data, date }) => {
  const componentRef = useRef();
  const reports = data.reports;
  return (
    <Card>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing="1"
      >
        <Grid item lg={6} md={6}>
          <CSVLink data={reports} style={{ textDecoration: "none" }}>
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
            trigger={() => (
              <Button
                fullWidth
                variant="contained"
                color="success"
                // endIcon={<SaveOutlinedIcon/>}
              >
                Print
              </Button>
            )}
            content={() => componentRef.current}
          />
        </Grid>
        <Grid item lg={12} md={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing="1"
          >
            <Grid item lg={12} md={12}>
              <div ref={componentRef}>
                <div style={{ display: "flex" }}>
                  <p style={{ width: "40%" }}>
                    <strong>Month / Date: </strong> {date}
                  </p>
                  <h3 style={{ width: "60%" }}>Monthly / Daily Sales Report</h3>
                </div>
                <table border="1px">
                  <thead>
                    <tr>
                      <td>Serial No</td>
                      <td>Order Id</td>
                      <td>Date</td>
                      <td>Guest Name</td>
                      <td>Cell No</td>
                      <td>Gross Amount</td>
                      <td>Vat Amount</td>
                      <td>Grand Total</td>
                      <td>Cash</td>
                      <td>Card</td>
                      <td>Company Due</td>
                      <td>Complimentary</td>
                      <td>Complimentary / Due For</td>
                      <td>Cashier Name / Bill Print By</td>
                    </tr>
                    {data.reports.map((order, index) => {
                      return (
                        <tr key={order.id}>
                          <td>{Number(index) + 1}</td>
                          <td>
                            {!order.token ? (
                              <span></span>
                            ) : (
                              <span>{order.token}</span>
                            )}
                          </td>
                          <td>{order.orderdate}</td>
                          <td>{order.customer}</td>
                          <td>{order.customerPhone}</td>
                          <td>{order.grossamount}</td>
                          <td>{order.vatamount}</td>
                          <td>{order.grandtotal}</td>
                          <td>
                            {!order.cash ? (
                              <span></span>
                            ) : (
                              <span>{order.cash}</span>
                            )}
                          </td>
                          <td>
                            {!order.card ? (
                              <span></span>
                            ) : (
                              <span>{order.card}</span>
                            )}
                          </td>
                          <td>
                            {!order.due ? (
                              <span></span>
                            ) : (
                              <span>{order.due}</span>
                            )}
                          </td>
                          <td>
                            {!order.complimentary ? (
                              <span></span>
                            ) : (
                              <span>{order.complimentary}</span>
                            )}
                          </td>
                          <td>{order.complimentaryOrDueFor}</td>
                          <td>{order.billprintby}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Total Gross Amount: {data.totalGross}</td>
                      <td>Total Vat Amount: {data.totalVat}</td>
                      <td>Total Grand Amount: {data.totalSale}</td>
                      <td>Total Cash Amount: {data.totalCash}</td>
                      <td>Total Card Amount: {data.totalCard}</td>
                      <td>Total Due Amount: {data.totalDue}</td>
                      <td>
                        Total Complimentary Amount: {data.totalComplimentary}
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                </table>
                <br />
                <table border="1px">
                  <tr>
                    <th>Cash</th>
                    <td>{data.totalCash}</td>
                  </tr>
                  <tr>
                    <th>Card</th>
                    <td>{data.totalCard}</td>
                  </tr>
                  <tr>
                    <th>Due</th>
                    <td>{data.totalDue}</td>
                  </tr>
                  <tr>
                    <th>Complimentary</th>
                    <td>{data.totalComplimentary}</td>
                  </tr>
                  <tr>
                    <th>Total Sell</th>
                    <td>{data.totalSale}</td>
                  </tr>
                </table>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SalesReportBook;

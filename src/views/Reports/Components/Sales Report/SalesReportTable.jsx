import React,{useState} from "react";
import { Grid, Card, Button } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal);
const SalesReportTable = ({data}) => {
  const navigate = useNavigate();
    const columns = [
      { field: 'token', headerName: 'Token Number', width: 180 },
      {
        field: 'vatamount',
        headerName: 'Vat Amount',
        width: 190,
        editable: true,
      },
      {
        field: 'grossamount',
        headerName: 'Gross Amount',
        width: 220,
        editable: true,
      },
      {
        field: 'grandtotal',
        headerName: 'Grand Total',
        width: 220,
        editable: true,
      },
      {
        field: 'totalitem',
        headerName: 'Total Ordered',
        width: 220,
        editable: true,
      },
      {
        field: 'table',
        headerName: 'Table',
        width: 220,
        editable: true,
      },
      {
        field: 'waiter',
        headerName: 'Waiter Name',
        width: 220,
        editable: true,
      },
      {
        field: 'orderingtime',
        headerName: 'Order Time',
        width: 220,
        editable: true,
      },
      {
        field: 'orderdate',
        headerName: 'Date',
        width: 220,
        editable: true,
      },
      {
        field: 'customer',
        headerName: 'Customer',
        width: 220,
        editable: true,
      },
      {
        field: 'customerphone',
        headerName: 'Customer Phone',
        width: 220,
        editable: true,
      },
      {
        field: 'guestnumber',
        headerName: 'Total Guest',
        width: 220,
        editable: true,
      },
      {
        field: 'paymentType',
        headerName: 'Payment Type',
        width: 220,
        editable: true,
      },
      {
        field: 'paymentStatus',
        headerName: 'Payment Status',
        width: 220,
        editable: true,
      },
      {
        field: 'paidAmount',
        headerName: 'Paid Amount',
        width: 220,
        editable: true,
      },
      {
        field: 'complimentaryOfDueFor',
        headerName: 'Complimentart / House / Due Bill For',
        width: 220,
        editable: true,
      },
    ];
  const onSelect = (event)=>{
    const {data} = event;
    const {id} = data;
    setSelectedId(id);
  }
  // eslint-disable-next-line no-unused-vars
  const [selectedId,setSelectedId] = useState(null);
  const checkItems = async()=>{
    if(!selectedId){
      MySwal.fire({
        icon: 'error',
        title: 'Opps...',
        text: `You might have forget to select and order!`,
      });
    }else{
      navigate(`/report/sales/order/items/${selectedId}`);
    }
  }
  const getDetails = async()=>{
    if(!selectedId){
      MySwal.fire({
        icon: 'error',
        title: 'Opps...',
        text: `You might have forget to select and order!`,
      });
    }else{
      navigate(`/report/sales/details/${selectedId}`);
    }
  }
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
                      <Grid item lg={3} md={3}>
                          <Button
                          color="success"
                          variant="contained"
                          onClick={checkItems}
                          fullWidth>
                              Order Items
                          </Button>
                      </Grid>
                      <Grid item lg={3} md={3}>
                          <Button
                          color="success"
                          variant="contained"
                          onClick={getDetails}
                          fullWidth>
                              Bill Details
                          </Button>
                      </Grid>
                  </Grid>
              </Grid>
            <Grid item lg={12} md={12}>
                <div style={{ height: 400, width: "100%",overflowX:"auto",marginTop:"15px" }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onRowSelected={onSelect}
                        disableSelectionOnClick
                    />
                </div>
            </Grid>
        </Grid>
      </Card>
  );
};

export default SalesReportTable;

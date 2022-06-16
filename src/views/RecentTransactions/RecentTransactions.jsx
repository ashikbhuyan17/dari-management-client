import React,{useState} from "react";
import { Card, CardContent, Grid, Table, TableHead, TableRow,TableCell,
  TableBody,TextField, InputAdornment, Pagination, FormControl, Select,
  InputLabel,MenuItem } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PrintIcon from '@material-ui/icons/Print';

const RecentTransactions = () => {
  const customers = [
    {id: 1,invoiceId: "IN#0001",name: "John Doe", total: 135000},
    {id: 2,invoiceId: "IN#0002",name: "Alex", total: 235000},
    {id: 3,invoiceId: "IN#0003",name: "Alexa", total: 535000},
    {id: 4,invoiceId: "IN#0004",name: "Kim", total: 1350000},
    {id: 5,invoiceId: "IN#0005",name: "Mike", total: 555000},
    {id: 6,invoiceId: "IN#0006",name: "John Doe", total: 135000},
    {id: 7,invoiceId: "IN#0007",name: "Alex", total: 235000},
    {id: 8,invoiceId: "IN#0008",name: "Alexa", total: 535000},
    {id: 9,invoiceId: "IN#0009",name: "Kim", total: 1350000},
    {id: 10,invoiceId: "IN#00010",name: "Mike", total: 555000},
    {id: 11,invoiceId: "IN#00011",name: "John Doe", total: 135000},
    {id: 12,invoiceId: "IN#00012",name: "Alex", total: 235000},
    {id: 13,invoiceId: "IN#00013",name: "Alexa", total: 535000},
    {id: 14,invoiceId: "IN#00014",name: "Kim", total: 1350000},
    {id: 15,invoiceId: "IN#00015",name: "Mike", total: 555000},
    {id: 16,invoiceId: "IN#00016",name: "John Doe", total: 135000},
    {id: 17,invoiceId: "IN#00017",name: "Alex", total: 235000},
    {id: 18,invoiceId: "IN#00018",name: "Alexa", total: 535000},
    {id: 19,invoiceId: "IN#00019",name: "Kim", total: 1350000},
    {id: 20,invoiceId: "IN#00020",name: "Mike", total: 555000},
    {id: 21,invoiceId: "IN#00021",name: "Mike", total: 555000},
    {id: 22,invoiceId: "IN#00022",name: "Mike", total: 555000},
    {id: 23,invoiceId: "IN#00023",name: "Mike", total: 555000},
    {id: 24,invoiceId: "IN#00024",name: "Mike", total: 555000},
    {id: 25,invoiceId: "IN#00025",name: "Mike", total: 555000},
  ]
  const [totalCustomer] = useState(customers.length);
  const [rowsPerPage,setRowsPerPage] = useState(10);
  const updateTotalPageNumber = (value)=>{
    setRowsPerPage(Number(value));
    const totalPage = getTotalPageNumber(value);
    const start = getStartingIndex(1,value);
    const end = getEndingIndex(1,value);
    const filteredCustomerList = getFilteredCustomerList(start,end);
    setFilteredCustomerList(filteredCustomerList);
    setTotalPageNumber(totalPage);
  }
  const getTotalPageNumber = (totalRows = 10)=>{
    let totalPage = totalCustomer / totalRows;
    if(totalPage % 1 === 0) return totalPage;
    else{
      totalPage = Math.floor(totalPage) + 1;
      return totalPage;
    }
  }
  const [totalPageNumber,setTotalPageNumber] = useState(getTotalPageNumber());
  const [page,setPage] = useState(1);
  const changePageNumber = (event,value)=>{
    setPage(Number(value));
    const start = getStartingIndex(value);
    const end = getEndingIndex(value);
    const filteredCustomerList = getFilteredCustomerList(start,end);
    setFilteredCustomerList(filteredCustomerList);
  }
  const getStartingIndex = (pageNumber,rowsPerPage = 10)=>{
    const startingIndex = ((pageNumber*rowsPerPage) - rowsPerPage) + 1;
    return startingIndex;
  }
  const getEndingIndex = (pageNumber,rowsPerPage = 10)=>{
    let endingIndex = (pageNumber*rowsPerPage);
    if(endingIndex > totalCustomer) endingIndex = Number(endingIndex) - (Number(endingIndex)-Number(totalCustomer));
    return endingIndex;
  }
  const getFilteredCustomerList = (startIndex = 1, endIndex = 10)=>{
    const filteredCustomers = customers.filter((customer)=>{return customer.id >=startIndex && customer.id <=endIndex});
    // const filteredCustomers = customers.splice(startIndex-1,endIndex);
    return filteredCustomers;
  }
  const [filteredCustomerList,setFilteredCustomerList] = useState(getFilteredCustomerList());
  return (
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center" 
        spacing="1">
        <Grid item lg={12} md={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item lg={12} md={12}>
                  <TextField 
                  fullWidth
                  id="outlined-basic" 
                  label="Search" 
                  variant="outlined" 
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                            <SearchIcon 
                            color="primary"
                            style={{ cursor: "pointer" }} />
                      </InputAdornment>
                    ),
                  }}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid container>
                <Grid item lg={4} md={4}>
                  <FormControl 
                      variant="filled"
                      fullWidth>
                    <InputLabel id="demo-simple-select-label">Data Per Page</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={rowsPerPage}
                      onChange={(event)=>updateTotalPageNumber(event.target.value)}
                      >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Serial</TableCell>
                    <TableCell>Invoice Id</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Total Amount</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCustomerList.map((customer,index)=>{
                    return (
                      <TableRow key={index}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{customer.invoiceId}</TableCell>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.total}</TableCell>
                        <TableCell>
                          <Grid container>
                            <Grid item lg={4} md={4}>
                              <EditIcon
                                color="warning"
                                style={{ cursor: "pointer" }}
                              />
                            </Grid>
                            <Grid item lg={4} md={4}>
                              <DeleteIcon
                                color="error"
                                style={{ cursor: "pointer" }}
                              />
                            </Grid>
                            <Grid item lg={4} md={4}>
                              <PrintIcon
                                color="success"
                                style={{ cursor: "pointer" }}
                              />
                            </Grid>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
            <CardContent>
              <Pagination 
                page={page}
                onChange={changePageNumber}
                count={totalPageNumber} 
                variant="outlined"
                shape="rounded" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
};

export default RecentTransactions;

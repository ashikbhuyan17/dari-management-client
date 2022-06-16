import React, { useRef } from "react";
import { Grid, Card, Button } from "@material-ui/core";
import ReactToPrint from "react-to-print";
import { CSVLink } from "react-csv";
const PrintGeneralItemsStock = ({data}) => {
    const componentRef = useRef();
    const headers = [
        {label: "Item Name",key:"name"},
        {label: "Current Stock",key:"instock"},
        {label: "Unit",key:"unit"},
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
            <Grid 
            item lg={12} md={12}>
                <Grid 
                style={{ marginTop: "15px" }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center" 
                spacing="1">
                    <Grid item lg={12} md={12}>
                        <div ref={componentRef}>
                            <table border="1px">
                                <thead>
                                    <tr>
                                        <td>Serial</td>
                                        <td>General Item</td>
                                        <td>Current Stock</td>
                                        <td>Unit</td>
                                    </tr>
                                    {data.map((rawmaterial,index)=>{
                                        return (
                                        <tr key={rawmaterial.id}>
                                            <td>{Number(index)+1}</td>
                                            <td>{rawmaterial.name}</td>
                                            <td>{rawmaterial.instock}</td>
                                            <td>{rawmaterial.unit}</td>
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

export default PrintGeneralItemsStock;

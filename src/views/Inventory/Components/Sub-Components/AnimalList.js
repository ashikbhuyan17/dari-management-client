import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAccessToken } from '../../../../HTTP/token';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Button, MenuItem, Menu } from "@material-ui/core";
import { Typography } from '@material-ui/core';


const AnimalList = () => {
    const [pageNum, setPageNum] = useState(0)
    const [getAnimal, setGetAnimal] = useState()
    console.log('getAnimal', getAnimal)
    const getAnimalList = async () => {
        const response = await axios.get(`http://localhost:5000/api/animal/getAnimal?page=${pageNum}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        console.log('getAnimal', response)
        if (response.status === 200) {
            setGetAnimal(response.data.animal)
        }
    }
    useEffect(() => {
        getAnimalList()
    }, [pageNum])
    const deleteProductCategoryList = () => { }
    return (
        <>
            <Typography variant="h2" style={{ marginTop: '50px' }}>
                Product List
            </Typography>
            <TableContainer component={Paper} style={{ marginTop: '30px' }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Batch No</TableCell>
                            <TableCell>Id No</TableCell>

                            <TableCell>BioFlock_plantNo</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Gender</TableCell>

                            <TableCell>Age</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Buying Price</TableCell>
                            <TableCell>Selling Price</TableCell>



                            <TableCell>Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getAnimal?.map((row) => (
                            <TableRow
                                key={row.batch_no}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"> {row?.category?.name}</TableCell>
                                <TableCell component="th" scope="row"> {row?.batch_no}</TableCell>
                                <TableCell component="th" scope="row">{row?.id_no}</TableCell>
                                <TableCell component="th" scope="row">{row?.bio_flock_plant_no}</TableCell>
                                <TableCell component="th" scope="row">{row?.weight}</TableCell>
                                <TableCell component="th" scope="row">{row?.color}</TableCell>
                                <TableCell component="th" scope="row">{row?.gender}</TableCell>

                                <TableCell component="th" scope="row">{row?.age}</TableCell>
                                <TableCell component="th" scope="row">{row?.quantity}</TableCell>
                                <TableCell component="th" scope="row">{row?.buying_price}</TableCell>
                                <TableCell component="th" scope="row">{row?.selling_price}</TableCell>


                                <TableCell align="right" style={{ width: '150px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button variant="outlined">Edit</Button>
                                        <Button variant="outlined" onClick={() => deleteProductCategoryList(row.id)}>
                                            Delete
                                        </Button>
                                    </div>
                                </TableCell>
                                {/* <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default AnimalList;
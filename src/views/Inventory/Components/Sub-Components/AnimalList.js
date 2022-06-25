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
import { Grid, Button, MenuItem, Menu, Autocomplete, TextField, FormControl, InputLabel, Select } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import './AnimalList.css'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

// import {
//     Card,
//     CardContent,
//     Divider,
//     Grid,
//     TextField,
//     Button,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Alert,
//   } from "@material-ui/core";

const AnimalList = () => {
    const [pageNum, setPageNum] = useState(0)
    const [numOfPages, setNumOfPages] = useState(0)

    const pages = new Array(numOfPages).fill(null).map((v, i) => i)
    console.log('pages', pages);
    const [getAnimal, setGetAnimal] = useState()
    console.log("🚀 ~ file: AnimalList.js ~ line 40 ~ AnimalList ~ getAnimal", getAnimal)
    console.log("🚀  getAnimal", getAnimal?.animal_picture)

    const getAnimalList = async () => {
        const response = await axios.get(`https://immense-badlands-33128.herokuapp.com/api/animal/getAnimal?page=${pageNum}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        if (response.status === 200) {
            setGetAnimal(response.data.animal)
            setNumOfPages(response?.data?.totalPages)
        }
    }


    const gotoNext = () => {
        setPageNum(Math.min(numOfPages - 1, pageNum + 1))
    }

    const gotoPrevious = () => {
        setPageNum(Math.max(0, pageNum - 1))
    }

    const [addCategoryOpenModal, setAddCategoryOpenModal] = useState(false);
    const closeAddCategoryModal = () => {
        setAddCategoryOpenModal(false);
    }
    const deleteProductCategoryList = async (id) => {
        console.log(id)
        const response = await axios.delete(`https://immense-badlands-33128.herokuapp.com/api/animal/deleteAnimal/${id}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        if (response.status === 200) {
            closeAddCategoryModal();
            MySwal.fire({
                icon: 'success',
                title: 'Delete Success...',
            });
            getAnimalList();
        }
    }


    // const [category, setCategory] = useState()
    // console.log('setCategory', category)

    const getCategoryList = async (categoryId) => {
        // console.log('categoryId', categoryId);
        const response = await axios.get(`https://immense-badlands-33128.herokuapp.com/api/animal/getCategory/${categoryId}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        // console.log('getCategoryList', response);
        if (response.status === 200) {
            setGetAnimal(response.data.animal)

        }
    }


    // console.log('productCategoryList', productCategoryList)
    const [productCategoryList, setProductCategoryList] = useState();
    const getProductCategoryList = async () => {
        const response = await axios.get(`https://immense-badlands-33128.herokuapp.com/api/category/getCategory`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        if (response.status === 200) {

            var arr = [
            ]
            var result = response.data.categoryList.map(person => (arr.push({ label: person.name, value: person.slug, id: person._id })));
            setProductCategoryList(arr)

        }
    }


    useEffect(() => {
        getAnimalList()
        getProductCategoryList()
        getCategoryList()
    }, [pageNum])


    return (
        <>
            {/* <Typography variant="h2" style={{ marginTop: '50px' }}>
                Product List
            </Typography> */}
            <Grid
                container
                direction="row"
                spacing="2">

                {/* <Grid item lg={3} md={3}>
                    <Typography variant="h2">
                        Product List
                    </Typography>
                </Grid> */}
                {/* category */}

                <Grid item lg={6} md={6} sm={6} style={{ marginTop: '25px' }}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">
                            Select Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            // value={category}
                            onChange={(event) => getCategoryList(event.target.value)}
                            // onClick={getCategoryList}
                            label="Select Category"
                        >
                            {productCategoryList?.map((category) => {
                                return (
                                    <MenuItem key={category.label} value={category.id}>
                                        {category.value}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <TableContainer component={Paper} style={{ marginTop: '30px' }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Batch No</TableCell>
                            <TableCell>Id No</TableCell>
                            <TableCell>Image</TableCell>

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
                                        <Button variant="outlined" onClick={() => deleteProductCategoryList(row._id)}>
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


            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button onClick={gotoPrevious} className='preNext'>Previous</button>
                {
                    pages?.map((pageIndex) => {
                        return (<button key={pageIndex} className='paginationBtn' onClick={() => setPageNum(pageIndex)}>{pageIndex + 1}</button>)
                    })
                }
                <button onClick={gotoNext} className='preNext'>Next</button>

            </div>

        </>
    );
};

export default AnimalList;
import React, { useCallback, useEffect, useState } from "react";
import { Grid, Button, MenuItem, Menu } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import { Autocomplete, TextField } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Modal } from "@material-ui/core";
import AddCategoryModal from "../Components/Sub-Components/AddCategoryModal";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EditCategoryModal from "../Components/Sub-Components/EditCategoryModal";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MySwal = withReactContent(Swal)

const ProductCategories = () => {


  const [productCategoryList, setProductCategoryList] = useState();
  console.log('productCategoryList', productCategoryList)
  const a = productCategoryList?.map(data => console.log(data.label))
  const getProductCategoryList = async () => {
    const response = await axios.get(`https://immense-badlands-33128.herokuapp.com/api/category/getCategory`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
    console.log("getProductCategoryList", response)
    if (response.status === 200) {
      console.log(response.data.categoryList)
      const value = response.data.categoryList.map(data => console.log(data.name))
      console.log("value", value)

      var arr = [
      ]
      var result = response.data.categoryList.map(person => (arr.push({ label: person.name, value: person.slug, id: person._id })));
      setProductCategoryList(arr)

    }
  }



  const deleteProductCategoryList = async (id) => {
    console.log(id)
    const response = await axios.delete(`https://immense-badlands-33128.herokuapp.com/api/category/deleteCategory/${id}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
    console.log("getProductCategoryList", response)
    if (response.status === 200) {
      closeAddCategoryModal();
      MySwal.fire({
        icon: 'success',
        title: 'Delete Success...',
        // text: `${response.name}`,
      });
      setCategory("");
      // setDescription("");
      getProductCategoryList();
    }
  }


  useEffect(() => {
    getProductCategoryList();
  }, [])

  const [selectedId, setSelectedId] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [addCategoryOpenModal, setAddCategoryOpenModal] = useState(false);
  const openAddCategoryModal = () => {
    setAddCategoryOpenModal(true);
  }
  const closeAddCategoryModal = () => {
    setAddCategoryOpenModal(false);
  }
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const postCategory = useCallback(async () => {
    if (category === "") {
      setError(true);
      setErrorMessage('Please Fill All The fields');
    }
    else {
      setError(false);
      const data = {
        name: category,
      }
      const response = await axios.post(`https://immense-badlands-33128.herokuapp.com/api/category/create`, data, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
      if (response.status === 201) {
        closeAddCategoryModal();
        MySwal.fire({
          icon: 'success',
          title: 'Great...',
          // text: `${response.name}`,
        });
        setCategory("");
        // setDescription("");
        getProductCategoryList();
      }
    }
  }, [category, description])


  // const [editCategoryOpenModal, setEditCategoryOpenModal] = useState(false);
  // const openEditCategoryModal = () => {
  //   setEditCategoryOpenModal(true);
  // }
  // const closeEditCategoryModal = () => {
  //   setEditCategoryOpenModal(false);
  // }
  // const [editCategory, setEditCategory] = useState("");
  // const [editDescription, setEditDescription] = useState("");
  // const getCategory = async () => {
  //   if (!selectedId) {
  //     MySwal.fire({
  //       icon: 'success',
  //       title: 'Great...',
  //       text: `Please Select an item`,
  //     });
  //   }
  //   else {
  //     handleMenuClose();
  //     const response = await axios.get(`${getUrl()}/category/${selectedId}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
  //     if (response.status === 200) {
  //       const { data } = response;
  //       setEditDescription(data.description);
  //       setEditCategory(data.name);
  //       openEditCategoryModal();
  //     }
  //   }
  // }


  // updateCategory

  // const updateCategory = useCallback(async () => {
  //   const data = {
  //     name: editCategory,
  //     description: editDescription
  //   }
  //   const response = await axios.patch(`${getUrl()}/category/${selectedId}`, data, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
  //   if (response.status === 200) {
  //     closeEditCategoryModal();
  //     MySwal.fire({
  //       icon: 'success',
  //       title: 'Great...',
  //       text: `${response.data}`,
  //     });
  //     getProductCategoryList();
  //   }
  // }, [selectedId, editCategory, editDescription])


  // removeCategory

  // const removeCategory = async () => {
  //   handleMenuClose();
  //   MySwal.fire({
  //     title: 'Do you want to remove?',
  //     showCancelButton: true,
  //     confirmButtonText: 'Remove',
  //     cancelButtonText: `Keep`,
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       const response = await axios.delete(`${getUrl()}/category/${selectedId}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });

  //       if (response.status === 200) {
  //         MySwal.fire({
  //           icon: 'success',
  //           title: 'Great...',
  //           text: `${response.data}`,
  //         });
  //         getProductCategoryList();
  //       }
  //     } else if (result.isDenied) { }
  //   })
  // }

  return (
    <>
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
              <h2>Product Categories</h2>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing="2">
            <Grid item lg={3} md={3}>
              <Button
                onClick={openAddCategoryModal}
                aria-controls="simple-menu"
                aria-haspopup="true"
                color="success"
                fullWidth
                variant="contained"
                startIcon={<AddBoxIcon />}
              >
                Add
              </Button>

              {/* add product variation modal */}
              <Modal
                open={addCategoryOpenModal}
                onClose={closeAddCategoryModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <AddCategoryModal
                  isError={error}
                  errorMessage={errorMessage}
                  category={category}
                  setCategory={setCategory}
                  descripton={description}
                  setDescription={setDescription}
                  save={postCategory}
                  closeModal={closeAddCategoryModal} />
              </Modal>
            </Grid>
            <Grid item lg={4} md={4} style={{ marginLeft: '30px', padding: '0px' }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                // options={productCategoryList.map((option) => option.title)}
                options={productCategoryList?.map((option) => option.label)}
                renderInput={(params) => <TextField {...params} label="category list" />}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* {
          productCategoryList.length >0 && 
            <Grid item lg={12} md={12}>
              <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                      rows={productCategoryList}
                      columns={columns}
                      pageSize={5}
                      checkboxSelection
                      onRowSelected={onSelect}
                  />
              </div>
          </Grid>
        } */}
      </Grid>

      <TableContainer component={Paper} style={{ marginTop: '50px' }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>Slug</TableCell>

              <TableCell>Action</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {productCategoryList?.map((row) => (
              <TableRow
                key={row.label}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.value}
                </TableCell>
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

export default ProductCategories;

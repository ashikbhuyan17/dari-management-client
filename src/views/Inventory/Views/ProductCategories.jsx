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
const MySwal = withReactContent(Swal)
const ProductCategories = () => {


  const [productCategoryList, setProductCategoryList] = useState();
  console.log('productCategoryList', productCategoryList)
  const a = productCategoryList?.map(data => console.log(data.label))
  const getProductCategoryList = async () => {
    const response = await axios.get(`http://localhost:5000/api/category/getCategory`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
    console.log("getProductCategoryList", response)
    if (response.status === 200) {
      console.log(response.data.categoryList)
      const value = response.data.categoryList.map(data => console.log(data.name))
      console.log("value", value)

      var arr = [
      ]
      var result = response.data.categoryList.map(person => (arr.push({ label: person.name, value: person.slug })));
      setProductCategoryList(arr)

    }
  }
  useEffect(() => {
    getProductCategoryList();
  }, [])
  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'name',
      headerName: 'Category',
      width: 180,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 190,
      editable: true,
    }
  ];
  const onSelect = (event) => {
    const { data } = event;
    const { id } = data;
    setSelectedId(id);
  }
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
        // description: description
      }
      const response = await axios.post(`http://localhost:5000/api/category/create`, data, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
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
  const [editCategoryOpenModal, setEditCategoryOpenModal] = useState(false);
  const openEditCategoryModal = () => {
    setEditCategoryOpenModal(true);
  }
  const closeEditCategoryModal = () => {
    setEditCategoryOpenModal(false);
  }
  const [editCategory, setEditCategory] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const getCategory = async () => {
    if (!selectedId) {
      MySwal.fire({
        icon: 'success',
        title: 'Great...',
        text: `Please Select an item`,
      });
    }
    else {
      handleMenuClose();
      const response = await axios.get(`${getUrl()}/category/${selectedId}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
      if (response.status === 200) {
        const { data } = response;
        setEditDescription(data.description);
        setEditCategory(data.name);
        openEditCategoryModal();
      }
    }
  }
  const updateCategory = useCallback(async () => {
    const data = {
      name: editCategory,
      description: editDescription
    }
    const response = await axios.patch(`${getUrl()}/category/${selectedId}`, data, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
    if (response.status === 200) {
      closeEditCategoryModal();
      MySwal.fire({
        icon: 'success',
        title: 'Great...',
        text: `${response.data}`,
      });
      getProductCategoryList();
    }
  }, [selectedId, editCategory, editDescription])
  const removeCategory = async () => {
    handleMenuClose();
    MySwal.fire({
      title: 'Do you want to remove?',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      cancelButtonText: `Keep`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(`${getUrl()}/category/${selectedId}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });

        if (response.status === 200) {
          MySwal.fire({
            icon: 'success',
            title: 'Great...',
            text: `${response.data}`,
          });
          getProductCategoryList();
        }
      } else if (result.isDenied) { }
    })
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
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenu}
              fullWidth
              color="success"
              variant="contained"
              startIcon={<EditIcon />}
            >
              Actions
            </Button>
            <Menu
              // style={{ width: "550px" }}
              id="dd-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              transformOrigin={{ horizontal: "left", vertical: "top" }}
            >
              <MenuItem onClick={getCategory}>Edit</MenuItem>
              <MenuItem onClick={removeCategory}>Delete</MenuItem>
              {/* edit product category modal */}
              <Modal
                open={editCategoryOpenModal}
                onClose={closeEditCategoryModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <EditCategoryModal
                  category={editCategory}
                  setCategory={setEditCategory}
                  description={editDescription}
                  setDescription={setEditDescription}
                  save={updateCategory}
                  closeModal={closeEditCategoryModal} />
              </Modal>
            </Menu>

          </Grid>
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
          <Grid item lg={6} md={6}>
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
  );
};

export default ProductCategories;

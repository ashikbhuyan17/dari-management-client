import React, { useCallback, useEffect, useState } from "react";
import { Grid, Button, MenuItem, Menu } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import { Modal } from "@material-ui/core";
import AddProductModal from "./Sub-Components/AddProductModal";
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import EditProductModal from "./Sub-Components/EditProductModal";
const MySwal = withReactContent(Swal);
export const productList = [];
const AllProducts = () => {
  //   const navigate = useNavigate();
  const columns = [
    { field: "productcode", headerName: "Product Code", width: 250 },
    {
      field: "name",
      headerName: "Name",
      width: 180,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 190,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 220,
      editable: true,
    },
  ];

  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productCode, setProductCode] = useState("");
  const [editProductCode, setEditProductCode] = useState("");
  const getProductList = async () => {
    const response = await axios.get(`${getUrl()}/product/list`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    if (response.status === 200) {
      const { data } = response;
      setProductList(data);
    }
  };
  const getProductCategoryList = async () => {
    const response = await axios.get(`${getUrl()}/category/list`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    if (response.status === 200) {
      const { data } = response;
      setCategoryList(data);
    }
  };
  useEffect(() => {
    getProductCategoryList();
    getProductList();
  }, []);

  const [selectedId, setSelectedId] = useState();
  const onSelect = (event) => {
    const { data } = event;
    const { id } = data;
    if (selectedId) {
      setErrorMessage("Please Deselect The Previous one first");
    }
    console.log(selectedId);
    setSelectedId(id);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [editProductModalOpen, setEditProductModalOpen] = useState(false);
  const closeEditProductModal = () => {
    setEditProductModalOpen(false);
  };
  const openEditProductModalOpen = () => {
    setEditProductModalOpen(true);
  };
  const [addProductModalOpen, setAddProductModalOpen] = useState(false);
  const closeAddProductModal = () => {
    setAddProductModalOpen(false);
  };
  const openAddProductModal = () => {
    setAddProductModalOpen(true);
  };
  const [productCategory, setProductCategory] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");
  const changeProductCategory = (value) => {
    const productCategoryID = categoryList.filter((category) => {
      return value === category.name;
    });
    setProductCategory(value);
    // setProductCategoryId(productCategoryID[0].id);
  };
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const addProductData = useCallback(async () => {
    if (name === "" || productCategory === "" || price === null) {
      setError(true);
      setErrorMessage("Please Fill all the fields");
    } else {
      setError(false);
      const data = {
        name: name,
        category: Number(productCategoryId),
        sellingprice: Number(price),
        productCode,
      };
      const response = await axios.post(`${getUrl()}/product`, data, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      if (response.status === 201) {
        closeAddProductModal();
        setProductCategory("");
        setProductCategoryId("");
        setName("");
        setPrice(null);
        getProductList();
        MySwal.fire({
          icon: "success",
          title: "Great...",
          text: `${response.data}`,
        });
      }
    }
  }, [name, price, productCategory, productCategoryId, productCode]);
  const [productEditCategory, setProductEditCategory] = useState("");
  const [productEditCategoryId, setProductEditCategoryId] = useState("");
  const changeProductEditCategory = (value) => {
    const productCategoryID = categoryList.filter((category) => {
      return value === category.name;
    });
    setProductEditCategory(value);
    setProductEditCategoryId(productCategoryID[0].id);
  };
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(null);
  const getProduct = async () => {
    if (!selectedId) {
    } else {
      handleMenuClose();
      const response = await axios.get(`${getUrl()}/product/${selectedId}`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      if (response.status === 200) {
        const { data } = response;
        setEditName(data[0].product);
        setEditPrice(data[0].price);
        changeProductEditCategory(data[0].category);
        setEditProductCode(data[0].productcode);
        openEditProductModalOpen();
      }
    }
  };
  const updateProduct = useCallback(async () => {
    const data = {
      name: editName,
      category: Number(productEditCategoryId),
      sellingprice: Number(editPrice),
      productCode: editProductCode,
    };
    const response = await axios.patch(
      `${getUrl()}/product/${selectedId}`,
      data,
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
    if (response.status === 200) {
      closeEditProductModal();
      MySwal.fire({
        icon: "success",
        title: "Great...",
        text: `${response.data}`,
      });
      getProductList();
    }
  }, [editName, productEditCategoryId, editPrice, selectedId, editProductCode]);
  const removeProduct = async () => {
    handleMenuClose();
    MySwal.fire({
      title: "Do you want to remove?",
      showCancelButton: true,
      confirmButtonText: "Remove",
      cancelButtonText: `Keep`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(
          `${getUrl()}/product/${selectedId}`,
          { headers: { Authorization: `Bearer ${getAccessToken()}` } }
        );
        if (response.status === 200) {
          MySwal.fire({
            icon: "success",
            title: "Great...",
            text: `${response.data}`,
          });
          getProductList();
        }
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing="1"
    >
      <Grid style={{ marginBottom: "15px" }} item lg={12} md={12}>
        <Grid container direction="row" spacing="2">
          {localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "accountant" ? (
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
                <MenuItem onClick={getProduct}>Edit</MenuItem>
                <MenuItem onClick={removeProduct}>Delete</MenuItem>
                {/* Edit product modal */}
                <Modal
                  open={editProductModalOpen}
                  onClose={closeEditProductModal}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <EditProductModal
                    save={updateProduct}
                    name={editName}
                    setName={setEditName}
                    price={editPrice}
                    setPrice={setEditPrice}
                    category={productEditCategory}
                    setCategory={changeProductEditCategory}
                    productCode={editProductCode}
                    setProductCode={setEditProductCode}
                    categoryList={categoryList}
                    closeModal={closeEditProductModal}
                  />
                </Modal>
              </Menu>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item lg={3} md={3}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={openAddProductModal}
              fullWidth
              color="success"
              variant="contained"
              startIcon={<EditIcon />}
            >
              Add
            </Button>
            {/* Add product modal */}
            <Modal
              open={addProductModalOpen}
              onClose={closeAddProductModal}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <AddProductModal
                isError={error}
                errorMessage={errorMessage}
                save={addProductData}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                category={productCategory}
                setCategory={changeProductCategory}
                categoryList={categoryList}
                productCode={productCode}
                setProductCode={setProductCode}
                closeModal={closeAddProductModal}
              />
            </Modal>
          </Grid>
          <Grid item lg={6} md={6} />
        </Grid>
      </Grid>
      {productList.length > 1 && (
        <Grid item lg={12} md={12}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={productList}
              columns={columns}
              pageSize={5}
              checkboxSelection
              onRowSelected={onSelect}
            />
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default AllProducts;

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





  const [categoryList, setCategoryList] = useState([]);
  const [productCode, setProductCode] = useState("");

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
  console.log("name", name);
  const [category, setCategory] = useState('')
  console.log("category", category);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState("");

  const onFileChange = (event) => {
    // Update the state
    // console.log("file", event)
    // console.log("file", event.target.files[0].name)

    setFile(event.target.files[0].name);

  };
  const addProductData = useCallback(async () => {
    if (name === "" || price === null) {
      setError(true);
      setErrorMessage("Please Fill all the fields");
    } else {
      setError(false);
      const data = {
        name: name,
        category: category,
        selling_price: price,
        productCode,
        file
      };
      console.log("data", data)

      let formData = new FormData();
      formData.append('animal_picture', file);
      formData.append('name', name);
      formData.append('category', category);
      formData.append('selling_price', price);
      console.log('form data', formData)


      const response = await axios.post(`http://localhost:5000/api/animal/create`, formData, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      if (response.status === 201) {
        closeAddProductModal();
        setProductCategory("");
        setProductCategoryId("");
        setName("");
        setPrice(null);
        // getProductList();
        MySwal.fire({
          icon: "success",
          title: "Great...",
          // text: `${response.data}`,
        });
      }
    }
  }, [name, price, category]);



  // const [productEditCategory, setProductEditCategory] = useState("");
  // const [productEditCategoryId, setProductEditCategoryId] = useState("");
  // const changeProductEditCategory = (value) => {
  //   const productCategoryID = categoryList.filter((category) => {
  //     return value === category.name;
  //   });
  //   setProductEditCategory(value);
  //   setProductEditCategoryId(productCategoryID[0].id);
  // };
  // const [editName, setEditName] = useState("");
  // const [editPrice, setEditPrice] = useState(null);
  // const getProduct = async () => {
  //   if (!selectedId) {
  //   } else {
  //     handleMenuClose();
  //     const response = await axios.get(`${getUrl()}/product/${selectedId}`, {
  //       headers: { Authorization: `Bearer ${getAccessToken()}` },
  //     });
  //     if (response.status === 200) {
  //       const { data } = response;
  //       setEditName(data[0].product);
  //       setEditPrice(data[0].price);
  //       changeProductEditCategory(data[0].category);
  //       setEditProductCode(data[0].productcode);
  //       openEditProductModalOpen();
  //     }
  //   }
  // };


  // const updateProduct = useCallback(async () => {
  //   const data = {
  //     name: editName,
  //     category: Number(productEditCategoryId),
  //     sellingprice: Number(editPrice),
  //     productCode: editProductCode,
  //   };
  //   const response = await axios.patch(
  //     `${getUrl()}/product/${selectedId}`,
  //     data,
  //     { headers: { Authorization: `Bearer ${getAccessToken()}` } }
  //   );
  //   if (response.status === 200) {
  //     closeEditProductModal();
  //     MySwal.fire({
  //       icon: "success",
  //       title: "Great...",
  //       text: `${response.data}`,
  //     });
  //     getProductList();
  //   }
  // }, [editName, productEditCategoryId, editPrice, selectedId, editProductCode]);
  // const removeProduct = async () => {
  //   handleMenuClose();
  //   MySwal.fire({
  //     title: "Do you want to remove?",
  //     showCancelButton: true,
  //     confirmButtonText: "Remove",
  //     cancelButtonText: `Keep`,
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       const response = await axios.delete(
  //         `${getUrl()}/product/${selectedId}`,
  //         { headers: { Authorization: `Bearer ${getAccessToken()}` } }
  //       );
  //       if (response.status === 200) {
  //         MySwal.fire({
  //           icon: "success",
  //           title: "Great...",
  //           text: `${response.data}`,
  //         });
  //         getProductList();
  //       }
  //     } else if (result.isDenied) {
  //     }
  //   });
  // };

  return (
    <>
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
            file={file}
            setFile={setFile}
            price={price}
            setPrice={setPrice}
            category={category}
            setCategory={setCategory}
            categoryList={categoryList}
            productCode={productCode}
            setProductCode={setProductCode}
            closeModal={closeAddProductModal}
            onFileChange={onFileChange}
          />
        </Modal>
      </Grid>
    </>
  );
};

export default AllProducts;

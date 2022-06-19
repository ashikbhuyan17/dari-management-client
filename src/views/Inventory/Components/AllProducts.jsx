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

  const [batch_no, setBatch_no] = useState("");
  const [id_no, setId_no] = useState("");
  const [bio_flock_plant_no, setBio_flock_plant_no] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buying_price, setBuying_price] = useState("");
  const [purchase_date, setPurchase_date] = useState(new Date());




  const [category, setCategory] = useState('')
  console.log(category)
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
    if (price === null) {
      setError(true);
      setErrorMessage("Please Fill all the fields");
    } else {
      setError(false);
      const data = {
        category,
        productCode,
        file,
        batch_no,
        id_no,
        bio_flock_plant_no,
        weight,
        color,
        gender,
        age,
        quantity,
        selling_price: price,
        buying_price,
        purchase_date
      };
      console.log("data", data)

      let formData = new FormData();
      formData.append('animal_picture', file);
      formData.append('category', category);
      formData.append('batch_no', batch_no);
      formData.append('id_no', id_no);
      formData.append('bio_flock_plant_no', bio_flock_plant_no);
      formData.append('weight', weight);
      formData.append('color', color);
      formData.append('gender', gender);
      formData.append('age', age);
      formData.append('quantity', quantity);
      formData.append('selling_price', price);
      formData.append('buying_price', buying_price);
      formData.append('purchase_date', purchase_date);





      console.log('form data', formData)


      const response = await axios.post(`http://localhost:5000/api/animal/create`, formData, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      if (response.status === 201) {
        closeAddProductModal();
        // getProductList();
        MySwal.fire({
          icon: "success",
          title: "Great...",
          // text: `${response.data}`,
        });
      }
    }
  }, [price, category]);



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
          Create Animal
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

            file={file}
            setFile={setFile}

            category={category}
            setCategory={setCategory}

            closeModal={closeAddProductModal}

            onFileChange={onFileChange}

            batch_no={batch_no}
            setBatch_no={setBatch_no}

            id_no={id_no}
            setId_no={setId_no}

            bio_flock_plant_no={bio_flock_plant_no}
            setBio_flock_plant_no={setBio_flock_plant_no}

            weight={weight}
            setWeight={setWeight}


            color={color}
            setColor={setColor}

            gender={gender}
            setGender={setGender}

            age={age}
            setAge={setAge}

            quantity={quantity}
            setQuantity={setQuantity}

            buying_price={buying_price}
            setBuying_price={setBuying_price}

            price={price}
            setPrice={setPrice}

            purchase_date={purchase_date}
            setPurchase_date={setPurchase_date}



          />
        </Modal>
      </Grid>
    </>
  );
};

export default AllProducts;

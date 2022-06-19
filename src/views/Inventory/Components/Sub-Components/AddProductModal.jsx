import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import Form from 'react-bootstrap/Form';
import axios from "axios";

import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


import { getAccessToken } from "../../../../HTTP/token";
const AddProductModal = ({
  closeModal,
 

  isError,
  errorMessage,
  save,

  category,
  setCategory,
  
  onFileChange,

  batch_no,
  setBatch_no,

  id_no,
  setId_no,

  bio_flock_plant_no,
  setBio_flock_plant_no,

  weight,
  setWeight,

  color,
  setColor,

  gender,
  setGender,

  age,
  setAge,

  quantity,
  setQuantity,

  buying_price,
  setBuying_price,

  price,
  setPrice,

  purchase_date,
  setPurchase_date

}) => {
  // const [value, setValue] = React.useState(new Date());
  const handleChange = (newValue) => {
    setPurchase_date(newValue);
  };


  const [productCategoryList, setProductCategoryList] = useState();
  // console.log('productCategoryList', productCategoryList)
  // const a = productCategoryList?.map(data => console.log(data.label))
  const getProductCategoryList = async () => {
    const response = await axios.get(`http://localhost:5000/api/category/getCategory`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
    // console.log("getProductCategoryList", response)
    if (response.status === 200) {
      // console.log(response.data.categoryList)
      // const value = response.data.categoryList.map(data => console.log(data.name))
      // console.log("value", value)

      var arr = [
      ]
      var result = response.data.categoryList.map(person => (arr.push({ label: person._id, value: person.slug, id: person._id })));
      setProductCategoryList(arr)

    }
  }


  useEffect(() => {
    getProductCategoryList();
  }, [])


  // const [category, setCategory] = useState('')
  // console.log("category", category);

  // const [file, setFile] = useState('')
  // const onFileChange = (event) => {
  //   // Update the state
  //   console.log("file", event)
  //   console.log("file", event.target.files[0].name)

  //   setFile(event.target.files[0]);

  // };

  return (
    <>
      <Grid container>
        <Grid item lg={3} md={3} />
        <Grid item lg={6} md={6}>
          <Card>
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="1"
              >
                <Grid item lg={6} md={6}>
                  <h1>Add Animal</h1>
                </Grid>
                <Grid item lg={3} md={3} />
                <Grid item lg={2} md={2} />
                <Grid item lg={1} md={1}>
                  <h5>
                    <CloseIcon
                      color="error"
                      onClick={closeModal}
                      style={{ cursor: "pointer" }}
                    />
                  </h5>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="1"
              >
                {isError ? (
                  <Grid item lg={12} md={12} style={{ marginBottom: "15px" }}>
                    <Alert severity="warning" variant="filled">
                      {errorMessage}
                    </Alert>
                  </Grid>
                ) : (
                  <></>
                )}
              </Grid>
              <br />

              {/* category */}
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="1"
              >
                <Grid item lg={12} md={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
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
              <br />



              {/* batch_no  id_no*/}
              <Grid
                container spacing={2}
              >
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={batch_no}
                    onChange={(event) => {
                      setBatch_no(event.target.value);
                    }}
                    variant="outlined"
                    label="batch_no"
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={id_no}
                    onChange={(event) => {
                      setId_no(event.target.value);
                    }}
                    variant="outlined"
                    label="id_no"
                  />
                </Grid>
              </Grid>
              <br />


              {/* setBio_flock_plant_no setPurchase_date  */}
              <Grid
                container spacing={2}
              >
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={bio_flock_plant_no}
                    onChange={(event) => {
                      setBio_flock_plant_no(event.target.value);
                    }}
                    variant="outlined"
                    label="bio_flock_plant_no"
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>

                      <DateTimePicker
                        label="Date&Time picker"
                        value={purchase_date}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <br />



              {/* image weight */}
              <Grid
                container spacing={2}
              >
                <Grid item lg={6} md={6} style={{ border: '1px solid #dae0eb', padding: '0px', marginTop: '5px', textAlign: 'center', }}>
                  <Form.Group controlId="formFile" style={{ paddingTop: '20px' }}>
                    <Form.Control
                      type="file"
                      onChange={onFileChange}

                    />
                  </Form.Group>
                </Grid>
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={weight}
                    onChange={(event) => {
                      setWeight(event.target.value);
                    }}
                    variant="outlined"
                    label="weight"
                  />
                </Grid>
              </Grid>
              <br />



              {/* color gender */}
              <Grid
                container spacing={2}
              >
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={color}
                    onChange={(event) => {
                      setColor(event.target.value);
                    }}
                    variant="outlined"
                    label="color"
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={gender}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                    variant="outlined"
                    label="gender"
                  />
                </Grid>
              </Grid>
              <br />



              {/* age quantity */}
              <Grid
                container spacing={2}
              >
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={age}
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                    variant="outlined"
                    label="age"
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={quantity}
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                    variant="outlined"
                    label="quantity"
                  />
                </Grid>
              </Grid>
              <br />


              {/* buying_price selling_price */}
              <Grid
                container spacing={2}
              >
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={buying_price}
                    onChange={(event) => {
                      setBuying_price(event.target.value);
                    }}
                    variant="outlined"
                    label="buying_price"
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <TextField
                    fullWidth
                    value={price}
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                    variant="outlined"
                    label="selling_price"
                  />
                </Grid>
              </Grid>
              <br />



              {/* <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="1"
              >
                <Grid item lg={12} md={12}>
                  <TextField
                    fullWidth
                    value={productCode}
                    onChange={(event) => {
                      setProductCode(event.target.value);
                    }}
                    variant="outlined"
                    label="Product Code"
                  />
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="1"
              >
                <Grid item lg={12} md={12}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      onChange={onFileChange}

                    />
                  </Form.Group>
                </Grid>
              </Grid> */}




              {/* <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="1"
              >
                <Grid item lg={12} md={12}>
                  <TextField
                    fullWidth
                    type="number"
                    value={price}
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                    variant="outlined"
                    label="Selling Price"
                  />
                </Grid>
              </Grid> */}
            </CardContent>
            <Divider />
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="1"
              >
                <Grid item lg={12} md={12}>
                  <Button
                    fullWidth
                    onClick={save}
                    variant="contained"
                    color="success"
                    endIcon={<SaveOutlinedIcon />}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} />
      </Grid>
    </>
  );
};

export default React.memo(AddProductModal);

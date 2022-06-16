import React from "react";
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
const EditProductModal = ({
  closeModal,
  categoryList,
  category,
  setCategory,
  name,
  setName,
  price,
  setPrice,
  isError,
  errorMessage,
  save,
  productCode,
  setProductCode,
}) => {
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
                  <h1>Edit Product</h1>
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
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="1"
              >
                <Grid item lg={12} md={12}>
                  <TextField
                    fullWidth
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    variant="outlined"
                    label="Name"
                  />
                </Grid>
              </Grid>
              <br />
              <Grid
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
              <br />
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
                      {categoryList.map((category) => {
                        return (
                          <MenuItem key={category.id} value={category.name}>
                            {category.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4} md={4} />
              </Grid>
              <br />
              <Grid
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

export default React.memo(EditProductModal);

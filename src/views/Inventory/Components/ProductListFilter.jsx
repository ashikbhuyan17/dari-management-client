import { Autocomplete, Card, InputLabel, Select, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import brands from '../../POS/data/brand';
const ProductListFilter = ()=>{
    const [isSelling,setIsSelling] = useState(false);
    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h4">Filters</Typography>
                    <br />
                    <Divider/>
                    <br />
                    <Grid container>
                        <Grid item lg={2} md={2}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Product Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Product Type"
                                >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Single">Single</MenuItem>
                                <MenuItem value="Variable">Variable</MenuItem>
                                <MenuItem value="Combo">Combo</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={1} md={1}/>
                        <Grid item lg={2} md={2}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Category"
                                >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Accessories">Accessories</MenuItem>
                                <MenuItem value="Books">Books</MenuItem>
                                <MenuItem value="Electronics">Electronics</MenuItem>
                                <MenuItem value="Foods & Grocery">Foods & Grocery</MenuItem>
                                <MenuItem value="Women's">Women's</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={1} md={1}/>
                        <Grid item lg={2} md={2}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Unit</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Unit"
                                >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Piece">Pieces (Pc(s))</MenuItem>
                                <MenuItem value="Packets">Packets</MenuItem>
                                <MenuItem value="Grams">Grams</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={1} md={1}/>
                        <Grid item lg={2} md={2}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Tax</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Tax"
                                >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Vat@10%">Vat@10%</MenuItem>
                                <MenuItem value="CGST@10%">CGST@10%</MenuItem>
                                <MenuItem value="SGST@8%">SGST@8%</MenuItem>
                                <MenuItem value="GST@18%">GST@18%</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container>
                        <Grid item lg={2} md={2}>
                            <Autocomplete
                                fullWidth
                                id="combo-box-demo"
                                options={brands}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => <TextField  {...params} label="Brands" variant="outlined" />}
                                />
                        </Grid>
                        <Grid item lg={1} md={1}/>
                        <Grid item lg={2} md={2}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Business Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Business Location"
                                >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Shop1">Shop 1</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={1} md={1}/>
                        <Grid item lg={2} md={2}>
                            <FormControl 
                                fullWidth 
                                variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Activity</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Activity"
                                >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Inactive">Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={1} md={1}/>
                        <Grid item lg={2} md={2}>
                            <FormControlLabel
                                    control={<Checkbox checked={isSelling} onChange={()=>{setIsSelling(!isSelling)}} name="Not For Selling" />}
                                    label="Not For Selling"
                                />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductListFilter;
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import AddPurchaseCategoryForm from "../Components/AddPurchaseCategoryForm";
import PurchaseCategoryList from "../Components/PurchaseCategoryList";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import getUrl from "../../../HTTP/url";
import { getAccessToken } from "../../../HTTP/token";
const MySwal = withReactContent(Swal)

const AddPurchaseCategory = () => {
    const [categoryList,setCategoryList] = useState([]);
    const getCategoryList = async()=>{
        const response = await axios.get(`${getUrl()}/purchase-category/list`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
        if(response.status === 200){
            setCategoryList(response.data);
        }
    }
    useEffect(()=>{
        getCategoryList();
    },[])
    const [category,setCategory] = useState("");
    const [isError,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");
    const changeCategoryValue = (value)=>{
        if(value !==""){
            setError(false);
            setCategory(value);
        }else{setCategory(value)};
    }
    const createCategory = async()=>{
        if(category === ""){
            setError(true);
            setErrorMsg("Please Fill All The Fields");
        }else{
            const data = {
                name: category
            }
            try{
                const response = await axios.post(`${getUrl()}/purchase-category`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
                if(response.status === 201){
                    MySwal.fire({
                        icon: 'success',
                        title: 'Great...',
                        text: `${response.data}`,
                    });
                    getCategoryList();
                    setCategory("");
                }
            }catch(error){
                MySwal.fire({
                    icon: 'error',
                    text: `${error.message}`,
                });
            }
        }
    }
    const removeCategory = async(handleMenuClose,selectedId)=>{
        if(selectedId === null) {
            MySwal.fire({
                icon: 'error',
                title: 'Sorry...',
                text: `But you must select an id first`,
            });
        }else{
            handleMenuClose();
            MySwal.fire({
            title: 'Do you want to remove?',
            showCancelButton: true,
            confirmButtonText: 'Remove',
            cancelButtonText: `Keep`,
            }).then(async(result) => {
            if (result.isConfirmed) {
                try{
                    const response = await axios.delete(`${getUrl()}/purchase-category/${selectedId}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});

                    if(response.status === 200){
                        MySwal.fire({
                            icon: 'success',
                            title: 'Great...',
                            text: `${response.data}`,
                        });
                        getCategoryList();
                    }
                }catch(error){
                    MySwal.fire({
                        icon: 'error',
                        text: `${error.message}`,
                    });
                }
            } else if (result.isDenied) {}
            })
        }
    }
    const [editCategory,setEditCategory] = useState("")
    const [editCategoryId,setEditCategoryId] = useState(null)
    const getCategory = async(handleClose,openModal,id)=>{
        handleClose();
        openModal();
        try{
            const response = await axios.get(`${getUrl()}/purchase-category/${id}`,{headers: {Authorization: `Bearer ${getAccessToken()}`}});

            if(response.status === 200){
                const {data} = response;
                setEditCategory(data.name);
                setEditCategoryId(data.id);
            }
        }catch(error){
            MySwal.fire({
                icon: 'error',
                text: `${error.message}`,
            });
        }
    }
    const updateCategory = async(closeModal)=>{
        const data = {
            name: editCategory
        }
        try{
            const response = await axios.patch(`${getUrl()}/purchase-category/${editCategoryId}`,data,{headers: {Authorization: `Bearer ${getAccessToken()}`}});
            
            if(response.status === 200){
                MySwal.fire({
                    icon: 'success',
                    title: 'Great...',
                    text: `${response.data}`,
                });
                closeModal();
                getCategoryList();
            }
        }catch(error){
            MySwal.fire({
                icon: 'error',
                text: `${error.message}`,
            });
        }
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
                    <h2>Create Purchase Category</h2>
                </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid item lg={12} md={12}>
                <AddPurchaseCategoryForm
                isError={isError}
                errorMsg={errorMsg}
                category={category}
                setCategory={changeCategoryValue}
                createCategory={createCategory}/>
              </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid item lg={12} md={12}>
                {categoryList.length>0 && 
                <PurchaseCategoryList 
                data={categoryList} 
                remove={removeCategory} 
                getCategory={getCategory}
                editCategory={editCategory}
                setCategory={setEditCategory}
                update={updateCategory}
                />}
              </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
};

export default AddPurchaseCategory;

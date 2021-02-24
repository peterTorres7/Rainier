import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
// import AuthButton from './AuthButton';

import {
    TextField,
    makeStyles,
    FormContorl,
    Input,
    InputLabel,
 } from "@material-ui/core";

 const defaultFormValues = {
     productName: "",
     productQty: '',
     productPrice: '',
     productUser: '',
     productDate: '',
 };

 const useStyles = makeStyles((theme) => ({
     root: {
         border: 1,
         borderRadius: 2,
         color: 'grey',
         height: 20,
         padding: '20 30px',
         margin: theme.spacing(5),
     },
     formControl: {
         //margin: theme.spacing(5),
         padding: 20,             
    },
    title: {
        margin: theme.spacing(1),
    },
 }));

 function CreateProduct() {
     const classes = useStyles();
     const [productFormValues, setProductFormValues] = useState(defaultFormValues);
     const [success, setSuccess] = useState(false);
     const { getAccessTokenSilently } = useAuth0();

     const handleInputChange = (event) => {
         const { name, value } = event.target;
         setProductFormValues({
             ...setProductFormValues,
            [name] : value,
         });
     };

     const handleSubmit = async (event) => {
         event.preventDefault();
         const authToken = await getAccessTokenSilently();

         const requestConfig = {
             url: "http://localhost:4000/api/v1/products/",
             method: "post",
             headers: { 
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${authToken}`,
             },
             data: {
                 productName: productFormValues.productName,
                 qty: productFormValues.productQty,
                 price: productFormValues.price,
                 user: productFormValues.productUser,
                 date: productFormValues.productDate,
             },
         };

         axios(requestConfig)
            .then((response) => {
                setSuccess(true);
                console.log(`Product created ${response.data}`);
            })
            .catch((err) => {
                console.log("error");
            });
     };

    if (success) {
        return <Redirect to="/item/itemCreated" />;
    }
    else {
        return (
            <form
                onSubmit={handleSubmit}
                class={classes.root}
                id="productCreateForm">
                Enter Details of Product for sale:
                {/* <AuthButton>Authentication Button</AuthButton> */}
                <TextField class = {classes.root} placeholder="Product Name" value={productFormValues.productName} onChange={handleInputChange} />
                <TextField class = {classes.root} placeholder="Product Quantity" value={productFormValues.productQty} />
                <TextField class = {classes.root} placeholder="Product Price" value={productFormValues.productPrice} />
                <TextField class = {classes.root} placeholder="Product User" value={productFormValues.productUser} />
                <TextField class = {classes.root} placeholder="Product Date" value={productFormValues.productDate} />
                <button class = {classes.formControl}  onClick={handleInputChange} >Submit new product for sale</button>
            </form>
        )
    }
};
    
export default withAuthenticationRequired(CreateProduct, {
    returnTo: () => '/item/CreateProduct',
});